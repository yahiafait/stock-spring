import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Category } from 'src/app/models/category.model';
import { StockCrud } from 'src/app/models/produit.model';
import { CategoryService } from 'src/app/services/category.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produit-add',
  templateUrl: './produit-add.component.html',
  styleUrls: ['./produit-add.component.css']
})
export class ProduitAddComponent implements OnInit {

  categories?: Category[];
  produit: StockCrud = {
    nom_produit: '',
    categorie: '',
    quantite_stock: '',
    alerte_quantite: '',
    mode: ''
  };
  submitted = false;
  title: any;
  message= "";

  constructor(public matdialogRef: MatDialogRef<ProduitAddComponent>,private service: ProduitService,private categorieservice: CategoryService) { }

  
  ngOnInit(): void {
    this.retrieveCategories();
  }

  retrieveCategories(): void {
    this.categorieservice.getAll()
      .subscribe(
        data => {
          this.categories = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  saveProduit(): void {
    const nom = this.produit.nom_produit; 
    var grasnom = nom.toUpperCase();
    if (this.produit.quantite_stock == '') {
      this.produit.quantite_stock = 0;
    }
    if (this.produit.alerte_quantite == '') {
      this.produit.alerte_quantite = 0;
    }

    const data = {
      nom_produit: grasnom.normalize('NFD').replace(/[\u0300-\u036f]/g, ""),
      categorie: this.produit.categorie,
      quantite_stock: this.produit.quantite_stock,
      alerte_quantite: this.produit.alerte_quantite,
      mode: this.produit.mode
    };

    this.service.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.onClosse();
        },
        error => {
          this.message= error.error.message;
          console.log(error.error.message);
        });
  }

  updateProduit(): void {
    const nom = this.produit.nom_produit; 
    var grasnom = nom.toUpperCase();
    const data = {
      nom_produit: grasnom.normalize('NFD').replace(/[\u0300-\u036f]/g, ""),
      categorie: this.produit.categorie.id,
      quantite_stock: this.produit.quantite_stock,
      alerte_quantite: this.produit.alerte_quantite,
      mode: this.produit.mode
    };

    this.service.update(this.produit.id,data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.onClosse();
        },
        error => {
          this.message= error.error.message;
          console.log(error.error.message);
        });
  }


  onClosse() {
    this.matdialogRef.close();
  }

}
