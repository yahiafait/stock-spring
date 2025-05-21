import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Produit } from 'src/app/models/produit.model';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produit-issue',
  templateUrl: './produit-issue.component.html',
  styleUrls: ['./produit-issue.component.css']
})
export class ProduitIssueComponent implements OnInit {

  title: any;
  //produit: any;
  produit: Produit = {
    quantite_sortie: 0,
    sortie_par: null,
    mode: ''
  };
  message = null;
  constructor(public matdialogRef: MatDialogRef<ProduitIssueComponent>,private service: ProduitService) { }

  ngOnInit(): void {
  }

  updateProduit(): void {
    if (this.produit.sortie_par == null) {
      this.produit.sortie_par = null;
    }
    if (this.produit.quantite_sortie == null) {
      this.produit.quantite_sortie = 0;
    }
    const data = {
      "quantite_sortie": this.produit.quantite_sortie,
      "sortie_par": this.produit.sortie_par,
      "mode": this.produit.mode
    }

    this.service.sortie(this.produit.id, data)
      .subscribe(
        response => {
          console.log(response);
          this.onClosse();
        },
        error => {
          this.message= error.error.message;
          /*console.log(this.message);
           */
          console.log(error.error.message);
        })
  }

  onClosse() {
    this.matdialogRef.close();
  }
}
