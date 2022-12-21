import { Component, OnInit } from "@angular/core";
import { GetcustomersService } from "src/app/services/getcustomers.service";
import { Customer } from "src/app/auth/models/Customer";
import { OrderService } from "src/app/services/order.service";

@Component({
  selector: "app-cutomerordersdetail",
  templateUrl: "./cutomerordersdetail.component.html",
  styleUrls: ["./cutomerordersdetail.component.css"]
})
export class CutomerordersdetailComponent implements OnInit {
  constructor(private svc: GetcustomersService, private scv: OrderService) {}

  specificcustomer: Customer;
  ordersByCustId: any = [];
  orderObject: any = {
    orderId: 1,
    status: "select"
  };
  orderStatus: any = [
    "ORDER_PLACED",
    "ORDER_PICKEDUP",
    "ORDER_INPROGRESS",
    "ORDER_DELIVERED"
  ];

  selectedStatus: string = "";

  ngOnInit() {
    this.specificcustomer = JSON.parse(localStorage.getItem("Runningcustomer"));

    this.svc
      .getOrdersByCustId(this.specificcustomer.customerId)
      .subscribe(data => {
        this.ordersByCustId = data;

        console.log(this.ordersByCustId);
      });
  }

  changedStatus(event: any) {
    this.selectedStatus = event.target.value;
  }

  updateOrderStatus(orderId: number, orderstatus: string) {
    console.log(orderstatus);
    console.log(orderId);
    this.orderObject.orderId = orderId;
    this.orderObject.status = orderstatus;
    this.svc.updateOrderStatus(this.orderObject).subscribe(
      msg => console.log(msg),
      error => console.log(error)
    );

    alert(
      "You have Updated OrderStatus of orderId " +
        this.orderObject.orderId +
        " Successfully"
    );

    console.log(this.orderObject);
  }
}
