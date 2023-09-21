import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from 'src/app/providers/cart.service';

@Component({
  selector: 'demo-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  })

  constructor(private cartService: CartService, private formBuilder: FormBuilder){}

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn("Your order has been submitted", this.checkoutForm.value);
    this.checkoutForm.reset();
    window.alert("Your order has been submitted");
  }
}
