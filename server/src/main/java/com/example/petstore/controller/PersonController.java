package com.example.petstore.controller;

import com.example.petstore.DTO.orders.OrdersBasicDTO;
import com.example.petstore.DTO.pets.PetBasicDTO;
import com.example.petstore.DTO.users.*;
import com.example.petstore.helper.*;
import com.example.petstore.model.Address;
import com.example.petstore.model.Orders;
import com.example.petstore.model.Person;
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
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.Optional;


@CrossOrigin(origins = Cons.CLIENT_URL_BASE)
@RestController
@RequestMapping(Cons.CLIENT_ENDPOINT_USERS)
public class PersonController {

  @Autowired
  private ModelMapper modelMapper;
  @Autowired
  private PersonRepository personRepository;
  @Autowired
  private PetRepository petRepository;
  @Autowired
  private OrdersRepository ordersRepository;

  @PostMapping("/sign-up")
  public ResponseEntity<Object> userRegistration(@RequestBody PersonSignUpDTO person) {
    boolean personExists = personRepository.existsByEmailIgnoreCase(person.getEmail());
    boolean usernameExists = personRepository.existsByUsernameIgnoreCase(person.getUsername());

    if (personExists) {
      return ResponseHandler.generateResponse(
          ConsUser.EMAIL_ALREADY_EXISTS, HttpStatus.BAD_REQUEST, null);

    } else if (usernameExists) {
      return ResponseHandler.generateResponse(
          ConsUser.USERNAME_ALREADY_EXISTS, HttpStatus.BAD_REQUEST, null);
    } else {
      try {
        // Criptografar a senha
        BCryptPasswordEncoder bCrypt =
            new BCryptPasswordEncoder(Cons.BCRYPT_STRENGTH, new SecureRandom());
        String encodedPassword = bCrypt.encode(person.getPassword());
        person.setPassword(encodedPassword);

        // Mapear os dados para o DTO
        Person newPerson = modelMapper.map(person, Person.class);
        Person savedPerson = personRepository.save(newPerson);

        PersonBasicDTO personResponse = modelMapper.map(savedPerson, PersonBasicDTO.class);
        return ResponseHandler.generateResponse(
            ConsUser.USER_REGISTERED_SUCCESS, HttpStatus.CREATED, personResponse);
      } catch (Exception e) {
        return ResponseHandler.generateResponse(
            e.getMessage(), HttpStatus.BAD_REQUEST, null);
      }
    }
  }


