import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { ProductsComponent } from './products/products.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [
    LogoComponent,
    ProductsComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoComponent,
    ProductsComponent,
    PaymentComponent
  ]
})
export class BodyCartModule { }
