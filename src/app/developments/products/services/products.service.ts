import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../../environements/environement";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url: string = `${environment.appUrl}products`;


  constructor(private http: HttpClient) {
  }

  getProducts(
    page: number = 0,
    size: number = 10,
    sortProperty: string = 'id',
    sortDirection: string = 'ASC',
    id?: number,
    name?: string,
    price?: number,
    quantity?: number,
    productVisibility?: string,
    categoryId?: number
  ): Observable<any[]> {
    // Initialize HttpParams
    let params: any = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortProperty', sortProperty)
      .set('sortDirection', sortDirection);

    // Add optional parameters only if they are present and not undefined
    if (id != null && id !== undefined) params = params.set('productId', id);
    if (name != null && name !== undefined && name !== '') params = params.set('productName', name);
    if (price != null && price !== undefined) params = params.set('productPrice', price.toString());
    if (quantity != null && quantity !== undefined) params = params.set('productQuantity', quantity.toString());
    if (productVisibility != null && productVisibility !== undefined && productVisibility !== '') params = params.set('productVisibility', productVisibility);
    if (categoryId != null && categoryId !== undefined) params = params.set('categoryId', categoryId.toString());

    // Send the GET request with the constructed query parameters
    return this.http.get<any[]>(this.url, {params: params});
  }


  getProductById(id?: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`)
  }

  private productCountSubject = new BehaviorSubject<number>(0);
  productCount$ = this.productCountSubject.asObservable();

  private wishlistProductCountSubject = new BehaviorSubject<number>(0);
  wishlistProductCount$ = this.wishlistProductCountSubject.asObservable();

  incrementProductCount() {
    if (typeof localStorage !== 'undefined') {
      try {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        this.productCountSubject.next(cart.length);
      } catch (error) {
        console.error('Error while parsing cart data:', error);
      }
    } else {
      console.warn('localStorage is not available.'); // Log a warning if localStorage is not available
    }
  }

  incrementWishlistProductCount() {
    if (typeof localStorage !== 'undefined') {
      try {
        const wishlist = JSON.parse(localStorage.getItem('bokeito-ecommerce-wishlist') || '[]');
        this.wishlistProductCountSubject.next(wishlist.length);
      } catch (error) {
        console.error('Error while parsing wishlist data:', error);
      }
    } else {
      console.warn('localStorage is not available.'); // Log a warning if localStorage is not available
    }
  }


}
