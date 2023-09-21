import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from '../shared/components/top-bar/top-bar.component';
import { ProductListComponent } from '../shared/components/product-list/product-list.component';
import { ProductAlertsComponent } from '../shared/components/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from '../shared/components/product-details/product-details.component';
import { AppRoutingModule } from '../app-routing.module';
import { CartComponent } from '../shared/components/cart/cart.component';
import { ShippingComponent } from '../shared/components/shipping/shipping.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    TopBarComponent,
    ProductListComponent
  ]
})
export class SharedModule { }
