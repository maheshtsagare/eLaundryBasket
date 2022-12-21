import { Component, OnInit } from '@angular/core';
import { NewOrderService } from 'src/app/services/new-order.service';
import { Customer } from 'src/app/auth/models/Customer';
import { Order } from '../../models/Order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.css']
})
export class TrackOrderComponent implements OnInit {

  cust:Customer;
  id:number; 
  orders:any=[];


  constructor(private svc:NewOrderService, private router:Router) {
    this.cust = JSON.parse(localStorage.getItem("customer"));
    this.id = this.cust.customerId;
   }

  ngOnInit() {
    console.log(this.id);
    this.svc.getOrderByCustId(this.id).
    subscribe(
      data => {
        this.orders = data;
        console.log(this.orders);
      },
      error => {
        console.log(error)
      }
    )
  }

  fetchOrderDetails(order: any){
    this.svc.particularOrder = order;
    this.router.navigate(['order']);
  }

}
