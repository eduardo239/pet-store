package com.example.petstore.DTO.users;

import com.example.petstore.model.Address;
import com.example.petstore.model.Pet;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Set;

@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class PersonCompleteDTO {
  private Long id;
  private String username;
  private String email;
  private String photo;
  private Address address;
  private LocalDateTime createdAt;
  private LocalDateTime updatedAt;
  private Set<Pet> pets;
}
