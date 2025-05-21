import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  categorie: Category = {
    nom_categorie: ''
  };
  title: any;
  submitted = false;
  message= "";
  constructor(public matdialogRef: MatDialogRef<CategoryAddComponent>,private service: CategoryService) { }

  ngOnInit(): void {
  }

  saveCategorie(): void {
    const nom = this.categorie.nom_categorie; 
    var grasnom = nom.toUpperCase();
    const data = {
      nom_categorie: grasnom.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    };

    this.service.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.onClosse();
          this.submitted = true;
        },
        error => {
          this.message= error.error.message;
          console.log(error);
        });
  }


  updateCategorie(): void {
    const nom = this.categorie.nom_categorie; 
    var grasnom = nom.toUpperCase();
    const data = {
      nom_categorie: grasnom.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    };

    this.service.update(this.categorie.id,data)
      .subscribe(
        response => {
          console.log(response);
          this.onClosse();
          this.submitted = true;
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
