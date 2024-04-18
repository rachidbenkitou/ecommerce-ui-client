import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../security/auth.service';
import {CartService} from '../../services/cart.service';
import {ProductsService} from "../../../products/services/products.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-sale-contact-form',
  templateUrl: './sale-contact-form.component.html',
  styleUrls: ['./sale-contact-form.component.scss']
})
export class SaleContactFormComponent implements OnInit {
  isUserLoggedIn: boolean = false;
  cart: any[] = []; // Initialize cart as an empty array
  cartSize: number = 0;
  totalPrice: number = 0;
  saleForm!: FormGroup; // Use definite assignment assertion
  productId!: number;
  selectedQuantity!: number;

  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private productService: ProductsService,
    private toastr: ToastrService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.isUserLoggedIn = authService.isLoggedIn();
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      this.cart = JSON.parse(cartData);
      this.cartSize = this.cart.length;
    }
  }

  isProductIdEqualNullOrUndefined(): boolean {
    return this.productId === null || this.productId === undefined
      ? true : false;
  }

  createSaleForm(): void {
    // Initialize the form
    this.saleForm = this.formBuilder.group({
      address: ['Casa', Validators.required],
      fullName: ['Rachid', Validators.required],
      phone: ['065553', Validators.required],
      email: ['test@gmail.com', [Validators.required, Validators.email]]
    });
  }


  product: any;

  getProductById(productId?: number): void {
    this.productService.getProductById(productId)
      .subscribe(response => {
        this.product = response;
      });
  }

  onSubmit(sale: any): void {
    if (!this.saleForm || this.saleForm.invalid) {
      return;
    }

    if (this.isProductIdEqualNullOrUndefined()) {
      this.calculateTotalPrice()
      const saleData = this.cartService.constructSaleData(this.saleForm, this.totalPrice, this.cart);
      this.cartService.placeSaleOrder(saleData);
    } else {
      const saleData = this.cartService.constructSaleData(this.saleForm, this.product.price * this.selectedQuantity, [{
        id: this.product.id,
        price: this.product.price,
        quantity: this.selectedQuantity
      }]);
      this.cartService.placeSaleOrder(saleData);
    }
  }

  // onSubmit(sale:any): void {
  //   if (!this.saleForm || this.saleForm.invalid) {
  //     return;
  //   }
  //   this.calculateTotalPrice();
  //
  //   // Construct the sale data
  //   const saleData = {
  //     address: this.saleForm.get('address')?.value,
  //     fullName: this.saleForm.get('fullName')?.value,
  //     phone: this.saleForm.get('phone')?.value,
  //     email: this.saleForm.get('email')?.value,
  //     totalPrice: this.totalPrice,
  //     saleDetails: this.cart.map((product: { id: any; price: any; quantity: any; }) => ({
  //       productId: product.id,
  //       price: product.price,
  //       quantity: product.quantity
  //     }))
  //   };
  //
  //   // Place the sale order
  //   this.cartService.placeOrder(saleData).subscribe(
  //     response => {
  //       // Handle successful response here
  //       console.log('Sale order placed successfully:', response);
  //       // Clean the local storage cart
  //       this.cart = [];
  //       localStorage.removeItem('cart');
  //       this.productService.incrementProductCount();
  //       this.router.navigate(["products/homePage"])
  //       this.toastr.success('Your order has been sent successfully!', 'Success!');
  //
  //     },
  //     error => {
  //       // Handle error response here
  //       console.error('Error placing sale order:', error);
  //     }
  //   );
  // }

  calculateTotalPrice() {
    let totalPrice = 0;
    const cartData = localStorage.getItem('cart');

    if (cartData) {
      const cartItems = JSON.parse(cartData);

      // Iterate over each item in the cart and calculate the total price
      for (const item of cartItems) {
        const quantity = item.quantity || 0; // Get quantity from local storage
        const price = item.price || 0; // Get price from the item
        totalPrice += quantity * price;
      }
    }

    this.totalPrice = totalPrice;
  }


  ngOnInit(): void {
    const navigationState = window.history.state;
    this.productId = navigationState.productId;
    this.selectedQuantity = navigationState.selectedQuantity;

    if (!this.isProductIdEqualNullOrUndefined()) {

      this.getProductById(this.productId)

    }
    this.createSaleForm();
  }
}

