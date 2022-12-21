import { Component, OnInit } from '@angular/core';
import { NewOrderService } from 'src/app/services/new-order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  particlrOrdr:any={};

  constructor(private svc: NewOrderService) {}

  ngOnInit() {
    this.particlrOrdr = this.svc.particularOrder;
    console.log(this.particlrOrdr);
  }

}
