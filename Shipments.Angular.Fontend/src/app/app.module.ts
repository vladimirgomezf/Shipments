import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ShowCustomerComponent } from './components/customers/show-customer/show-customer.component';
import { AddEditCustomerComponent } from './components/customers/add-edit-customer/add-edit-customer.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ShowOrderComponent } from './components/orders/show-order/show-order.component';
import { AddEditOrderComponent } from './components/orders/add-edit-order/add-edit-order.component';
import { ShipmentsComponent } from './components/shipments/shipments.component';
import { ShowShipmentComponent } from './components/shipments/show-shipment/show-shipment.component';
import { AddEditShipmentComponent } from './components/shipments/add-edit-shipment/add-edit-shipment.component';
import { CustomersApiService } from './services/customers-api.service';
import { OrdersApiService } from './services/orders-api.service';
import { ShipmentsApiService } from './services/shipments-api.service';

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
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CustomersApiService, OrdersApiService, ShipmentsApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
