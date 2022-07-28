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
  msg: string = '';
  userData = {};

  public loginForm!: FormGroup;
  userCredentials!: { email: string, password: string, isStaySignedIn: boolean };

  constructor(private formbuilder: FormBuilder, private loginAuth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['12345']
    })
  }

  login() {
    const sub = this.loginAuth.authenticate(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: (data: any) => {
        this.userData = data.content;
      },
      error: (err) => {
        console.log(err);
        this.msg = err.error.message;
        this.isInvalid = true;
      },
      complete: () => {
        this.loginAuth.setData(this.userData);
        this.router.navigate(['/dashboard']);
        sub.unsubscribe();
      }
    })
  }


}