import {Component, Input, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ToastrService} from "ngx-toastr";
import {CartService} from "../../../cart/services/cart.service";
import {Router} from "@angular/router";
import {WishlistService} from "../../../wishlist/services/wishlist.service";


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
  showNoProductsMessage: boolean = false;


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
    // Simulate fetching products data (replace with your actual data fetching logic)
    setTimeout(() => {
      if (this.products.length === 0) {
        this.showNoProductsMessage = true;
      }
    }, 5000); // Show message after 3 seconds if productList is still empty
  }


  addToWishlist(product: any) {

    this.wishlistService.addToWishlist(product);
  }

  GoToProductsPage() {
    this.router.navigate(['products/allProducts'])
  }

}
