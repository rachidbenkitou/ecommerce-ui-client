import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../environements/environement";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.appUrl}users`;
  private accessTokenKey = 'bokeito-ecommerce-accessToken';
  private refreshTokenKey = 'bokeito-ecommerce-refreshToken';

  constructor(private http: HttpClient) {
  }

  LoginWithoutBackend() {
    this.storeTokens(this.accessTokenKey, this.refreshTokenKey);
  }

  LogoutWithoutBackend() {
    this.clearTokens();
  }

  register(formData: any): Observable<any> {
    const url = `${this.apiUrl}`; // Assuming your API endpoint for registration is /register
    return this.http.post(url, formData);
  }

  login(username: string, password: string): Observable<any> {
    // Check if both access token and refresh token are present in local storage
    const hasAccessToken = !!this.getAccessToken();
    const hasRefreshToken = !!this.getRefreshToken();

    return this.doLogin(username, password);
  }

  private doLogin(username: string, password: string): Observable<any> {
    const body = this.buildFormUrlEncodedBody({
      username,
      password,
      grant_type: environment.grant_type,
      client_id: environment.client_id,
      client_secret: environment.client_secret
    });

    const options = {
      headers: this.buildHeaders()
    };

    return this.http.post<any>(`${this.apiUrl}/login`, body, options);
  }

  logout(): Observable<any> {
    const refreshToken = this.getRefreshToken();

    if (!refreshToken) {
      console.warn('No refresh token found. Skipping logout.');
      return new Observable();
    }

    const body = this.buildFormUrlEncodedBody({
      refresh_token: refreshToken,
      client_id: environment.client_id,
      client_secret: environment.client_secret

    });

    const options = {
      headers: this.buildHeaders()
    };

    return this.http.post<any>(`${this.apiUrl}/logout`, body, options);
  }

  private buildFormUrlEncodedBody(data: any): string {
    const params = new URLSearchParams();
    Object.keys(data).forEach(key => params.set(key, data[key]));
    return params.toString();
  }

  private buildHeaders(): HttpHeaders {
    return new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  }

  storeTokens(accessToken: string, refreshToken: string): void {
    localStorage.setItem(this.accessTokenKey, accessToken);
    localStorage.setItem(this.refreshTokenKey, refreshToken);
  }

  clearTokens(): void {
    localStorage.removeItem(this.accessTokenKey);
    localStorage.removeItem(this.refreshTokenKey);
  }

  getAccessToken(): string {
    return localStorage.getItem(this.accessTokenKey) || '';
  }

  getRefreshToken(): string {
    return localStorage.getItem(this.refreshTokenKey) || '';
  }

  isLoggedIn(): boolean {
    return this.getAccessToken() !== '' && this.getRefreshToken() !== '';
  }
}
