import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './shared/components/product-list/product-list.component';
import { ProductDetailsComponent } from './shared/components/product-details/product-details.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { ShippingComponent } from './shared/components/shipping/shipping.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent},
  { path: 'shipping', component: ShippingComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
