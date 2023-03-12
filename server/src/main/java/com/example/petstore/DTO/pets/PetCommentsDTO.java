package com.example.petstore.DTO.pets;

import com.example.petstore.DTO.users.PersonBasicDTO;
import com.example.petstore.model.Comment;
import lombok.*;

import java.time.LocalDate;
import java.util.List;


@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class PetCommentsDTO {
  private Long id;
  private String name;
  private String gender;
  private String photo;
  private PersonBasicDTO owner;
  private List<Comment> comments;
}
