import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersControllerComponent } from './customers-controller/customers-controller.component';
import { OrdersControllerComponent } from './orders-controller/orders-controller.component';
import { ShipmentsControllerComponent } from './shipments-controller/shipments-controller.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersControllerComponent,
    OrdersControllerComponent,
    ShipmentsControllerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
