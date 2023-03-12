package com.example.petstore.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Comment {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(columnDefinition = "TEXT")
  private String content;
  private int likes;

  @OneToOne(cascade = CascadeType.MERGE, orphanRemoval = true)
  @JoinColumn(name = "person_id", referencedColumnName = "id")
  private Person person;
  
}
