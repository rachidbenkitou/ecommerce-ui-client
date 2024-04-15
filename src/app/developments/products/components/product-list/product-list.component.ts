import {Component, Input, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ToastrService} from "ngx-toastr";
import {CartService} from "../../../cart/services/cart.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  @Input() products: any[] = [];

  constructor(
    private productService: ProductsService,
    private toastr: ToastrService,
    private cartService: CartService,
    private router: Router
  ) {

  }

  addToCart(product: any) {

    this.cartService.addToCart(product)
  }


  ngOnInit(): void {
  }


  addToWishlist(product: any) {
    let wishlist = JSON.parse(localStorage.getItem('bokeito-ecommerce-wishlist') || '[]');

    if (wishlist.some((item: any) => item.id === product.id)) {
      // alert('Product already exists in cart!');
      this.toastr.error('Product already exists in wishlist!', 'Failed!');

    } else {
      wishlist.push(product);
      localStorage.setItem('bokeito-ecommerce-wishlist', JSON.stringify(wishlist));
      this.productService.incrementWishlistProductCount()
      ; // Call this to update the count
      this.toastr.success('Product added to wishlist!', 'Success!');

    }
  }

  GoToProductPage() {
    this.router.navigate(['products/allProducts'])
  }
}
