import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShipmentsApiService } from 'src/app/services/shipments-api.service';

@Component({
  selector: 'app-show-shipment',
  templateUrl: './show-shipment.component.html',
  styleUrls: ['./show-shipment.component.css'],
})
export class ShowShipmentComponent implements OnInit {
  shipmentList$!: Observable<any[]>;

  constructor(private service: ShipmentsApiService) {}

  ngOnInit(): void {
    this.shipmentList$ = this.service.getShipmentsList();
  }
}
