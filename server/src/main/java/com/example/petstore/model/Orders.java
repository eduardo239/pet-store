package com.example.petstore.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Orders {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private double totalPrice;
  private boolean completedOrder = false;

  @JsonBackReference
  @ManyToOne(fetch = FetchType.EAGER, optional = false)
  @JoinColumn(name = "buyer_id", nullable = false)
  private Person buyer;

  // @JsonManagedReference
//  @OneToMany(cascade = CascadeType.MERGE, fetch = FetchType.LAZY, orphanRemoval = true)
//  private Set<Pet> pets;

  private LocalDateTime createdAt = LocalDateTime.now();
  private LocalDateTime updatedAt;
}
