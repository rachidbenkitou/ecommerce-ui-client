import {Injectable} from '@angular/core';
import {ProductsService} from "../../products/services/products.service";
import {ToastrService} from "ngx-toastr";
import {ToastrConfigHelper} from "../../shared/models/toastr-config-helper";

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(
    private productService: ProductsService,
    private toastr: ToastrService,
  ) {

  }

  addToWishlist(product: any) {
    let wishlist = JSON.parse(localStorage.getItem('bokeito-ecommerce-wishlist') || '[]');

    if (wishlist.some((item: any) => item.id === product.id)) {
      this.toastr.error('Product already exists in wishlist!', 'Failed!', ToastrConfigHelper.getCustomConfig());

    } else {
      wishlist.push(product);
      localStorage.setItem('bokeito-ecommerce-wishlist', JSON.stringify(wishlist));
      this.productService.incrementWishlistProductCount()
      ; // Call this to update the count
      this.toastr.success('Product added to wishlist!', 'Success!', ToastrConfigHelper.getCustomConfig());

    }
  }
}
