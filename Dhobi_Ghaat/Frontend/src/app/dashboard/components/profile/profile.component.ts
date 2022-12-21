import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/auth/models/Customer';
import { Address } from 'cluster';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  customer: Customer;
  address:any=[];
  hasAddress: boolean = false;

  constructor(private svc: AddressService) { }

  ngOnInit() {
    this.customer = JSON.parse(localStorage.getItem("customer"));
    console.log(this.customer);
    console.log(this.customer.customerId);

     this.svc.getCustAddress(this.customer.customerId)
     .subscribe(
       data => {
         this.address = data;
         if (this.address.length != 0) {
           this.hasAddress = true;
           localStorage.setItem("addId", this.address[0].addressId);
         }
         console.log(this.address);
       }
     ); 
  }


}
