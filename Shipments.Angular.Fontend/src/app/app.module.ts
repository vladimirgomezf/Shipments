import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
