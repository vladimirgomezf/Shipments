import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ShipmentsApiService {
  readonly apiUrl = `${environment.originUrl}${environment.apiUrl}/shipments/`;

  constructor(private http: HttpClient) {}

  getShipmentsList(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl);
  }

  addShipment(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  updateShipment(id: number | string, data: any) {
    return this.http.put(`${this.apiUrl}${id}`, data);
  }

  deleteShipment(id: number | string) {
    return this.http.delete(`${this.apiUrl}${id}`);
  }
}
