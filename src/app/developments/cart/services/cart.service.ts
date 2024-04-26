import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environements/environement";
import {AuthService} from "../../security/auth.service";
import {ProductsService} from "../../products/services/products.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {ToastrConfigHelper} from "../../shared/models/toastr-config-helper";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private url: string = `${environment.appUrl}`;

  constructor(private http: HttpClient, private authService: AuthService,
              private productService: ProductsService,
              private toastr: ToastrService,
              private router: Router) {

  }

  placeOrder(OrderData: any): Observable<any> {
    if (this.authService.isLoggedIn()) {
      return this.http.post<any>(`${this.url}clientOrders`, OrderData);
    } else {
      return this.http.post<any>(`${this.url}sales`, OrderData);
    }
  }

  placePackageOrder(OrderData: any): Observable<any> {
    return this.http.post<any>(`${this.url}clientOrders/package`, OrderData);
  }

  addToCart(product: any) {
    product.quantity = 1
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');

    if (cart.some((item: any) => item.id === product.id)) {
      // alert('Product already exists in cart!');
      this.toastr.error('Product already exists in cart!', 'Failed!', ToastrConfigHelper.getCustomConfig());

    } else {
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      this.productService.incrementProductCount()
      ; // Call this to update the count
      this.toastr.success('Product added to cart!', 'Success!', ToastrConfigHelper.getCustomConfig());

    }
  }

  cart: any[] = [];

  TakeOrder(orderData: any): void {
    this.placeOrder(orderData).subscribe(
      response => {
        // Handle successful response here
        console.log('Order placed successfully:', response);
        // Clean the local storage cart
        this.cart = [];
        localStorage.removeItem('cart');
        this.productService.incrementProductCount();
        this.router.navigate(["products/homePage"])
        this.toastr.success('Your order has been sent successfully!', 'Success!', ToastrConfigHelper.getCustomConfig());
      },
      error => {
        // Handle error response here
        console.error('Error placing order:', error);
      }
    );
  }

  constructSaleData(saleForm: any, totalPrice: number, cart: any[]): any {
    console.log(cart)
    return {
      address: saleForm.get('address')?.value,
      fullName: saleForm.get('fullName')?.value,
      phone: saleForm.get('phone')?.value,
      email: saleForm.get('email')?.value,
      totalPrice: totalPrice,
      saleDetails: cart.map((product: { id: number; price: number; quantity: number; }) => ({
        productId: product.id,
        price: product.price,
        quantity: product.quantity
      }))
    };
  }


  placeSaleOrder(saleData: any): void {
    this.http.post<any>(`${this.url}sales`, saleData).subscribe(
      response => {
        this.toastr.success('Your order has been sent successfully!', 'Success!', ToastrConfigHelper.getCustomConfig());
        this.cart = [];
        localStorage.removeItem('cart');
        this.productService.incrementProductCount();
        this.router.navigate(["products/homePage"])
      },
      error => {
        this.toastr.error('Error placing sale order. Please try again later.', 'Error!', ToastrConfigHelper.getCustomConfig());
      }
    );
  }

  getClientOrdersById(): Observable<any> {
    const clientUsername: string = localStorage.getItem("bokeito-ecommerce-service-logged-client") || 'No Client Username Found';
    return this.http.get<any>(`${this.url}clientOrders/byClient/${clientUsername}`);
  }
}
