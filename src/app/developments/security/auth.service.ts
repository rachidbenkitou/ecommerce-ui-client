import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, map, Observable} from 'rxjs';
import {environment} from "../../../environements/environement";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.appUrl}users/login`;

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<any> {
    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    body.set('grant_type', `${environment.grant_type}`);
    body.set('client_id', `${environment.client_id}`);

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    return this.http.post<any>(this.apiUrl, body.toString(), options).pipe(
      map(response => {
        localStorage.setItem('bokeito-ecommerce-accessToken', response.accessToken);
        localStorage.setItem('bokeito-ecommerce-refreshToken', response?.refreshToken);
        return response;
      }),
      catchError(error => {
        console.error('Error logging in:', error);
        throw error;
      })
    );
  }

  // login(username: string, password: string): Observable<any> {
  //   // const body = `client_id=${encodeURIComponent(environment.client_id)}&grant_type=${encodeURIComponent(environment.grant_type)}&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
  //   // const headers = new HttpHeaders({
  //   //   'Content-Type': 'application/x-www-form-urlencoded'
  //   // });
  //   //
  //   // return this.http.post<any>(this.apiUrl, body, { headers }).pipe(
  //   //   map(response => {
  //   //     // Store tokens in local storage
  //   //     localStorage.setItem('bokeito-ecommerce-accessToken', response?.accessToken);
  //   //     localStorage.setItem('bokeito-ecommerce-refreshToken', response?.refreshToken);
  //   //     return response;
  //   //   }),
  //   //   catchError(error => {
  //   //     console.error('Error logging in:', error);
  //   //     return throwError(error);
  //   //   })
  //   // );
  //
  //   let body = new URLSearchParams();
  //   body.set('user', username);
  //   body.set('password', password);
  //
  //   let options = {
  //     headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  //   };
  //
  //   return this.http
  //     .post(`${this.apiUrl}`, body.toString(), options)
  //     .subscribe(response => {
  //       localStorage.setItem('bokeito-ecommerce-accessToken', response.accessToken);
  //       localStorage.setItem('bokeito-ecommerce-refreshToken', response?.refreshToken);
  //     });
  // }
}
