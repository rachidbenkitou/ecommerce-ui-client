import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {ToastrConfigHelper} from "../shared/models/toastr-config-helper";

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService,
  ) {
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
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && !request.url.includes('/login')) {
          // If the response status is 401 (Unauthorized), the token has expired
          this.router.navigate(['/loginRegister']);
          this.toastr.error('You have to sign in!', 'Error!', ToastrConfigHelper.getCustomConfig());
        }
        return throwError(error);
      }))
  }
}
