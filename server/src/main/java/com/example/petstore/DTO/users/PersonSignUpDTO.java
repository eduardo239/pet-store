package com.example.petstore.DTO.users;

import lombok.Data;

@Data
public class PersonSignUpDTO {
  private Long id;
  private String username;
  private String email;
  private String password;
}
