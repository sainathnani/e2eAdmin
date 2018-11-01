import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseResponse} from '../models/BaseResponse';
import {Batches} from '../models/Batches';

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  constructor(private http: HttpClient) { }

  addBatch(batchData): Observable<BaseResponse> {
    return this.http.post<BaseResponse>('http://localhost:3010/batch/add/batch', batchData);
  }

  getAllBatches(): Observable<Batches[]> {
    return this.http.get<Batches[]>('http://localhost:3010/batch/get/batches');
  }

  deleteBatches(id): Observable<BaseResponse> {
    return this.http.delete<BaseResponse>('http://localhost:3010/batch/delete/batches/' + id);
  }
}
