package com.example.petstore.DTO.comments;

import com.example.petstore.DTO.users.PersonBasicDTO;
import com.example.petstore.DTO.users.PersonMinDTO;
import lombok.*;

import java.time.LocalDate;


@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class CommentsBasicDTO {
  private Long id;
  private String content;
  private int likes;
  private PersonMinDTO person;
}
