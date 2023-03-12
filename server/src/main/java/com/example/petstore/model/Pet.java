package com.example.petstore.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Pet {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String name;
  private double price;
  private LocalDate birthDay;
  private boolean isForSale;
  private String gender;
  @Column(columnDefinition = "TEXT")
  private String photo;

  @JsonBackReference
  @ManyToOne(fetch = FetchType.EAGER, optional = false)
  @JoinColumn(name = "owner_id", nullable = false)
  private Person owner;
  
  private LocalDateTime createdAt = LocalDateTime.now();
  private LocalDateTime updatedAt;
}
