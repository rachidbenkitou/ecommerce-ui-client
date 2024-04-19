import {Component} from '@angular/core';
import {ProductsService} from "../../../products/services/products.service";
import {CartService} from "../../../cart/services/cart.service";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {

  wishlist: any;
  wishlistSize: number = 0;

  constructor(private productService: ProductsService, private cartService: CartService) {
    this.wishlist = JSON.parse(localStorage.getItem('bokeito-ecommerce-wishlist') || '[]');
    this.wishlistSize = this.wishlist.length;
  }

  removeFromWishlist(productId: number) {
    const index = this.wishlist.findIndex((item: { id: number; }) => item.id === productId);
    if (index !== -1) {
      this.wishlist.splice(index, 1);
      localStorage.setItem('bokeito-ecommerce-wishlist', JSON.stringify(this.wishlist));
      this.wishlistSize = this.wishlist.length;
      this.productService.incrementWishlistProductCount()

    }
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
  }
}
