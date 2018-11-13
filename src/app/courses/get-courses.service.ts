import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Courses} from '../models/Courses';
import {BaseResponse} from '../models/BaseResponse';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetCoursesService {

  constructor(private http: HttpClient) { }


  getAllCourses(): Observable<Courses[]> {
    return this.http.get<Courses[]>(environment.constructUrl(environment.getAllCourses));
  }

  deleteCourse(courseId): Observable<BaseResponse> {
    return this.http.delete<BaseResponse>(environment.constructUrl(environment.getCourseById) + courseId);
  }
}
