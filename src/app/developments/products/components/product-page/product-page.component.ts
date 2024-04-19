import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../../services/products.service";
import {DomSanitizer} from "@angular/platform-browser";
import {CartService} from "../../../cart/services/cart.service";
import {WishlistService} from "../../../wishlist/services/wishlist.service";
import {AuthService} from "../../../security/auth.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent implements OnInit {
  product: any; // Assuming product is of type any, adjust as per your actual data type
  productsList: any[] = [];
  productId!: number;
  selectedQuantity: any = 1;
  selectedSize: number = 0;
  productHTMLContent: any;
  isLoggedIn: boolean = false;


  constructor(private route: ActivatedRoute,
              private productService: ProductsService,
              private sanitizer: DomSanitizer,
              private cartService: CartService,
              private wishlistService: WishlistService,
              private authService: AuthService,
              private router: Router
  ) {
  }

  getProducts(categoryId?: number): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.productService.getProducts(0, 25, undefined, 'DESC', undefined, undefined, undefined, undefined, undefined, categoryId)
      .subscribe(response => {
        this.productsList = response;
      });
  }

  getProductById(productId?: number): void {
    this.productService.getProductById(productId)
      .subscribe(response => {
        this.product = response;
        // Get Product Details as  HTML and sanitize it, bypassSecurityTrustHtml do not allow any script to be executed.
        this.productHTMLContent = this.sanitizer.bypassSecurityTrustHtml(response.productDetails);
        console.log(response)
        this.getProducts(this.product.productsList)
      });
  }


  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  addToWishlist(product: any) {
    this.wishlistService.addToWishlist(product);
  }

  ngOnInit(): void {
    // Retrieve product data from router navigation extras
    // this.product = history.state.product;

    // Retrieve product ID from the URL
    this.route.params.subscribe(params => {
      this.productId = params['id'];

      this.getProductById(this.productId);
    });
  }

  placeProductOrder(product: any): void {
    this.cartService.TakeOrder({
      clientId: 1,
      totalPrice: product.price,
      clientOrderDetailsDtos: [{
        productId: product?.id,
        price: product?.price,
        quantity: this.selectedQuantity
      }]
    });
  }

  navigateToSaleForm(productId: number) {
    this.router.navigate(['cart/saleContactForm'], {
      state: {
        productId: productId,
        selectedQuantity: this.selectedQuantity
      }
    });
  }


}
