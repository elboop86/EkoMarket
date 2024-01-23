import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './vistas/home/home.component';
import { GridComponent } from './vistas/grid/grid.component';
import { LoginComponent } from './vistas/login/login.component';
import { CartComponent } from './vistas/cart/cart.component';
import { ProfileComponent } from './vistas/profile/profile.component';
import { ProductComponent } from './vistas/product/product.component';
import { CheckoutComponent } from './vistas/checkout/checkout.component';
import { SuccessfulComponent } from './vistas/successful/successful.component';
import { RegisterUserComponent } from './vistas/register-user/register-user.component';
import { FormularioClienteComponent } from './vistas/formulario-cliente/formulario-cliente.component';

const routes: Routes = [
   { path:'', component: HomeComponent },
   { path:'products', component: GridComponent },
   { path:'novedades', component: HomeComponent},
   { path:'ofertas', component: HomeComponent},
   { path:'packs', component: HomeComponent},
   { path:'frutas', component: HomeComponent},
   { path:'verdurashortalizas', component: HomeComponent},
   { path:'temporada', component: HomeComponent},
   { path:'login', component: LoginComponent },
   { path:'profile', component: ProfileComponent },
   { path:'product/:title', component: ProductComponent },
   { path:'cart', component: CartComponent },
   { path:'checkout', component: CheckoutComponent },
   { path:'successful', component: SuccessfulComponent },
   { path:'register', component: RegisterUserComponent},
   { path:'formulario', component: FormularioClienteComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
