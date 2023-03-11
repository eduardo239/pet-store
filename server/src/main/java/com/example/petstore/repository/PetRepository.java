package com.example.petstore.repository;

import com.example.petstore.model.Person;
import com.example.petstore.model.Pet;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PetRepository extends JpaRepository<Pet, Long> {
  Page<Pet> findAll(Pageable pageable);

  List<Pet> findAllByOwner(Person owner);

  List<Pet> findByOwner(Person owner);

  @Transactional
  long deleteAllByOwner(Person owner);
}
