import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { History } from 'src/app/models/fournisseur.model';
import { HistoryService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  historiques?: History[];
  currentHistorique: History = {};
  currentIndex = -1;
  title = '';
  next!: string;
  previous!: string;
  transactionsUrl = "http://localhost:8000/historiques/";
  ModalTitle?: string;
  count = 0;

  constructor(private servise: HistoryService,public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.retrieveHistoriques(this.transactionsUrl);
  }

  retrieveHistoriques(url: string): void {
    this.servise.getAll(url)
      .subscribe(
        data => {
          this.historiques = data.results;
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
    this.retrieveHistoriques(this.transactionsUrl);
    this.currentHistorique = {};
    this.currentIndex = -1;
  }


  fetchNext() {
    this.retrieveHistoriques(this.next);
  }

  fetchPrevious() {
    this.retrieveHistoriques(this.previous);
  }

  closeClick(){
    this.refreshList();
  }


}
