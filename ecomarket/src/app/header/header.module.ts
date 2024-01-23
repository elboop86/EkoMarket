import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavtopContainerComponent } from './navtop-container/navtop-container.component';
import { MenuModule } from '../menu/menu.module';


@NgModule({
  declarations: [
    NavtopContainerComponent
  ],
  imports: [
    CommonModule,
    MenuModule
  ],
  exports: [NavtopContainerComponent]
})
export class HeaderModule { }
