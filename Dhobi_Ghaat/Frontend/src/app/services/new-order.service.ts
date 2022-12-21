import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Order } from "../dashboard/models/Order";
import { Customer } from "../auth/models/Customer";

@Injectable({
  providedIn: "root"
})
export class NewOrderService {
  cust: Customer;
  id: number;
  particularOrder: any = {};

  constructor(private http: HttpClient) {
    this.cust = JSON.parse(localStorage.getItem("customer"));
    this.id = this.cust.customerId;
  }

  CreateNewRequest(order: Order) {
    console.log(order);
    console.log(this.cust);
    console.log(this.id);

    return this.http.post(
      "http://localhost:7777/createorder/" +
        this.id +
        "?serviceType=" +
        order.serviceType +
        "&status=" +
        order.orderStatus,
      order,
      { responseType: "text" as "json" }
    );
  }

  getOrderByCustId(id: number) {
    return this.http.get<any[]>("http://localhost:7777/getorderbycustid/"+id);
  }
}
