import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyRegisterComponent } from './body-register/body-register.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BodyRegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule


  ], exports: [BodyRegisterComponent]
})
export class RegisterModule { }
