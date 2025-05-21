package com.stock.stock.Repositories;

import com.stock.stock.entities.Categorie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategorieRepository extends JpaRepository<Categorie, Long> {
    Categorie findByNom(String nom);
}
