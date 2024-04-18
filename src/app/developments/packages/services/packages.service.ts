import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../../environements/environement";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  private url: string = `${environment.appUrl}packages`;
  constructor(private http: HttpClient) {
  }

  getPackages(
    page: number = 0,
    size: number = 10,
    sortProperty: string = 'id',
    sortDirection: string = 'ASC',
    id?: number,
    name?: string,
    active?: string,
    isDefault?: string
  ): Observable<any[]> {
    let params: any = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortProperty', sortProperty)
      .set('sortDirection', sortDirection);

    if (id != null && id !== undefined) params = params.set('id', id.toString());
    if (name != null && name !== undefined && name !== '') params = params.set('name', name);
    if (active != null && active !== undefined && active !== '') params = params.set('active', active);
    if (isDefault != null && isDefault !== undefined && isDefault !== '') params = params.set('isDefault', isDefault);

    return this.http.get<any[]>(this.url, { params: params });
  }


  getPackageById(id?: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }
}
