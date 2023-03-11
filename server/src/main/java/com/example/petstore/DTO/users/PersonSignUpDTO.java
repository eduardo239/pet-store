package com.example.petstore.DTO.users;

import lombok.*;

@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class PersonSignUpDTO {
  private Long id;
  private String username;
  private String email;
  private String password;
}
