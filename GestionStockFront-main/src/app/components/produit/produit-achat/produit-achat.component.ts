import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Produit } from 'src/app/models/produit.model';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produit-achat',
  templateUrl: './produit-achat.component.html',
  styleUrls: ['./produit-achat.component.css']
})
export class ProduitAchatComponent implements OnInit {
  title: any;
  //produit: any;
  produit: Produit = {
    quantite_entrer: 0,
    categorie:0,
    mode: ''
  };
  message= "";
  constructor(public matdialogRef: MatDialogRef<ProduitAchatComponent>,private service: ProduitService) { }

  ngOnInit(): void {
  }

  updateProduit(): void {
    if (this.produit.quantite_entrer == null) {
      this.produit.quantite_entrer = 0;
    }
    const data = {
      "quantite_entrer": this.produit.quantite_entrer,
      "categorie": this.produit.categorie.id,
      "mode": this.produit.mode
    }

    this.service.entrer(this.produit.id, data)
      .subscribe(
        response => {
          this.onClosse();
          console.log(response);
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
