import {Component} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {ProductsService} from "../../../products/services/products.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cart: any;

  constructor(private cartService: CartService, private productService: ProductsService) {
    // Retrieve the array from local storage
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
  }

  totalPrice: number = 0;

  updateQuantity(product: any) {
    // Perform any validation or processing here if needed
    // For example, you might want to ensure the quantity is a valid number

    // Update the subtotal of the product
    product.subtotal = product?.price * product?.quantity;
    this.calculateTotalOrderClientPrice();
  }

  calculateTotalOrderClientPrice(): void {
    this.totalPrice = this.cart.reduce((total: number, product: {
      quantity: number;
      price: number;
    }) => total + (product.quantity * product.price), 0);
  }

  placeOrder(): void {
    const orderData = {
      clientId: 1,
      totalPrice: this.totalPrice,
      clientOrderDetailsDtos: this.cart.map((product: { id: any; price: any; quantity: any; }) => ({
        productId: product?.id,
        price: product?.price,
        quantity: product?.quantity
      }))
    };

    this.cartService.placeOrder(orderData).subscribe(
      response => {
        // Handle successful response here
        console.log('Order placed successfully:', response);
        // Clean the local storage cart
        this.cart = [];
        localStorage.removeItem('cart');
        this.productService.incrementProductCount();
      },
      error => {
        // Handle error response here
        console.error('Error placing order:', error);
      }
    );
  }


}
