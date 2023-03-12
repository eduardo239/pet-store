package com.example.petstore.repository;

import com.example.petstore.model.Orders;
import com.example.petstore.model.Person;
import com.example.petstore.model.Pet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface OrdersRepository extends JpaRepository<Orders, Long> {
  List<Orders> findByCompletedOrder(boolean completedOrder);

  List<Orders> findByBuyer(Person owner);
}
