import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit.model';


const baseUrl = 'http://localhost:8000';
const httpHeaders = new HttpHeaders({'Content-type': 'application/json'});


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  constructor(private http: HttpClient) { }

  getliste(APIUrl: string): Observable<any> {
    return this.http.get<any>(APIUrl);
  }

  get(id: any): Observable<Produit> {
    return this.http.get(baseUrl + '/produites/' + id + '/',
    {headers: httpHeaders});
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl + '/produites/', data,
    {headers: httpHeaders});
  }

  entrer(id: any, data: any): Observable<any> {
    return this.http.put(baseUrl + '/entrer/' + id + '/', data,
    {headers: httpHeaders});
  }

  sortie(id: any, data: any): Observable<any> {
    return this.http.put(baseUrl + '/sortie/' + id + '/', data,
    {headers: httpHeaders});
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(baseUrl + '/produites/' + id + '/', data,
    {headers: httpHeaders});
  }

  delete(id: any): Observable<any> {
    return this.http.delete(baseUrl + '/produites/' + id + '/',
    {headers: httpHeaders});
  }
}
