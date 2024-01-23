import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyFooterComponent } from './body-footer/body-footer.component';



@NgModule({
  declarations: [
    BodyFooterComponent
  ],
  
  imports: [
    CommonModule,
    
  ],
  exports: [
    BodyFooterComponent
  ]
})
export class FooterModule { }
