import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenufixedComponent } from './menufixed/menufixed.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MenuDesktopComponent } from './menu-desktop/menu-desktop.component';


@NgModule({
  declarations: [
    MenufixedComponent,
    MenuDesktopComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule
  ],
  exports: [
    MenufixedComponent,
    MenuDesktopComponent
  ]
})
export class MenuModule { }
