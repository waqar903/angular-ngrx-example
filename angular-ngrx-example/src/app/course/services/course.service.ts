import { Course } from './../model/course.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class CourseService {
  base_url = 'http://localhost:3000/course/'

  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.base_url);
  }

  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.base_url, course);
  }

  deleteCourse(courseId: string): Observable<any> {
    return this.http.delete(this.base_url + courseId);
  }

  updateCourse(courseId: string | number, changes: Partial<Course>): Observable<any> {
    return this.http.put(this.base_url + courseId, changes);
  }
}
