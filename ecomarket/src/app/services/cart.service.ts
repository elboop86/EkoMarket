import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'api/usuarios/cart/';
  private tokenKey = 'authToken';

  getCartData(): any {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.apiUrl = this.apiUrl + localStorage.getItem(this.tokenKey)!
    return this.http.get(this.apiUrl, { headers })
  }
}
