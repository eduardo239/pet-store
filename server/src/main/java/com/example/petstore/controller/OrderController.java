package com.example.petstore.controller;


import com.example.petstore.DTO.orders.OrdersBasicDTO;
import com.example.petstore.DTO.pets.PetBasicDTO;
import com.example.petstore.helper.*;
import com.example.petstore.model.Address;
import com.example.petstore.model.Orders;
import com.example.petstore.model.Person;
import com.example.petstore.model.Pet;
import com.example.petstore.repository.AddressRepository;
import com.example.petstore.repository.OrdersRepository;
import com.example.petstore.repository.PersonRepository;
import com.example.petstore.repository.PetRepository;
import com.example.petstore.response.ResponseHandler;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@CrossOrigin(origins = Cons.CLIENT_URL_BASE)
@RestController
@RequestMapping(Cons.CLIENT_ENDPOINT_ORDERS)
public class OrderController {

  @Autowired
  private ModelMapper modelMapper;
  @Autowired
  private OrdersRepository ordersRepository;
  @Autowired
  private PersonRepository personRepository;
  @Autowired
  private PetRepository petRepository;
  @Autowired
  private AddressRepository addressRepository;

  @GetMapping
  public ResponseEntity<Object> getAllOrders(
      @RequestParam(value = "limit", required = false, defaultValue = "0") Integer limit,
      @RequestParam(value = "offset", required = false, defaultValue = "3") Integer offset,
      @RequestParam(defaultValue = "id") String sort,
      @RequestParam(defaultValue = "asc") String order) {

    Pageable paging = PageRequest.of(limit, offset, Sort.by(sort));
    try {
      if (order != null && order.equals("asc")) {
        paging = PageRequest.of(limit, offset, Sort.by(sort).ascending());
      } else if (order != null && order.equals("desc")) {
        paging = PageRequest.of(limit, offset, Sort.by(sort).descending());
      }

      Page<Orders> ordersPage = ordersRepository.findAll(paging);
      Page<OrdersBasicDTO> ordersPageBasic = ordersPage.map(
          orders -> modelMapper.map(orders, OrdersBasicDTO.class));


      return ResponseHandler.generateResponse(ConsOrders.ORDERS_FOUNDED_SUCCESS, HttpStatus.OK, ordersPageBasic);
    } catch (Exception e) {
      return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.BAD_REQUEST, null);
    }
  }


  // TODO: fix
  @PostMapping
  public ResponseEntity<Object> addOrderAndAddTransferPets(@RequestBody Orders orders) {
    // buscar o user, salvar o endereço buscar os pets, salvar tudo
    Optional<Person> buyer_ = personRepository.findById(orders.getBuyer().getId());
    Optional<Person> seller_ = personRepository.findById(orders.getSeller().getId());
    if (buyer_.isEmpty() || seller_.isEmpty()) {
      return ResponseHandler.generateResponse(
          ConsUser.USER_NOT_FOUND, HttpStatus.OK, null);
    }

    if (orders.getPets().size() == 0) {
      return ResponseHandler.generateResponse(
          ConsPets.PET_REQUIRED, HttpStatus.OK, null);
    }

    if (orders.getAddress() == null || orders.getAddress().getCep() == null) {
      return ResponseHandler.generateResponse(
          ConsAddr.ADDRESS_REQUIRED, HttpStatus.OK, null);
    }

    try {
      Set<Pet> petOrderList = orders.getPets();
      Set<Pet> petListToUpdate = new HashSet<>();

      petOrderList.forEach(pet -> {
        Optional<Pet> optionalPet = petRepository.findById(pet.getId());
        if (optionalPet.isPresent()) {
          optionalPet.get().setPrice(0);
          optionalPet.get().setForSale(false);
          optionalPet.get().setOwner(buyer_.get());
          optionalPet.ifPresent(petListToUpdate::add);
        }
      });

      if (petOrderList.size() != petListToUpdate.size()) {
        return ResponseHandler.generateResponse(
            ConsPets.ONE_OR_MORE_PET_NOT_FOUND, HttpStatus.OK, null);
      }

      // salvar o valor total da compra
      // orders.setTotalPrice(totalPrice);

      orders.setPets(petListToUpdate);

      // Validar o endereço
      Address address = addressRepository.save(orders.getAddress());
      orders.setAddress(address);

      // Adicionar o pedido ao usuário
      orders.setBuyer(buyer_.get());
      orders.setSeller(seller_.get());

      // Salvar o pedido
      Orders newOrder = ordersRepository.save(orders);
      OrdersBasicDTO orderResponse = modelMapper.map(newOrder, OrdersBasicDTO.class);

      return ResponseHandler.generateResponse(
          ConsPets.PET_REGISTERED_SUCCESS, HttpStatus.OK, orderResponse);

    } catch (Exception e) {
      return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.BAD_REQUEST, null);

    }
  }

  @GetMapping("{id}")
  public ResponseEntity<Object> getOrderById(@PathVariable Long id) {
    Optional<Orders> order_ = ordersRepository.findById(id);
    if (order_.isPresent()) {
      OrdersBasicDTO orderResponse = modelMapper.map(order_, OrdersBasicDTO.class);
      return ResponseHandler.generateResponse(ConsOrders.ORDER_FOUNDED_SUCCESS, HttpStatus.OK, orderResponse);
    } else {
      return ResponseHandler.generateResponse(ConsOrders.ORDER_NOT_FOUND, HttpStatus.NOT_FOUND, null);
    }
  }

  @DeleteMapping("{id}")
  public ResponseEntity<Object> deleteOrderById(@PathVariable Long id) {
    Optional<Orders> order_ = ordersRepository.findById(id);
    if (order_.isPresent()) {
      ordersRepository.deleteById(id);
      return ResponseHandler.generateResponse(ConsOrders.ORDER_REMOVED_SUCCESS, HttpStatus.OK, null);
    } else {
      return ResponseHandler.generateResponse(ConsOrders.ORDER_NOT_FOUND, HttpStatus.NOT_FOUND, null);
    }
  }

  @DeleteMapping("/delete-all")
  public ResponseEntity<Object> deleteAllOrders() {
    try {
      ordersRepository.deleteAll();
      return ResponseHandler.generateResponse(ConsOrders.ORDERS_REMOVED_SUCCESS, HttpStatus.OK, null);
    } catch (Exception e) {
      return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.BAD_REQUEST, null);
    }
  }
}
