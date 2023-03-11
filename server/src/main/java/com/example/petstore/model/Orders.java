package com.example.petstore.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

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

  @OneToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "buyer_id", referencedColumnName = "id", nullable = false)
  private Person buyer;
  @OneToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "seller_id", referencedColumnName = "id")
  private Person seller;
  @OneToOne(cascade = CascadeType.MERGE)
  @JoinColumn(name = "address_id", referencedColumnName = "id")
  private Address address;
  @OneToMany(cascade = CascadeType.MERGE, orphanRemoval = true)
  @JoinColumn(name = "pet_id", referencedColumnName = "id")
  private List<Pet> pets = new ArrayList<>();

  private LocalDateTime createdAt = LocalDateTime.now();
  private LocalDateTime updatedAt;
}
