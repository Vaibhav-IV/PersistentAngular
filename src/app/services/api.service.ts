import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urls } from '../shared/constants';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  // todo courses operation
  postCourse(data: any) {
    data["start-date"] = data["start-date"].toLocaleDateString('en-CA');
    data["end-date"] = data["end-date"].toLocaleDateString('en-CA');
    data["category_id"] = Number(data["category_id"]);
    data["teacher_id"] = Number(data["teacher_id"]);
    return this.http.post<any>(urls.courseUrls.add, data);
  }

  getCourses() {
    return this.http.get<any>(urls.courseUrls.getAll);
  }

  // todo user operaitons

  postUser(data: any) {
    return this.http.post<any>(urls.userUrls.add, data);
  }

  getUsers() {
    return this.http.get<any>(urls.userUrls.getAll);
  }

  getDashboard(){
    return this.http.get<any>(urls.dashboardUrls.dashboard)
  }

  
}
