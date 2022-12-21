import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderstatusComponent } from './orderstatus/orderstatus.component';
import { FormsModule } from '@angular/forms';
import { CutomerordersdetailComponent } from './cutomerordersdetail/cutomerordersdetail.component';
import { GetordersbystatusComponent } from './getordersbystatus/getordersbystatus.component';
import { CustAddressComponent } from './cust-address/cust-address.component';


@NgModule({
  declarations: [AdminloginComponent, DashboardComponent, CustomerComponent, OrderstatusComponent, CutomerordersdetailComponent, GetordersbystatusComponent, CustAddressComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
