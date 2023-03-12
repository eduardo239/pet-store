package com.example.petstore.DTO.pets;

import com.example.petstore.DTO.users.PersonBasicDTO;
import com.example.petstore.model.Comment;
import com.example.petstore.model.Person;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;


@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class PetCompleteDTO {
  private Long id;
  private String name;
  private double price;
  private LocalDate birthDay;
  private boolean isForSale;
  private String gender;
  private String photo;
  private PersonBasicDTO owner;
  private List<Comment> comments;
  private LocalDateTime createdAt;
  private LocalDateTime updatedAt;
}
