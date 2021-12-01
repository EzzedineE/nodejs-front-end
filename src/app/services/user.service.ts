import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Sondage } from '../modeles/sondage';
import { User } from '../modeles/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  getuser() {
    return JSON.parse(localStorage.getItem('userConecter') || 'null');
  }
  setUser(user: User) {
    localStorage.setItem('userConecter', JSON.stringify(user));
  }
  logout() {
    localStorage.removeItem('userConecter');
  }
  setDate(date: Date) {
    localStorage.setItem('dateDeb', JSON.stringify(date));
  }
  getDate(): Date {
    return JSON.parse(localStorage.getItem('dateDeb') || 'null');
  }
  setClick(nbclick: number) {
    localStorage.setItem('nbClick', JSON.stringify(nbclick));
  }
  getClick() {
    return JSON.parse(localStorage.getItem('nbClick') || 'null');
  }
  removeDate() {
    localStorage.removeItem('dateDeb');
  }
  removeclick() {
    localStorage.removeItem('nbClick');
  }
}
