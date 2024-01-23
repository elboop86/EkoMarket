import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-body-register',
  templateUrl: './body-register.component.html',
  styleUrls: ['./body-register.component.css']
})
export class BodyRegisterComponent {
  usuario = this.fb.group({
    nombre: [''],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private http: HttpClient
  ) {}
  ngOnInit() {}

  register(){
    this.auth.registerUser(this.usuario.value.email!, this.usuario.value.password!).then( _result => {
      this.router.navigate(['/']);
    }).catch(err=>{
     window.alert('Error' + err.message)
    })}

    registerUser() {
      const url = 'api/usuarios/agregar'; 
  
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
  
      const userData = {
        username: this.usuario.value.nombre,
        email: this.usuario.value.email,
        password : this.usuario.value.password
      };
  
      this.http.post(url, userData, { headers }).subscribe(
        (response) => {
          console.log('Usuario registrado:', response);
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Error al registrar usuario:', error);
        }
      );
    }
}
