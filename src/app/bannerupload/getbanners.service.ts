import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BannerDetails} from '../models/BannerDetails';
import {BaseResponse} from '../models/BaseResponse';

@Injectable({
  providedIn: 'root'
})
export class GetbannersService {

  constructor(private http: HttpClient) { }

  getAllBanners(): Observable<BannerDetails[]> {
    return this.http.get<BannerDetails[]>('http://localhost:3010/file/get/allfiles/banners');
  }

  deleteBanner(fileId, source): Observable<BaseResponse> {
    return this.http.delete<BaseResponse>('http://localhost:3010/file/delete/' + fileId + '/' + source);
  }


}
