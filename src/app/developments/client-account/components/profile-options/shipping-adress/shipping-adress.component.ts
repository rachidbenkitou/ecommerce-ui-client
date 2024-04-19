import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-shipping-adress',
  templateUrl: './shipping-adress.component.html',
  styleUrl: './shipping-adress.component.scss'
})
export class ShippingAdressComponent {
  data: any;

  constructor(private route: ActivatedRoute) {
    this.data = this.route.snapshot.data;
  }
}
