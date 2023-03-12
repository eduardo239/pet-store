package com.example.petstore.controller;


import com.example.petstore.DTO.comments.CommentsBasicDTO;
import com.example.petstore.DTO.pets.PetBasicDTO;
import com.example.petstore.DTO.pets.PetCompleteDTO;
import com.example.petstore.helper.Cons;
import com.example.petstore.helper.ConsComm;
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
@RequestMapping(Cons.CLIENT_ENDPOINT_PETS)
public class PetController {

  @Autowired
  private ModelMapper modelMapper;
  @Autowired
  private PetRepository petRepository;
  @Autowired
  private PersonRepository personRepository;
  @Autowired
  private CommentRepository commentRepository;

  @GetMapping
  public ResponseEntity<Object> getAllPets(
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

      Page<Pet> petPage = petRepository.findAll(paging);
      Page<PetBasicDTO> petPageBasic = petPage.map(
          pet -> modelMapper.map(pet, PetBasicDTO.class));

      return ResponseHandler.generateResponse(ConsPets.PETS_FOUNDED_SUCCESS, HttpStatus.OK, petPageBasic);
    } catch (Exception e) {
      return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.BAD_REQUEST, null);
    }
  }

  @PostMapping
  public ResponseEntity<Object> addPetAndAddToUserPets(@RequestBody Pet pet) {
    try {
      Long userId = pet.getOwner().getId();
      Optional<Person> personToUpdate = personRepository.findById(userId);
      if (personToUpdate.isEmpty()) {
        return ResponseHandler.generateResponse(ConsUser.USER_NOT_FOUND, HttpStatus.BAD_REQUEST, null);
      } else {
        pet.setOwner(personToUpdate.get());

        Pet savedPet = petRepository.save(pet);
        PetBasicDTO petResponse = modelMapper.map(savedPet, PetBasicDTO.class);

        return ResponseHandler.generateResponse(
            ConsPets.PET_REGISTERED_SUCCESS, HttpStatus.OK, petResponse);
      }
    } catch (Exception e) {
      return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.BAD_REQUEST, null);

    }
  }

  // TODO: adicionar paginação
  @PostMapping("{id}/comments")
  public ResponseEntity<Object> addCommentAndAddToPetsComments(
      @PathVariable Long id, @RequestBody Comment comment) {
    try {
      Optional<Pet> petToUpdate = petRepository.findById(id);
//      Optional<Person> person_ = personRepository.findById(comment.getPerson().getId());
      if (petToUpdate.isEmpty()) {
        return ResponseHandler.generateResponse(ConsPets.PET_NOT_FOUND, HttpStatus.BAD_REQUEST, null);
//      } else if (person_.isEmpty()) {
//        return ResponseHandler.generateResponse(ConsUser.USER_NOT_FOUND, HttpStatus.BAD_REQUEST, null);
      } else {

//        comment.setPerson(person_.get());
        Comment savedComment = commentRepository.save(comment);

        // salva os dados na lista do pet
        List<Comment> comments_ = petToUpdate.get().getComments();
        comments_.add(comment);
        petToUpdate.get().setComments(comments_);
        Pet pet_ = petRepository.save(petToUpdate.get());

        CommentsBasicDTO commentResponse = modelMapper.map(savedComment, CommentsBasicDTO.class);

        return ResponseHandler.generateResponse(
            ConsPets.PET_REGISTERED_SUCCESS, HttpStatus.OK, commentResponse);
      }
    } catch (Exception e) {
      return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.BAD_REQUEST, null);
    }
  }

  @DeleteMapping("{pid}/comments/{cid}")
  public ResponseEntity<Object> deleteCommentById(@PathVariable Long pid, @PathVariable Long cid) {
    Optional<Comment> comment_ = commentRepository.findById(cid);
    if (comment_.isPresent()) {
      commentRepository.deleteById(cid);
      return ResponseHandler.generateResponse(ConsComm.COMMENT_REMOVED_SUCCESS, HttpStatus.OK, null);
    } else {
      return ResponseHandler.generateResponse(ConsComm.COMMENT_NOT_FOUND, HttpStatus.NOT_FOUND, null);
    }
  }

  @GetMapping("{id}")
  public ResponseEntity<Object> getPetById(@PathVariable Long id) {
    Optional<Pet> pet_ = petRepository.findById(id);
    if (pet_.isPresent()) {
      PetCompleteDTO petResponse = modelMapper.map(pet_, PetCompleteDTO.class);
      return ResponseHandler.generateResponse(ConsPets.PET_FOUNDED_SUCCESS, HttpStatus.OK, petResponse);
    } else {
      return ResponseHandler.generateResponse(ConsPets.PET_NOT_FOUND, HttpStatus.NOT_FOUND, null);
    }
  }


  @DeleteMapping("{id}")
  public ResponseEntity<Object> deletePetById(@PathVariable Long id) {
    Optional<Pet> pet_ = petRepository.findById(id);
    if (pet_.isPresent()) {
      petRepository.deleteById(id);
      return ResponseHandler.generateResponse(ConsPets.PETS_REMOVED_SUCCESS, HttpStatus.OK, null);
    } else {
      return ResponseHandler.generateResponse(ConsPets.PET_NOT_FOUND, HttpStatus.NOT_FOUND, null);
    }
  }

  @DeleteMapping("/delete-all")
  public ResponseEntity<Object> deleteAllPets() {
    try {
      petRepository.deleteAll();
      return ResponseHandler.generateResponse(ConsPets.PETS_REMOVED_SUCCESS, HttpStatus.OK, null);
    } catch (Exception e) {
      return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.BAD_REQUEST, null);
    }
  }
}
