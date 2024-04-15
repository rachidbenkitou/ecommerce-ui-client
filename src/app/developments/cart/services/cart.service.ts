import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environements/environement";
import {AuthService} from "../../security/auth.service";
import {ProductsService} from "../../products/services/products.service";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private url: string = `${environment.appUrl}`;

  constructor(private http: HttpClient, private authService: AuthService,
              private productService: ProductsService,
              private toastr: ToastrService,) {

  }

  placeOrder(OrderData: any): Observable<any> {
    if (this.authService.isLoggedIn()) {
      return this.http.post<any>(`${this.url}clientOrders`, OrderData);
    } else {
      return this.http.post<any>(`${this.url}sales`, OrderData);
    }
  }

  addToCart(product: any) {
    product.quantity=1
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');

    if (cart.some((item: any) => item.id === product.id)) {
      // alert('Product already exists in cart!');
      this.toastr.error('Product already exists in cart!', 'Failed!');

    } else {
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      this.productService.incrementProductCount()
      ; // Call this to update the count
      this.toastr.success('Product added to cart!', 'Success!');

    }
  }
}
