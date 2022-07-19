import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  isInvalid = false;

  public loginForm!: FormGroup;
  userCredentials!: { email: string, password: string, isStaySignedIn: boolean };

  constructor(private formbuilder: FormBuilder, private loginAuth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: ['tejas@gmail.com'],
      password: ['123']
    })
  }

  login() {
    const isValid = this.loginAuth.authenticate(this.loginForm.value.email, this.loginForm.value.password);
    if (isValid) {
      this.router.navigate(['/dashboard']);
    } else {
      this.isInvalid = true;
    }
  }


}