  @PostMapping("/sign-in")
  public ResponseEntity<Object> userLogin(@RequestBody PersonSignInDTO person) {
    boolean personExists = personRepository.existsByEmailIgnoreCase(person.getEmail());
    if (personExists) {
      Person foundPerson = personRepository.findOneByEmailIgnoreCase(person.getEmail());
      try {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        if (encoder.matches(person.getPassword(), foundPerson.getPassword())) {
          PersonBasicDTO personResponse = modelMapper.map(foundPerson, PersonBasicDTO.class);
          return ResponseHandler.generateResponse(ConsUser.USER_FOUNDED_SUCCESS, HttpStatus.OK, personResponse);
        } else {
          return ResponseHandler.generateResponse(ConsUser.INVALID_EMAIL_OR_PASSWORD, HttpStatus.BAD_REQUEST, null);
        }
      } catch (Exception e) {
        return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.NOT_FOUND, null);
      }
    } else {
      return ResponseHandler.generateResponse(ConsUser.USER_NOT_FOUND, HttpStatus.NOT_FOUND, null);
    }
  }

  @GetMapping
  public ResponseEntity<Object> getAllPersons(
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

      Page<Person> personPage = personRepository.findAll(paging);
      Page<PersonBasicDTO> personPageBasic = personPage.map(
          person -> modelMapper.map(person, PersonBasicDTO.class));

      return ResponseHandler.generateResponse(ConsUser.USERS_FOUNDED_SUCCESS, HttpStatus.OK, personPageBasic);
    } catch (Exception e) {
      return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.BAD_REQUEST, null);
    }
  }

  @GetMapping("{id}")
  public ResponseEntity<Object> getPersonById(@PathVariable Long id) {
    Optional<Person> person_ = personRepository.findById(id);
    if (person_.isPresent()) {
      PersonCompleteDTO personResponse = modelMapper.map(person_, PersonCompleteDTO.class);
      return ResponseHandler.generateResponse(ConsUser.USER_FOUNDED_SUCCESS, HttpStatus.OK, personResponse);
    } else {
      return ResponseHandler.generateResponse(ConsUser.USER_NOT_FOUND, HttpStatus.NOT_FOUND, null);
    }
  }

  @PutMapping("{id}")
  public ResponseEntity<Object> updatePersonById(@PathVariable Long id, @RequestBody PersonUpdateDTO person) {
    Optional<Person> person_ = personRepository.findById(id);

    // Verificar se a senha foi preenchida corretamente
    if (person.getPassword() == null
        || person.getPassword().length() == 0
        || person.getNewPassword() == null
        || person.getNewPassword().length() == 0) {
      return ResponseHandler.generateResponse(
          ConsUser.INVALID_EMAIL_OR_PASSWORD, HttpStatus.BAD_REQUEST, null);
    }

    if (person_.isPresent()) {
      // Verificar se a senha está correta
      BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
      if (encoder.matches(person.getPassword(), person_.get().getPassword())) {

        // Valida se o username já está cadastrado
        boolean personUsernameExists = personRepository.existsByUsernameIgnoreCase(person.getUsername());
        if (personUsernameExists
            && person.getUsername() != null
            && person.getUsername().length() > 0
            && !Objects.equals(person_.get().getUsername(), person.getUsername())) {
          return ResponseHandler.generateResponse(ConsUser.USERNAME_ALREADY_EXISTS, HttpStatus.BAD_REQUEST, null);
        }

        // Valida se o e-mail já está cadastrado
        boolean personEmailExists = personRepository.existsByEmailIgnoreCase(person.getEmail());
        if (personEmailExists
            && person.getEmail() != null
            && person.getEmail().length() > 0
            && !Objects.equals(person_.get().getEmail(), person.getEmail())) {
          return ResponseHandler.generateResponse(ConsUser.EMAIL_ALREADY_EXISTS, HttpStatus.BAD_REQUEST, null);
        }

        // Atualiza o e-mail
        if (person.getEmail() != null
            && person.getEmail().length() > 0
            && !Objects.equals(person_.get().getEmail(), person.getEmail())) {
          person_.get().setEmail(person.getEmail());
          personRepository.save(person_.get());
        }

        // Atualiza o nome de usuário
        if (person.getUsername() != null
            && person.getUsername().length() > 0
            && !Objects.equals(person_.get().getUsername(), person.getUsername())) {

          person_.get().setUsername(person.getUsername());
          personRepository.save(person_.get());
        }

        // Atualiza foto do perfil
        if (person.getPhoto() != null
            && person.getPhoto().length() > 0
            && !Objects.equals(person_.get().getPhoto(), person.getPhoto())) {
          person_.get().setPhoto(person.getPhoto());
          personRepository.save(person_.get());
        }

        // Encriptar a senha e salvar
        BCryptPasswordEncoder bCrypt = new BCryptPasswordEncoder(Cons.BCRYPT_STRENGTH, new SecureRandom());
        String encodedPassword = bCrypt.encode(person.getNewPassword());
        person_.get().setPassword(encodedPassword);
        personRepository.save(person_.get());

        // Salva a data da modificação
        LocalDateTime updatedAt = LocalDateTime.now();
        person_.get().setUpdatedAt(updatedAt);
        personRepository.save(person_.get());

        PersonBasicDTO personResponse = modelMapper.map(person_, PersonBasicDTO.class);

        return ResponseHandler.generateResponse(ConsUser.USER_UPDATED_SUCCESS, HttpStatus.OK, personResponse);
      } else {
        return ResponseHandler.generateResponse(ConsUser.INVALID_PASSWORD, HttpStatus.BAD_REQUEST, null);
      }
    } else {
      return ResponseHandler.generateResponse(ConsUser.USER_NOT_FOUND, HttpStatus.BAD_REQUEST, null);
    }
  }

  @PutMapping("/{id}/address")
  public ResponseEntity<Object> updateAddress(@PathVariable Long id, @RequestBody Address address) {
    Optional<Person> person_ = personRepository.findById(id);
    if (person_.isPresent()) {
      person_.get().setAddress(address);
      // Salva a data da modificação
      LocalDateTime updatedAt = LocalDateTime.now();
      person_.get().getAddress().setUpdatedAt(updatedAt);
      person_.get().setUpdatedAt(updatedAt);
      Person savedPerson = personRepository.save(person_.get());
      PersonBasicDTO personResponse = modelMapper.map(savedPerson, PersonBasicDTO.class);
      return ResponseHandler.generateResponse(ConsUser.USER_UPDATED_SUCCESS, HttpStatus.OK, personResponse);
    } else {
      return ResponseHandler.generateResponse(ConsUser.USER_NOT_FOUND, HttpStatus.NOT_FOUND, null);
    }
  }

  @GetMapping("{id}/address")
  public ResponseEntity<Object> getAddressByUserId(@PathVariable Long id) {
    Optional<Person> person_ = personRepository.findById(id);
    if (person_.isPresent()) {
      Address address = person_.get().getAddress();
      return ResponseHandler.generateResponse(ConsAddr.ADDRESS_FOUNDED_SUCCESS, HttpStatus.OK, address);
    } else {
      return ResponseHandler.generateResponse(ConsAddr.ADDRESS_NOT_FOUND, HttpStatus.NOT_FOUND, null);
    }
  }

  // TODO: Refatorar, paginação
  @GetMapping("{id}/pets")
  public ResponseEntity<Object> getPetsByPerson(@PathVariable Long id) {
    Optional<Person> personOptional = personRepository.findById(id);
    if (personOptional.isPresent()) {
      List<PetBasicDTO> petList = petRepository.findByOwner(personOptional.get()).stream().map(
          pet -> modelMapper.map(pet, PetBasicDTO.class)).toList();
      return ResponseHandler.generateResponse(ConsPets.PETS_FOUNDED_SUCCESS, HttpStatus.OK, petList);
    } else {
      return ResponseHandler.generateResponse(ConsPets.PET_NOT_FOUND, HttpStatus.NOT_FOUND, null);
    }
  }

  // TODO: Refatorar, paginação
  @GetMapping("{id}/orders")
  public ResponseEntity<Object> getOrdersByPerson(@PathVariable Long id) {
    Optional<Person> personOptional = personRepository.findById(id);
    if (personOptional.isPresent()) {

      List<OrdersBasicDTO> orderList = ordersRepository.findByBuyer(personOptional.get()).stream().map(
          order -> modelMapper.map(order, OrdersBasicDTO.class)).toList();
      return ResponseHandler.generateResponse(ConsOrders.ORDERS_FOUNDED_SUCCESS, HttpStatus.OK, orderList);
    } else {
      return ResponseHandler.generateResponse(ConsOrders.ORDERS_NOT_FOUND, HttpStatus.NOT_FOUND, null);
    }
  }


  // FIXME: org.postgresql.util.PSQLException: ERROR: update or delete on table
  //  "person" violates foreign key constraint "fk251rqwlb1bet511mh15nu1emv" on table "orders"
  //  Detalhe: Key (id)=(1) is still referenced from table "orders".
  @DeleteMapping("{id}")
  public ResponseEntity<Object> deletePersonById(@PathVariable Long id) {
    Optional<Person> person_ = personRepository.findById(id);
    if (person_.isPresent()) {
      personRepository.deleteById(id);
      return ResponseHandler.generateResponse(ConsUser.USER_REMOVED_SUCCESS, HttpStatus.OK, null);
    } else {
      return ResponseHandler.generateResponse(ConsUser.USER_NOT_FOUND, HttpStatus.NOT_FOUND, null);
    }
  }

  @DeleteMapping("/delete-all")
  public ResponseEntity<Object> deleteAllUsers() {
    try {
      personRepository.deleteAll();
      return ResponseHandler.generateResponse(ConsUser.USERS_REMOVED_SUCCESS, HttpStatus.OK, null);
    } catch (Exception e) {
      return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.BAD_REQUEST, null);
    }
  }
}
