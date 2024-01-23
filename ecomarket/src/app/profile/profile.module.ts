import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderProfileComponent } from './header-profile/header-profile.component';
import { BodyProfileComponent } from './body-profile/body-profile.component';



@NgModule({
  declarations: [
    HeaderProfileComponent,
    BodyProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderProfileComponent,
    BodyProfileComponent
  ]
})
export class ProfileModule { }
