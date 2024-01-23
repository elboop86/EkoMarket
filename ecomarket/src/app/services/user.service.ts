import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'api/usuarios/';
  private tokenKey = 'authToken';

  getUserData(): any {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.apiUrl = this.apiUrl + localStorage.getItem(this.tokenKey)!
    return this.http.get(this.apiUrl, { headers })
  }
}
