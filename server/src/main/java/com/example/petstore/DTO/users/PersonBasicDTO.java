package com.example.petstore.DTO.users;

import com.example.petstore.model.Address;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class PersonBasicDTO {
  private Long id;
  private String username;
  private String email;
  private String photo;
  private Address address;
  private LocalDateTime createdAt;
  private LocalDateTime updatedAt;
}
