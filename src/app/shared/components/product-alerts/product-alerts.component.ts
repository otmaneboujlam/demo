import { Product } from './../../../models/product';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'demo-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent {

  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();

}
