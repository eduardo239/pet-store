package com.example.petstore.controller;


import com.example.petstore.DTO.comments.CommentsBasicDTO;
import com.example.petstore.DTO.pets.PetBasicDTO;
import com.example.petstore.helper.Cons;
import com.example.petstore.helper.ConsPets;
import com.example.petstore.helper.ConsUser;
import com.example.petstore.model.Comment;
import com.example.petstore.model.Person;
import com.example.petstore.model.Pet;
import com.example.petstore.repository.CommentRepository;
import com.example.petstore.repository.PersonRepository;
import com.example.petstore.repository.PetRepository;
import com.example.petstore.response.ResponseHandler;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = Cons.CLIENT_URL_BASE)
@RestController
@RequestMapping(Cons.CLIENT_ENDPOINT_COMMENT)
public class CommentController {

  @Autowired
  private ModelMapper modelMapper;
  @Autowired
  private CommentRepository commentRepository;
  @Autowired
  private PersonRepository personRepository;
  @Autowired
  private PetRepository petRepository;

  @GetMapping
  public ResponseEntity<Object> getAllComments(
      @RequestParam(value = "limit", required = false, defaultValue = "0") Integer limit,
      @RequestParam(value = "offset", required = false, defaultValue = "3") Integer offset,
      @RequestParam(defaultValue = "id") String sort,
      @RequestParam(defaultValue = "asc") String order) {

    Pageable paging = PageRequest.of(limit, offset, Sort.by(sort));
    try {
      if (order != null && order.equals("asc")) {
        paging = PageRequest.of(limit, offset, Sort.by(sort).ascending());
      } else if (order != null && order.equals("desc")) {
        paging = PageRequest.of(limit, offset, Sort.by(sort).descending());
      }

      Page<Comment> commentPage = commentRepository.findAll(paging);
      Page<CommentsBasicDTO> commentList = commentPage.map(
          pet -> modelMapper.map(pet, CommentsBasicDTO.class));

      return ResponseHandler.generateResponse(ConsPets.PETS_FOUNDED_SUCCESS, HttpStatus.OK, commentList);
    } catch (Exception e) {
      return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.BAD_REQUEST, null);
    }
  }
  
}
