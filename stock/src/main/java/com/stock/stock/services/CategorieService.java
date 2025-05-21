package com.stock.stock.services;

import com.stock.stock.entities.Categorie;
import com.stock.stock.Repositories.CategorieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategorieService {


    private CategorieRepository categorieRepository;

    public CategorieService(CategorieRepository categorieRepository) {
        this.categorieRepository = categorieRepository;
    }

    public List<Categorie> getAllCategories() {
        return categorieRepository.findAll();
    }

    public Optional<Categorie> getCategorieById(Long id) {
        return categorieRepository.findById(id);
    }

    public Categorie saveCategorie(Categorie categorie) {
        return categorieRepository.save(categorie);
    }

    public void deleteCategorie(Long id) {
        categorieRepository.deleteById(id);
    }

    public Categorie updateCategorie(Long id, Categorie newCategorie) {
        return categorieRepository.findById(id).map(c -> {
            c.setNom(newCategorie.getNom());
            return categorieRepository.save(c);
        }).orElse(null);
    }
}
