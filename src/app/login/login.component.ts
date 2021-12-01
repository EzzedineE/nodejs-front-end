import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  conectedUser = new FormGroup({
    email: new FormControl('', [
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      Validators.required,
    ]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(
    private authServices: AuthService,
    private userServices: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {}

  login() {
    this.authServices
      .login(this.conectedUser.value.email, this.conectedUser.value.password)
      .subscribe(
        (res: any) => {
          this.userServices.setUser(res.user);
          this.router.navigate(['']);
        },
        (err) => {
          this.toastr.error(
            'L’adresse e-mail ou le mot de passe entré est incorrect',
            'error'
          );
        }
      );
  }
}
