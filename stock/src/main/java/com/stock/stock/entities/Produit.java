package com.stock.stock.entities;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;


import jakarta.persistence.Entity;

@Entity
public class Produit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;
    private int quantite;
    private double prix;

    @ManyToOne
    private Categorie categorie;

    public Produit() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public int getQuantite() {
        return quantite;
    }

    public void setQuantite(int quantite) {
        this.quantite = quantite;
    }

    public double getPrix() {
        return prix;
    }

    public void setPrix(double prix) {
        this.prix = prix;
    }

    public Produit(Long id, String nom, int quantite, double prix, Categorie categorie, Fournisseur fournisseur) {
        this.id = id;
        this.nom = nom;
        this.quantite = quantite;
        this.prix = prix;
        this.categorie = categorie;
        this.fournisseur = fournisseur;
    }

    @ManyToOne
    private Fournisseur fournisseur;

    public Produit(int quantite) {
        this.quantite = quantite;
    }

    public Categorie getCategorie() {
        return categorie;
    }

    public void setCategorie(Categorie categorie) {
        this.categorie = categorie;
    }

    public Fournisseur getFournisseur() {
        return fournisseur;
    }

    public void setFournisseur(Fournisseur fournisseur) {
        this.fournisseur = fournisseur;
    }

    // Getters, setters, constructeurs
}

