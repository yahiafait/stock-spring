package com.stock.stock.services;

import com.stock.stock.entities.Produit;
import com.stock.stock.Repositories.ProduitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProduitService {

    @Autowired
    private ProduitRepository produitRepository;

    public List<Produit> getAllProduits() {
        return produitRepository.findAll();
    }

    public Optional<Produit> getProduitById(Long id) {
        return produitRepository.findById(id);
    }

    public Produit saveProduit(Produit produit) {
        return produitRepository.save(produit);
    }

    public void deleteProduit(Long id) {
        produitRepository.deleteById(id);
    }

    public Produit updateProduit(Long id, Produit newProduit) {
        return produitRepository.findById(id).map(p -> {
            p.setNom(newProduit.getNom());
            p.setQuantite(newProduit.getQuantite());
            p.setPrix(newProduit.getPrix());
            p.setCategorie(newProduit.getCategorie());
            p.setFournisseur(newProduit.getFournisseur());
            return produitRepository.save(p);
        }).orElse(null);
    }
}
