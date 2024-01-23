import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressAccordionComponent } from './address-accordion/address-accordion.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { LogoComponent } from './logo/logo.component';
import { PaymentandshippingComponent } from './paymentandshipping/paymentandshipping.component';
import {MatRadioModule} from '@angular/material/radio';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  declarations: [
    AddressAccordionComponent,
    LogoComponent,
    PaymentandshippingComponent,
    ConfirmationComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatRadioModule
  ],
  exports: [
    AddressAccordionComponent,
    LogoComponent,
    PaymentandshippingComponent,
    ConfirmationComponent
  ]
})
export class BodyCheckoutModule { }
