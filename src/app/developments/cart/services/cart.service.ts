import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environements/environement";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private url: string = `${environment.appUrl}clientOrders`;

  constructor(private http: HttpClient) {
  }

  placeOrder(clientOrderData: any): Observable<any> {
    return this.http.post<any>(`${this.url}`, clientOrderData);
  }

}
