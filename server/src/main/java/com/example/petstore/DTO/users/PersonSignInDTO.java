package com.example.petstore.DTO.users;

import lombok.*;

@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class PersonSignInDTO {
  private Long id;
  private String email;
  private String password;
}
