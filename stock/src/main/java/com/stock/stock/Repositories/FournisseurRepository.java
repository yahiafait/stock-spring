package com.stock.stock.Repositories;

import com.stock.stock.entities.Fournisseur;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FournisseurRepository extends JpaRepository<Fournisseur, Long> {
    // Exemple : List<Fournisseur> findByNomContaining(String nom);
}
