import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyLoginComponent } from './body-login/body-login.component';
import { HeaderLoginComponent } from './header-login/header-login.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BodyLoginComponent,
    HeaderLoginComponent
  ],
  imports: [
    CommonModule,
    AngularFireModule,
    AngularFireAuthModule,
    ReactiveFormsModule

  ],
  exports: [
    BodyLoginComponent,
    HeaderLoginComponent
  ]
})
export class LoginModule { }
