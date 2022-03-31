import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomersApiService {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getCustomersList(): Observable<any[]> {
    return this.http.get<any>(
      `${environment.originUrl}${environment.apiUrl}/customers`
    );
  }

  addCustomer(data: any) {
    return this.http.post(
      `${environment.originUrl}${environment.apiUrl}/customers`,
      data
    );
  }

  updateCustomer(id: number | string, data: any) {
    return this.http.put(
      `${environment.originUrl}${environment.apiUrl}/customers/${id}`,
      data
    );
  }

  deleteCustomer(id: number | string) {
    return this.http.delete(
      `${environment.originUrl}${environment.apiUrl}/customers/${id}`
    );
  }
}
