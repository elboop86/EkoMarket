import { Component } from '@angular/core';
import { UserFormService } from 'src/app/services/user-form.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
 
  sr : string = "";
  nif : string = "";
  nombre : string = "";
  phone : string = "";
  email : string = "";
  empresa : string = "";
  calle : string = "";
  numero : string = "";
  piso : string = "";
  puerta : string = "";
  localidad : string = "";
  provincia : string = "";
  comunidad : string = "";
  cp : string = "";
  puntoderecogida : string = "";

  payment: string = "";
  tarjet: string = "";

  constructor(private userFormService: UserFormService) {}

  ngOnInit(): void {
    this.userFormService.getUserFormData().subscribe(
      (response: any) => {
        this.sr = response.sr;
        this.nif = response.nif;
        this.nombre = response.nombre;
        this.phone = response.phone;
        this.email = response.email;
        this.calle = response.calle;
        this.numero = response.numero;
        this.piso = response.piso;
        this.puerta = response.puerta;
        this.localidad = response.localidad;
        this.provincia = response.provincia;
        this.comunidad = response.comunidad;
        this.cp = response.cp;
        this.puntoderecogida = response.puntoderecogida;
      },
      (error: any) => {
        console.error('Error de obtención de datos de usuario:', error);
      }
    );
  }
}
