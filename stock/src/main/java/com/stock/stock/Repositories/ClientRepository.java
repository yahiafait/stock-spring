package com.stock.stock.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.stock.stock.entities.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {
    Client findByEmail(String email);
}
