import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderModule } from './header/header.module';
import { MenuModule } from './menu/menu.module';
import { BodyHomeModule } from './body-home/body-home.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BodyListProductGridModule } from './body-list-product-grid/body-list-product-grid.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BodyListProductListModule } from './body-list-product-list/body-list-product-list.module';
import { VistasModule } from './vistas/vistas.module';
import { ProfileModule } from './profile/profile.module';
import { HttpClientModule } from '@angular/common/http';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth'
import { AngularFireModule } from '@angular/fire/compat';
import { ReactiveFormsModule } from '@angular/forms';

const firebaseConfig = {

  apiKey: "AIzaSyDGHv_yLI-SgQuTOQepMn_IQRWSHd3EiZM",

  authDomain: "ecomarket-893f9.firebaseapp.com",

  projectId: "ecomarket-893f9",

  storageBucket: "ecomarket-893f9.appspot.com",

  messagingSenderId: "850319693147",

  appId: "1:850319693147:web:bef1790574ae3c049c367e",

  measurementId: "G-DDPZ5BE255"

};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    MenuModule,
    BodyHomeModule,
    BodyListProductGridModule,
    MatButtonModule,
    MatCardModule,
    BodyListProductListModule,
    VistasModule,
    ProfileModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
