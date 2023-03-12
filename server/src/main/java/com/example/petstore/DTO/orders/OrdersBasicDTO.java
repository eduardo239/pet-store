package com.example.petstore.DTO.orders;

import com.example.petstore.DTO.users.PersonBasicDTO;
import com.example.petstore.model.Address;
import com.example.petstore.model.Person;
import com.example.petstore.model.Pet;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class OrdersBasicDTO {

  private Long id;
  private double totalPrice;
  private boolean completedOrder = false;
  private PersonBasicDTO buyer;
  private PersonBasicDTO seller;
  private Address address;
  private List<Pet> pets;
  private LocalDateTime createdAt;
  private LocalDateTime updatedAt;
}
