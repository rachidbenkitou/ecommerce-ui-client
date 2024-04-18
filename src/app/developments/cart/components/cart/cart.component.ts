import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {ProductsService} from "../../../products/services/products.service";
import {AuthService} from "../../../security/auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cart: any;
  cartSize: number = 0;
  isUserLoggedIn: boolean = false;
  orderQuantity: number = 1;
  totalPrice: number = 0;


  constructor(private cartService: CartService,
              private productService: ProductsService,
              private authService: AuthService,
              private toastr: ToastrService,
              private router: Router
  ) {

    // Retrieve the array from local storage
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');

    this.cart.forEach((item: any) => {
      const foundItem = this.cart.find((cartItem: any) => cartItem.id === item.id);
      if (!foundItem) {
        item.quantity = 1;
      }
    });

    // Calculate the total price based on the initial quantities
    this.totalPrice = this.cart.reduce((total: number, product: any) => {
      return total + (product.price * product.quantity);
    }, 0);
    localStorage.setItem('cart', JSON.stringify(this.cart));


    this.cartSize = this.cart.length;

    this.isUserLoggedIn = authService.isLoggedIn()
  }

  ngOnInit(): void {

  }

  incrementQuantity(product: any): void {
    product.quantity++;
    this.updateQuantity(product); // Update the total price
  }

  decrementQuantity(product: any): void {
    if (product.quantity > 1) {
      product.quantity--;
      this.updateQuantity(product); // Update the total price
    }
  }

  updateQuantity(product: any) {
    // Perform any validation or processing here if needed
    // For example, you might want to ensure the quantity is a valid number

    // Update the subtotal of the product
    product.totalPrice = product.price * product.quantity;

    // Update the cart in local storage
    localStorage.setItem('cart', JSON.stringify(this.cart));

    this.calculateTotalOrderClientPrice();
  }


  calculateTotalOrderClientPrice(): void {
    this.totalPrice = this.cart.reduce((total: number, product: {
      quantity: number;
      price: number;
    }) => total + (product.quantity * product.price), 0);
  }

  placeOrder(): void {
    this.cartService.TakeOrder({
      clientId: 1,
      totalPrice: this.totalPrice,
      clientOrderDetailsDtos: this.cart.map((product: { id: any; price: any; quantity: any; }) => ({
        productId: product?.id,
        price: product?.price,
        quantity: product.quantity
      }))
    });
  }


  goToSaleContactForm() {
    this.router.navigate(['/cart/saleContactForm'])
  }

  deleteItem(productId: any) {
    // Find the index of the product in the cart array
    const index = this.cart.findIndex((product: any) => product.id === productId);

    // If the product is found, remove it from the cart
    if (index !== -1) {
      this.cart.splice(index, 1);

      // Update the cart in local storage
      localStorage.setItem('cart', JSON.stringify(this.cart));

      // Recalculate the total price
      this.calculateTotalOrderClientPrice();
      this.productService.incrementProductCount()

    }

    if (this.cart.length == 0) {
      this.cartSize = 0;
    }
  }

}
