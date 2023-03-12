package com.example.petstore.repository;

import com.example.petstore.model.Comment;
import com.example.petstore.model.Pet;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {

//  Page<Comment> findAll(Pageable pageable);
  // TODO: verificar se a paginação é valida
}
