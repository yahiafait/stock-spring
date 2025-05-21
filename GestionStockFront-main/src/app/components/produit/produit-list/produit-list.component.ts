import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Produit } from 'src/app/models/produit.model';
import { ProduitService } from 'src/app/services/produit.service';
import { ProduitAchatComponent } from '../produit-achat/produit-achat.component';
import { ProduitAddComponent } from '../produit-add/produit-add.component';
import { ProduitIssueComponent } from '../produit-issue/produit-issue.component';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {



  stockes?: Produit[];
  currentStock: Produit = {};
  currentIndex = -1;
  title = '';
  next!: string;
  previous!: string;
  transactionsUrl = "http://localhost:8000/produites/";
  ModalTitle?: string;
  ActivateStockAddComp: boolean=false;
  stock:any;
  count = 0;

  constructor(public matdialog: MatDialog,private servise: ProduitService,public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.retrieveProduites(this.transactionsUrl);
  }
    
  public greater_than(a: any,b: any) : boolean{
    return parseFloat(a)  >= parseFloat(b);
  }

  retrieveProduites(url: string): void {
    this.servise.getliste(url)
      .subscribe(
        data => {
          this.stockes = data.results;
            this.next = data.next;
            this.count = data.count;
            this.previous = data.previous; 
          console.log(data);
        },
        error => {
          console.log(error.error.message);
        });
  }

  refreshList(): void {
    this.retrieveProduites(this.transactionsUrl);
    this.currentStock = {};
    this.currentIndex = -1;
  }

  setActiveProduit(stock: Produit, index: number): void {
    this.currentStock = stock;
    this.currentIndex = index;
  }

  fetchNext() {
    this.retrieveProduites(this.next);
  }

  fetchPrevious() {
    this.retrieveProduites(this.previous);
  }

  closeClick(){
    this.refreshList();
  }

  add(){
    let dialogref = this.matdialog.open(ProduitAddComponent)
    dialogref.componentInstance.title = "Add";
    dialogref.afterClosed().subscribe(
      data => {
        this.refreshList();
      }
    )
  }

  delete(id: any){
    this.servise.delete(id).subscribe(
      response => {
        this.refreshList();
    },
    error => {
      console.log(error);
    }
    )
  }

  edit(item: any){
    let dialogref = this.matdialog.open(ProduitAddComponent)
    dialogref.componentInstance.produit = item;
    dialogref.componentInstance.title = "Edit";
    dialogref.afterClosed().subscribe(
      data => {
        this.refreshList();
      }
    )
  }

  entrer(item: any){
    let dialogref = this.matdialog.open(ProduitAchatComponent)
    dialogref.componentInstance.produit = item;
    dialogref.componentInstance.title = "Receive";
    dialogref.afterClosed().subscribe(
      data => {
        this.refreshList();
      }
    )
  }

  sortie(item: any){
    let dialogref = this.matdialog.open(ProduitIssueComponent)
    dialogref.componentInstance.produit = item;
    dialogref.componentInstance.title = "Receive";
    dialogref.afterClosed().subscribe(
      data => {
        this.refreshList();
      }
    )
  }


}
