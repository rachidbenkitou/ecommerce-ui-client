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
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortProperty', sortProperty)
      .set('sortDirection', sortDirection);

    // Add optional parameters only if they are present
    if (id !== undefined) params = params.set('productId', id.toString());
    if (name) params = params.set('productName', name);
    if (price !== undefined) params = params.set('productPrice', price.toString());
    if (quantity !== undefined) params = params.set('productQuantity', quantity.toString());
    if (productVisibility) params = params.set('productVisibility', productVisibility);
    if (categoryId !== undefined) params = params.set('categoryId', categoryId.toString());

    // Send the GET request with the constructed query parameters
    return this.http.get<any[]>(this.url, {params: params});
  }

  getProductById(id?: number): Observable<any> {
    let params: any = new HttpParams();
    if (id != null) {
      params = params.set("productId", id);
    }
    return this.http.get<any>(`${this.url}`, params)
  }

  private productCountSubject = new BehaviorSubject<number>(0);
  productCount$ = this.productCountSubject.asObservable();

  incrementProductCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.productCountSubject.next(cart.length);
  }
}
