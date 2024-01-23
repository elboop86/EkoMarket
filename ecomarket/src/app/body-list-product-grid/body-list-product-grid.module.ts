import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductGridComponent } from './list-product-grid/list-product-grid.component';
import { BodyHomeModule } from '../body-home/body-home.module';


@NgModule({
  declarations: [
    ListProductGridComponent
  ],
  imports: [
    CommonModule,
    BodyHomeModule
  ],
  exports: [
    ListProductGridComponent
  ]
})
export class BodyListProductGridModule { }
