package com.example.petstore.DTO.users;

import com.example.petstore.model.Address;
import lombok.*;

import java.time.LocalDateTime;

@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class PersonMinDTO {
  private Long id;
  private String username;
  private String photo;
}
