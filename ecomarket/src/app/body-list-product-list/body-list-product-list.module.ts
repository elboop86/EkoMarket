import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductListComponent } from './list-product-list/list-product-list.component';
import { BodyHomeModule } from '../body-home/body-home.module';
import { CardProductListComponent } from './card-product-list/card-product-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [
    ListProductListComponent,
    CardProductListComponent
  ],
  imports: [
    CommonModule,
    BodyHomeModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    ListProductListComponent,
    CardProductListComponent
  ]
})
export class BodyListProductListModule { }
