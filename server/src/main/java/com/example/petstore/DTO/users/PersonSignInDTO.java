package com.example.petstore.DTO.users;

import lombok.Data;

@Data
public class PersonSignInDTO {
  private Long id;
  private String email;
  private String password;
}
