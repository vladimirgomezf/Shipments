import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomersApiService } from 'src/app/services/customers-api.service';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.css'],
})
export class ShowCustomerComponent implements OnInit {
  customerList$!: Observable<any[]>;

  constructor(private service: CustomersApiService) {}

  ngOnInit(): void {
    this.customerList$ = this.service.getCustomersList();
  }
}
