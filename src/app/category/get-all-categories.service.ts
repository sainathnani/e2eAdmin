import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Categories} from '../models/categories';

@Injectable({
  providedIn: 'root'
})
export class GetAllCategoriesService {

  constructor(private http: HttpClient) { }
  getAllCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>('http://localhost:3010/categoryroutes/categories');
}
}
