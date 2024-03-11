import { Component } from '@angular/core';
import {ProductsService} from "../../../products/services/products.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  productCount: number=0;
  constructor(private productService: ProductsService) {
    this.productService.productCount$.subscribe(count => {
      this.productCount = count;
      // Update cart component or perform any other actions
    });
  }
}
