import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth,
              private http: HttpClient,
              private router: Router) { }

  //función de registro
  registerUser(email: string, password: string){
    return this.afAuth.createUserWithEmailAndPassword( email,password);
 }

 //función de login
 loginUser(email: string, password: string){
  return this.afAuth.signInWithEmailAndPassword(email, password);
}

  private apiUrl = 'api/usuarios/login';
  private tokenKey = 'authToken';

  login(email: string, password: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const userData = {
      email: email,
      password: password,
    };

    this.http.post(this.apiUrl, userData, { headers }).subscribe(
      (response: any) => {
        const token = response.token; 
        if (token != 0) {
          this.saveToken(token);
          this.router.navigate(['/profile']);
        }
      },
      (error) => {
        console.error('Error de login usuario:', error);
      }
    );
  }

  private saveToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string {
    return localStorage.getItem(this.tokenKey)!;
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
  }
}
