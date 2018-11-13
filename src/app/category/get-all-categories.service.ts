import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Categories} from '../models/categories';
import {BaseResponse} from '../models/BaseResponse';

@Injectable({
  providedIn: 'root'
})
export class GetAllCategoriesService {

  constructor(private http: HttpClient) { }
  getAllCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>('http://localhost:3010/categoryroutes/categories');
  }

  updateCategory(category): Observable<BaseResponse> {
  return this.http.post<BaseResponse>('http://localhost:3010/categoryroutes/updateCategory', category);
  }

  deleteCategory(categoryId): Observable<BaseResponse> {
    return this.http.delete<BaseResponse>('http://localhost:3010/categoryroutes/deleteCategory/' + categoryId);
  }
}
