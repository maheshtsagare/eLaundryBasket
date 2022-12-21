import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orderstatus',
  templateUrl: './orderstatus.component.html',
  styleUrls: ['./orderstatus.component.css']
})
export class OrderstatusComponent implements OnInit {
  orderObject:any={
    "orderId":1,
    "status":"select"

  };
  allOrders:any=[];
  orderStatus:any= ["ORDER_PLACED","ORDER_PICKEDUP","ORDER_INPROGRESS","ORDER_DELIVERED"];
  
  constructor(private svc:OrderService) { 
  }

  ngOnInit() {
    this.svc.getAllOrders().subscribe(
      data=>{
     this.allOrders = data;
     console.log(this.allOrders);
    }
    )
  }

  selectedStatus: string = '';

  changedStatus(event:any)
  {
  this.selectedStatus = event.target.value;
  }

  updateOrderStatus(orderId:number,orderstatus:string){
    console.log(orderstatus);
    console.log(orderId);
    this.orderObject.orderId = orderId;
    this.orderObject.status = orderstatus;
    this.svc.updateOrderStatus(this.orderObject).subscribe(
      (msg) => console.log(msg),
      (error) => console.log(error)
    );

    alert("You have Updated OrderStatus of orderId "+this.orderObject.orderId+" Successfully");
    
    console.log(this.orderObject);
  }
}
