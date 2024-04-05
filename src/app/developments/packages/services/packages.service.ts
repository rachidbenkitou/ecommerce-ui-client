import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environements/environement";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PackagesService {
  private url: string = `${environment.appUrl}packages`;

  constructor(private http: HttpClient) {
  }

  getPackages(): Observable<any> {
    return this.http.get<any[]>(`${this.url}`)
  }
}
