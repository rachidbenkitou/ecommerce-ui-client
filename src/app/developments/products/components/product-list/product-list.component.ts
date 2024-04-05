import {Component, Input, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  @Input() products: any[] = [];

  constructor(private productService: ProductsService) {
  }

  addToCart(product: any) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');

    if (cart.some((item: any) => item.id === product.id)) {
      alert('Product already exists in cart!');
    } else {
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      this.incrementProductCount(); // Call this to update the count
      alert('Product added to cart!');
    }
  }

  incrementProductCount() {
    this.productService.incrementProductCount()
  }

  ngOnInit(): void {
    this.incrementProductCount();
  }


}
