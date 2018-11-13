import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Inqueries} from '../models/inqueries';
import {BaseResponse} from '../models/BaseResponse';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetInquiriesService {

  constructor(private http: HttpClient) { }

  getInquiries(): Observable<Inqueries[]> {
    return this.http.get<Inqueries[]>(environment.constructUrl(environment.getInquiries));
  }

  changeStatus(contact): Observable<BaseResponse> {
     return this.http.post<BaseResponse>(environment.constructUrl(environment.changeStatus), contact);
  }

}
