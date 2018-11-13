import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BannerDetails} from '../models/BannerDetails';
import {BaseResponse} from '../models/BaseResponse';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetbannersService {

  constructor(private http: HttpClient) { }

  getAllBanners(): Observable<BannerDetails[]> {
    return this.http.get<BannerDetails[]>(environment.constructUrl(environment.getAllBanners) + environment.bannersource);
  }

  deleteBanner(fileId, source): Observable<BaseResponse> {
    return this.http.delete<BaseResponse>(environment.constructUrl(environment.deleteBanner) + fileId + '/' + source);
  }


}
