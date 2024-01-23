import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderModule } from '../header/header.module';
import { BodyHomeModule } from '../body-home/body-home.module';
import { MenuModule } from '../menu/menu.module';
import { GridComponent } from './grid/grid.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { BodyListProductGridModule } from '../body-list-product-grid/body-list-product-grid.module';
import { BodyListProductListModule } from '../body-list-product-list/body-list-product-list.module';
import { CartComponent } from './cart/cart.component';
import { BodyCartModule } from '../body-cart/body-cart.module';
import { LoginModule } from '../login/login.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileModule } from '../profile/profile.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { SuccessfulComponent } from './successful/successful.component';
import { BodyCheckoutModule } from '../body-checkout/body-checkout.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { FooterModule } from '../footer/footer.module';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterModule } from '../register/register.module';
import { BodySuccessfulModule } from '../body-successful/body-successful.module';
import { FormularioClienteComponent } from './formulario-cliente/formulario-cliente.component';

@NgModule({
  declarations: [
    HomeComponent,
    GridComponent,
    LoginComponent,
    ListComponent,
    ProfileComponent,
    CartComponent,
    ProductComponent,
    CheckoutComponent,
    SuccessfulComponent,
    RegisterUserComponent,
    FormularioClienteComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    BodyHomeModule,
    MenuModule,
    BodyListProductGridModule,
    BodyListProductListModule,
    BodyCartModule,
    LoginModule,
    ProfileModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    BodyCheckoutModule,
    MatGridListModule,
    FooterModule,
    RegisterModule,
    BodySuccessfulModule
  ]
})
export class VistasModule { }
