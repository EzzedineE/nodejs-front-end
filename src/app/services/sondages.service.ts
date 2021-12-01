import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sondage } from '../modeles/sondage';

@Injectable({
  providedIn: 'root',
})
export class SondagesService {
  constructor(private http: HttpClient) {}
  addSondage(sondage: Sondage) {
    return this.http.post('http://localhost:3000/api/sondage/', sondage);
  }
  add(sondage: Sondage) {
    const Sondage = JSON.parse(localStorage.getItem('sondage') || '[]');
    Sondage.push(sondage);
    localStorage.setItem('sondage', JSON.stringify(Sondage));
  }
  getSondage() {
    return JSON.parse(localStorage.getItem('sondage') || '[]');
  }
  getSondag() {
    return this.http.get('http://localhost:3000/api/sondage/');
  }

  voter(id: string, choix: boolean) {
    return this.http.put(`http://localhost:3000/api/sondage/${id}`, { choix });
  }
}
