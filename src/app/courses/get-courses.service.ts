import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Courses} from '../models/Courses';
import {BaseResponse} from '../models/BaseResponse';

@Injectable({
  providedIn: 'root'
})
export class GetCoursesService {

  constructor(private http: HttpClient) { }


  getAllCourses(): Observable<Courses[]> {
    return this.http.get<Courses[]>('http://localhost:3010/courseroute/courses');
  }

  deleteCourse(courseId): Observable<BaseResponse> {
    return this.http.delete<BaseResponse>('http://localhost:3010/courseroute/course/' + courseId);
  }
}
