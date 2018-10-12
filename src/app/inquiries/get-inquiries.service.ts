import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Inqueries} from '../models/inqueries';

@Injectable({
  providedIn: 'root'
})
export class GetInquiriesService {

  constructor(private http: HttpClient) { }

  getInquiries(): Observable<Inqueries[]> {
    return this.http.get<Inqueries[]>('http://localhost:3010/contactusroutes/user/getcontacts');
  }

}
