import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserFormService {

  constructor(private http: HttpClient) { }

  private apiUrl = '';
  private tokenKey = 'authToken';

  getUserFormData(): any {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    this.apiUrl = 'api/usuarios/form/';
    this.apiUrl = this.apiUrl + localStorage.getItem(this.tokenKey)!;

    return this.http.get(this.apiUrl, { headers })
  }
}
