package com.example.petstore.DTO.users;

import com.example.petstore.model.Address;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class PersonUpdateDTO {
  private Long id;
  private String username;
  private String email;
  private String photo;
  private Address address;
  private String password;
  private String newPassword;
  private LocalDateTime createdAt;
  private LocalDateTime updatedAt;
}
