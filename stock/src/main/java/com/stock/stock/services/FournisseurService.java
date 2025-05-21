package com.stock.stock.services;

import com.stock.stock.entities.Fournisseur;
import com.stock.stock.Repositories.FournisseurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FournisseurService {

    private FournisseurRepository fournisseurRepository;

    public List<Fournisseur> getAllFournisseurs() {
        return fournisseurRepository.findAll();
    }

    public Optional<Fournisseur> getFournisseurById(Long id) {
        return fournisseurRepository.findById(id);
    }

    public Fournisseur saveFournisseur(Fournisseur fournisseur) {
        return fournisseurRepository.save(fournisseur);
    }

    public void deleteFournisseur(Long id) {
        fournisseurRepository.deleteById(id);
    }

    public Fournisseur updateFournisseur(Long id, Fournisseur newFournisseur) {
        return fournisseurRepository.findById(id).map(f -> {
            f.setNom(newFournisseur.getNom());
            f.setEmail(newFournisseur.getEmail());
            f.setTelephone(newFournisseur.getTelephone());
            return fournisseurRepository.save(f);
        }).orElse(null);
    }
}
