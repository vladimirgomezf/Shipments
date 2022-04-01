import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomersApiService {
  readonly apiUrl = `${environment.originUrl}${environment.apiUrl}/customers/`;

  constructor(private http: HttpClient) {}

  getCustomersList(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl);
  }

  addCustomer(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  updateCustomer(id: number | string, data: any) {
    return this.http.put(`${this.apiUrl}${id}`, data);
  }

  deleteCustomer(id: number | string) {
    return this.http.delete(`${this.apiUrl}${id}`);
  }
}
