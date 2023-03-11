package com.example.petstore.DTO.pets;

import com.example.petstore.DTO.users.PersonBasicDTO;
import lombok.Data;

import java.time.LocalDate;

@Data
public class PetBasicDTO {
  private Long id;
  private String name;
  private double price;
  private LocalDate birthDay;
  private boolean isForSale;
  private String gender;
  private String photo;
  private PersonBasicDTO owner;
}
