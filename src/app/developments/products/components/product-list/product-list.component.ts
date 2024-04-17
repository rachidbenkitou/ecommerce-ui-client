import {Component, Input, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ToastrService} from "ngx-toastr";
import {CartService} from "../../../cart/services/cart.service";
import {Router} from "@angular/router";
import {WishlistService} from "../../../wishlist/wishlist.service";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  @Input() products: any[] = [];
  @Input() isPaginationShown: boolean = true;
  @Input() isViewAllProductShown: boolean = true;
  @Input() GreenTitle: string = 'No Text Provided';
  @Input() BlackTitle: string = 'No Text Provided';

  constructor(
    private productService: ProductsService,
    private toastr: ToastrService,
    private cartService: CartService,
    private wishlistService: WishlistService,
    private router: Router
  ) {

  }

  addToCart(product: any) {

    this.cartService.addToCart(product)
  }


  ngOnInit(): void {
  }


  addToWishlist(product: any) {

    this.wishlistService.addToWishlist(product);
  }

  GoToProductsPage() {
    this.router.navigate(['products/allProducts'])
  }

}
