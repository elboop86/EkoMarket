import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.css']
})
export class FormularioClienteComponent {

  usuario = this.fb.group({
    sr: '',
    nif: '',
    nombre: '',
    phone: '',
    email: '',
    empresa: '',
    calle: '',
    numero: '',
    piso: '',
    puerta: '',
    localidad: '',
    provincia: '',
    comunidad: '',
    cp: '',
    puntoderecogida: '0'
  });

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private auth: AuthService,
              private router: Router,) {}

  save() {
    const url = 'api/usuarios/agregarform'; 
  
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
  
      const userDataForm = {
        user: this.auth.getToken(),
        sr : this.usuario.value.sr,
        nif : this.usuario.value.nif,
        nombre : this.usuario.value.nombre,
        phone : this.usuario.value.phone,
        email : this.usuario.value.email,
        empresa : this.usuario.value.empresa,
        calle : this.usuario.value.calle,
        numero : this.usuario.value.numero,
        piso : this.usuario.value.piso,
        puerta : this.usuario.value.puerta,
        localidad : this.usuario.value.localidad,
        provincia : this.usuario.value.provincia,
        comunidad : this.usuario.value.comunidad,
        cp : this.usuario.value.cp,
        puntoderecogida : this.usuario.value.puntoderecogida
      };
  
      this.http.post(url, userDataForm, { headers }).subscribe(
        (response) => {
          console.log('Usuario registrado:', response);
          this.router.navigate(['/checkout']);
        },
        (error) => {
          console.error('Error al registrar usuario:', error);
        }
      );
  }

  cancel() {
    window.location.pathname = '';
  }
}
