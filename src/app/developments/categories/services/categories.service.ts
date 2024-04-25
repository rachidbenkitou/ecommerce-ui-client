import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../../environements/environement";
import {HttpClient, HttpContext} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private url: string = `${environment.appUrl}categories`;

  constructor(private http: HttpClient) {
  }

  getCategories(context?: HttpContext): Observable<any[]> {
    return this.http.get<any[]>(this.url, {context});
  }
}
