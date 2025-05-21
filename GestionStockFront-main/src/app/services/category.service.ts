import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';


const baseUrl = 'http://localhost:8000';
const httpHeaders = new HttpHeaders({'Content-type': 'application/json'});


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) { }

  getliste(APIUrl: string): Observable<any> {
    return this.http.get<any>(APIUrl);
  }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(baseUrl + '/categoriesselect/',
    {headers: httpHeaders});
  }

  get(id: any): Observable<Category> {
    return this.http.get(baseUrl + '/categories/' + id + '/',
    {headers: httpHeaders});
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl + '/categories/', data,
    {headers: httpHeaders});
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(baseUrl + '/categories/' + id + '/', data,
    {headers: httpHeaders});
  }

  delete(id: any): Observable<any> {
    return this.http.delete(baseUrl + '/categories/' + id + '/',
    {headers: httpHeaders});
  }
}