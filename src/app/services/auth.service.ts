import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../modeles/user';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  register(user: FormData) {
    return this.http.post('http://localhost:3000/api/auth/register', user);
  }
  login(email: string, password: string) {
    return this.http.post('http://localhost:3000/api/auth/login', {
      email,
      password,
    });
  }
}
