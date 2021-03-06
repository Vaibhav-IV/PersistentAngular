import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { urls } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isAuthenticated = false;
  constructor(private http: HttpClient, private router: Router) { }

  authenticate(email: string, password: string) {
    const uData = { email: email, password: password };
    return this.http.post(urls.loginUrl.login, uData);
  }

  setData(userData: any) {
    const userDataObj = JSON.stringify(userData);
    localStorage.setItem('user', userDataObj);
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user')!);
  }

  getEmail() {
    return JSON.parse(localStorage.getItem('user')!).email;
  }

  getRole() {
    return JSON.parse(localStorage.getItem('user')!).roletable.roleId;
  }

  getUserId() {
    return JSON.parse(localStorage.getItem('user')!).userId;
  }

  getName() {
    return JSON.parse(localStorage.getItem('user')!).name;
  }

  isLoggedIn() {

    if (!this.getUser()) {
      return false;
    }
    return true;
  }

  logOut() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  showRoutes() {

  }
}
