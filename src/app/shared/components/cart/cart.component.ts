import { Component } from '@angular/core';
import { CartService } from 'src/app/providers/cart.service';

@Component({
  selector: 'demo-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  items = this.cartService.getItems();

  constructor(private cartService: CartService){}

}
