package com.example.petstore.repository;

import com.example.petstore.model.Orders;
import com.example.petstore.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrdersRepository extends JpaRepository<Orders, Long> {
  List<Orders> findByCompletedOrder(boolean completedOrder);

  List<Orders> findBySeller(Person seller);
  List<Orders> findByBuyer(Person buyer);

}
