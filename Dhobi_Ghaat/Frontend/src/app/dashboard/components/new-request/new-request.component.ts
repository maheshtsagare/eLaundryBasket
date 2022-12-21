import { Validator } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { Order } from "../../models/Order";
import { DatePipe } from "@angular/common";
import { NewOrderService } from "src/app/services/new-order.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-new-request",
  templateUrl: "./new-request.component.html",
  styleUrls: ["./new-request.component.css"],
  providers: [DatePipe]
})
export class NewRequestComponent implements OnInit {
  curDate =
    new Date().getFullYear().toString() +
    "-0" +
    (new Date().getMonth() + 1).toString() +
    "-" +
    new Date().getDate().toString();

  order: Order = new Order(
    "",
    "",
    "",
    this.curDate,
    "ORDER_PLACED",
    "IRON",
    ""
  );
  invalidNewRequest: boolean = false;
  errorMessage: string = "Invalid details";

  constructor(private svc: NewOrderService, private router: Router) {}

  ngOnInit() {}

  NewRequest() {
    console.log(this.order);
    console.log(this.curDate);
    this.svc.CreateNewRequest(this.order).subscribe(
      data => {
        alert("Order placed succesfully !!!!");
        this.invalidNewRequest = false;
        this.router.navigate(["welcome"]);
      },
      error => {
        console.log(error);
        this.invalidNewRequest = true;
      }
    );
  }
}
