import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersApiService {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getOrdersList(): Observable<any[]> {
    return this.http.get<any>(
      `${environment.originUrl}${environment.apiUrl}/orders`
    );
  }

  addOrder(data: any) {
    return this.http.post(
      `${environment.originUrl}${environment.apiUrl}/orders`,
      data
    );
  }

  updateOrder(id: number | string, data: any) {
    return this.http.put(
      `${environment.originUrl}${environment.apiUrl}/orders/${id}`,
      data
    );
  }

  deleteOrder(id: number | string) {
    return this.http.delete(
      `${environment.originUrl}${environment.apiUrl}/orders/${id}`
    );
  }
}
