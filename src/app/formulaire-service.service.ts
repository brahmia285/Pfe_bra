import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormulaireServiceService {

  private apiUrl = 'http://localhost:8080/users'; // à adapter selon ton endpoint

  constructor(private http: HttpClient) {}

  // 🔵 Appel POST vers le backend pour soumettre un formulaire rempli
  submitUserForm(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/submit`, data);
  }
}
