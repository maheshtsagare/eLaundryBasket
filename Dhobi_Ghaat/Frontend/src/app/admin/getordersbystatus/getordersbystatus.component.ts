import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-getordersbystatus',
  templateUrl: './getordersbystatus.component.html',
  styleUrls: ['./getordersbystatus.component.css']
})
export class GetordersbystatusComponent implements OnInit {

  allOrders:any=[];
  orderStatus:any= ["ORDER_PLACED","ORDER_PICKEDUP","ORDER_INPROGRESS","ORDER_DELIVERED"];
  orderObject:any={
    "orderId":1,
    "status":"select"

  };
  selectedStatus: string = '';
  constructor(private serv:OrderService) { }

  ngOnInit() {
    
  }
  getOrderByStatus(status:string)
  {
    this.serv.getOrdersByStatus(status).subscribe(
      data =>{
        this.allOrders = data;
        console.log(this.allOrders);
      }
    );
    
  }
  changedStatus(event:any)
  {
  this.selectedStatus = event.target.value;
  }

  updateOrderStatus(orderId:number,orderstatus:string){
    console.log(orderstatus);
    console.log(orderId);
    this.orderObject.orderId = orderId;
    this.orderObject.status = orderstatus;
    this.serv.updateOrderStatus(this.orderObject).subscribe(
      (msg) => console.log(msg),
      (error) => console.log(error)
    );
    alert("You have Updated OrderStatus of orderId "+this.orderObject.orderId+" Successfully");
    console.log(this.orderObject);
  }
}
