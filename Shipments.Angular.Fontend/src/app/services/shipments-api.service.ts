import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ShipmentsApiService {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getShipmentsList(): Observable<any[]> {
    return this.http.get<any>(
      `${environment.originUrl}${environment.apiUrl}/shipments`
    );
  }

  addShipment(data: any) {
    return this.http.post(
      `${environment.originUrl}${environment.apiUrl}/shipments`,
      data
    );
  }

  updateShipment(id: number | string, data: any) {
    return this.http.put(
      `${environment.originUrl}${environment.apiUrl}/shipments/${id}`,
      data
    );
  }

  deleteShipment(id: number | string) {
    return this.http.delete(
      `${environment.originUrl}${environment.apiUrl}/shipments/${id}`
    );
  }
}
