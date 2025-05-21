import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { CategoryAddComponent } from '../category-add/category-add.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories?: Category[];
  currentCategorie: Category = {};
  currentIndex = -1;
  title = '';
  next!: string;
  previous!: string;
  transactionsUrl = "http://localhost:8000/categories/";
  ModalTitle?: string;
  ActivateCategorieAddEditComp: boolean=false;
  categorie:any;
  count = 0;

  constructor(public matdialog: MatDialog,private servise: CategoryService) { }

  ngOnInit(): void {
    this.retrieveCategories(this.transactionsUrl);
  }

  retrieveCategories(url: string): void {
    this.servise.getliste(url)
      .subscribe(
        data => {
          this.categories = data.results;
            this.next = data.next;
            this.count = data.count;
            this.previous = data.previous;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveCategories(this.transactionsUrl);
    this.currentCategorie = {};
    this.currentIndex = -1;
  
  }

  setActiveCategorie(categorie: Category, index: number): void {
    this.currentCategorie = categorie;
    this.currentIndex = index;
  }

  fetchNext() {
    this.retrieveCategories(this.next);
  }

  fetchPrevious() {
    this.retrieveCategories(this.previous);
  }

  closeClick(){
    this.ActivateCategorieAddEditComp=false;
    this.refreshList();
  }

  add(){
    let dialogref = this.matdialog.open(CategoryAddComponent)
    dialogref.componentInstance.title = "Add";
    dialogref.afterClosed().subscribe(
      data => {
        this.refreshList();
      }
    )
  }

  edit(item: any){
    let dialogref = this.matdialog.open(CategoryAddComponent)
    dialogref.componentInstance.categorie = item;
    dialogref.componentInstance.title = "Edit";
    dialogref.afterClosed().subscribe(
      data => {
        this.refreshList();
      }
    )
  }


  deleteClick(item: any){
    this.servise.delete(item.id).subscribe(response => {
      console.log(response);
      this.refreshList();
    },
    error => {
      console.log(error);
    });
}



}
