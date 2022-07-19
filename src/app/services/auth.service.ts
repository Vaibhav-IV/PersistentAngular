import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { find, Observable } from 'rxjs';
import { LoginClass } from '../models/login-class'
import { map } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false;
  constructor(private http: HttpClient, private router: Router) { }

  authenticate(email: string, password: string) {
    if (email == 'tejas@gmail.com' && password == '123') {
      const user = new LoginClass(email, password);
      user.setData();
      return true;
    } else {
      return false;
    }
  }

  isLoggedIn() {
    var user = JSON.parse(localStorage.getItem('user')!);
    if (user == null) {
      return false;
    }
    return true;
  }


  logOut() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

}