package com.example.petstore.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Address {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String cep;
  private String street;
  private String number;
  private String complement;
  private String city;
  private String state;
  private LocalDateTime createdAt = LocalDateTime.now();
  private LocalDateTime updatedAt;
}
