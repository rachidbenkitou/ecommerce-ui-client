import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from "./auth.service";

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private inject: Injector) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Retrieve token from local storage
    let authService = this.inject.get(AuthService);
    let token: string = authService.getAccessToken();

    // If token exists, add it to the request headers
    if (token && !request.url.includes('/login')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log(request)
    }
    return next.handle(request);
  }
}
