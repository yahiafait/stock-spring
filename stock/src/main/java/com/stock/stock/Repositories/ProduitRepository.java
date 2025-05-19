package com.stock.stock.Repositories;

import com.stock.stock.entities.Produit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProduitRepository extends JpaRepository<Produit, Long> {
    // Tu peux ajouter des recherches personnalisées ici aussi
}
