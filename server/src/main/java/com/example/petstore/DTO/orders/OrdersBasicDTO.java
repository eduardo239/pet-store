package com.example.petstore.DTO.orders;

import com.example.petstore.DTO.users.PersonBasicDTO;
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
  /*
    private Person seller;
    private Address;

  */
  private List<Pet> pets;
  private LocalDateTime createdAt;
  private LocalDateTime updatedAt;
}
