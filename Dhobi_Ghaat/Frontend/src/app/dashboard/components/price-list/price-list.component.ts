import { Component, OnInit } from '@angular/core';
import { ServicePricingService } from 'src/app/services/service-pricing.service';
import { Service } from '../../models/service';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {
  priceIron:number;
  priceWashing:number;
  priceDrycleaning:number;

  Iron:string;
  Wash:string;
  Dryclean:string;

  services:Service[];

  constructor(private svc : ServicePricingService) { }

  ngOnInit() {
    this.svc.getServicesPrice()
    .subscribe(
      data => {
        this.services = data;

        console.log(this.services);
        
        this.priceIron = this.services[0].price;
        this.priceWashing = this.services[1].price;
        this.priceDrycleaning = this.services[2].price;

        this.Iron = this.services[0].service;
        this.Wash = this.services[1].service;
        this.Dryclean = this.services[2].service;
      }
    )
  }

}
