import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { products } from 'src/app/products';

@Component({
  selector: 'demo-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products : Product[] = [...products];

  share = () => {
    window.alert("The product has been shared!");
  }

  onNotify() {
    window.alert("You will be notified when the product goes on sale")
  }

}
