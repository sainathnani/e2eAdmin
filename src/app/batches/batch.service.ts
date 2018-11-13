import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseResponse} from '../models/BaseResponse';
import {Batches} from '../models/Batches';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  constructor(private http: HttpClient) { }

  addBatch(batchData): Observable<BaseResponse> {
    return this.http.post<BaseResponse>(environment.constructUrl(environment.addBatch), batchData);
  }

  getAllBatches(): Observable<Batches[]> {
    return this.http.get<Batches[]>(environment.constructUrl(environment.getAllBatches));
  }

  deleteBatches(id): Observable<BaseResponse> {
    return this.http.delete<BaseResponse>(environment.constructUrl(environment.deleteBatch) + id);
  }
}
