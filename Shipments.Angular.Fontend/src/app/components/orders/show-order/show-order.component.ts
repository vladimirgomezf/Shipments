import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdersApiService } from 'src/app/services/orders-api.service';

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css'],
})
export class ShowOrderComponent implements OnInit {
  orderList$!: Observable<any[]>;

  constructor(private service: OrdersApiService) {}

  ngOnInit(): void {
    this.orderList$ = this.service.getOrdersList();
  }
}
