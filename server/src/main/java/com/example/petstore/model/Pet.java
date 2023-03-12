package com.example.petstore.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

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

  @JsonManagedReference
  @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  @JoinColumn(name = "comment_id", referencedColumnName = "id")
  private List<Comment> comments;

  private LocalDateTime createdAt = LocalDateTime.now();
  private LocalDateTime updatedAt;
}
