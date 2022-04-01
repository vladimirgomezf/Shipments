import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersApiService {
  readonly apiUrl = `${environment.originUrl}${environment.apiUrl}/orders/`;

  constructor(private http: HttpClient) {}

  getOrdersList(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl);
  }

  addOrder(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  updateOrder(id: number | string, data: any) {
    return this.http.put(`${this.apiUrl}${id}`, data);
  }

  deleteOrder(id: number | string) {
    return this.http.delete(`${this.apiUrl}${id}`);
  }
}
