import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserFormService } from 'src/app/services/user-form.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  public href : String = "/formulario";
  
  constructor (private authService: AuthService,
              private http: HttpClient,
              private userFormService : UserFormService) 
              {}

  ngOnInit() {
    this.userFormService.getUserFormData().subscribe(
      (response: any) => {
          this.href = "/checkout";
      },
      (error: any) => {
        console.error('Error de obtención de datos de usuario:', error);
      }
    );
  }
}
