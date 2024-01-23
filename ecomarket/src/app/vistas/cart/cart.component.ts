import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartList : any = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCartData().subscribe(
      (response: any) => {
        this.cartList = response;
      },
      (error: any) => {
        console.error('Error de obtención de datos de usuario:', error);
      }
    );
  }


}
