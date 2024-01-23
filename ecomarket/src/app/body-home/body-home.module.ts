import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { SliderComponent } from './slider/slider.component';
import { CardComponent } from './card/card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    CategoriesComponent,
    SliderComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    CategoriesComponent,
    SliderComponent,
    CardComponent
  ]
})
export class BodyHomeModule { }
