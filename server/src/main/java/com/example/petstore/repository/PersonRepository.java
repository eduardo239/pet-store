package com.example.petstore.repository;

import com.example.petstore.model.Person;
import jakarta.annotation.Nonnull;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.lang.NonNullApi;

import java.util.List;

public interface PersonRepository extends JpaRepository<Person, Long> {
  Page<Person> findAll(Pageable pageable);
  List<Person> findByEmailContainingIgnoreCase(String email);
  List<Person> findByUsernameContainingIgnoreCase(String username);
  Person findOneByEmailIgnoreCase(String email);
  Person findOneByUsernameIgnoreCase(String username);

  boolean existsByEmailIgnoreCase(String email);
  boolean existsByUsernameIgnoreCase(String username);
}
