import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from "./auth.service";

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  // intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  //   const token = this.authService.getAccessToken();
  //   if (token && !request.url.includes('/login')) {
  //     const authReq = request.clone({
  //       headers: new HttpHeaders({
  //         Authorization: 'Bearer ' + token
  //       })
  //     });
  //     console.log("AuthHeader")
  //     console.log(authReq.headers.get("authorization"))
  //     return next.handle(authReq);
  //   }
  //   console.log("Request")
  //   console.log(request.headers.get("authorization"))
  //   return next.handle(request);
  // }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Retrieve token from local storage
    let token: string = this.authService.getAccessToken();

    // If token exists, add it to the request headers
    if (token && !request.url.includes('/login')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

    }
    return next.handle(request);
  }
}
