import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  //here write get call function to get courses

  postCourse(data: any) {
    return this.http.post<any>("http://localhost:3000/courses/", data);
  }
  getCourses() {
    return this.http.get<any>("http://localhost:3000/coursesGet/");
  }

  //here write get call function to get Users

  postUser(data: any) {
    return this.http.post<any>("http://localhost:3000/users/", data);
  }
  getUsers() {
    return this.http.get<any>("http://localhost:3000/users/");
  }
}
