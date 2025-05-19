package com.stock.stock.Repositories;

import com.stock.stock.entities.Categorie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategorieRepository extends JpaRepository<Categorie, Long> {
    // Tu peux ajouter des méthodes personnalisées ici si besoin
}
