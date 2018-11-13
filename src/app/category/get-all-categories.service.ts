import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Categories} from '../models/categories';
import {BaseResponse} from '../models/BaseResponse';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetAllCategoriesService {

  constructor(private http: HttpClient) { }
  getAllCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>(environment.constructUrl(environment.getCategories));
  }

  updateCategory(category): Observable<BaseResponse> {
  return this.http.post<BaseResponse>( environment.constructUrl(environment.updateCategory), category);
  }

  deleteCategory(categoryId): Observable<BaseResponse> {
    return this.http.delete<BaseResponse>(environment.constructUrl(environment.deleteCategory) + categoryId);
  }
}
