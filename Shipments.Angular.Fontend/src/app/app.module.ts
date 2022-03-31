import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './controllers/customers/customers.component';
import { ShowCustomerComponent } from './controllers/customers/show-customer/show-customer.component';
import { AddEditCustomerComponent } from './controllers/customers/add-edit-customer/add-edit-customer.component';
import { OrdersComponent } from './controllers/orders/orders.component';
import { ShowOrderComponent } from './controllers/orders/show-order/show-order.component';
import { AddEditOrderComponent } from './controllers/orders/add-edit-order/add-edit-order.component';
import { ShipmentsComponent } from './controllers/shipments/shipments.component';
import { ShowShipmentComponent } from './controllers/shipments/show-shipment/show-shipment.component';
import { AddEditShipmentComponent } from './controllers/shipments/add-edit-shipment/add-edit-shipment.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    ShowCustomerComponent,
    AddEditCustomerComponent,
    OrdersComponent,
    ShowOrderComponent,
    AddEditOrderComponent,
    ShipmentsComponent,
    ShowShipmentComponent,
    AddEditShipmentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
