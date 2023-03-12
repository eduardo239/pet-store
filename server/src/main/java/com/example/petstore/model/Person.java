package com.example.petstore.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

@Entity
@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Person {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(nullable = false, unique = true)
  private String username;
  @Column(nullable = false, unique = true)
  private String email;
  @Column(nullable = false)
  private String password;
  private String photo;
  @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
  @JoinColumn(name = "address_id", referencedColumnName = "id")
  private Address address;

  @JsonManagedReference
  @OneToMany(mappedBy = "owner", fetch = FetchType.LAZY, cascade = CascadeType.DETACH)
  private Set<Pet> pets;

  @JsonManagedReference
  @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
  private List<Orders> orders;

  private LocalDateTime createdAt = LocalDateTime.now();
  private LocalDateTime updatedAt;
}
