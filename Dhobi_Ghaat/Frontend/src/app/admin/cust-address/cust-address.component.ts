import { Customer } from 'src/app/auth/models/Customer';
import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-cust-address',
  templateUrl: './cust-address.component.html',
  styleUrls: ['./cust-address.component.css']
})
export class CustAddressComponent implements OnInit {
  customer : Customer;
  address:any=[];
  hasAddress:boolean;


  constructor(private svc :AddressService) { }

  ngOnInit() {
    this.customer = JSON.parse(localStorage.getItem("Runningcustomer"));

    this.svc.getCustAddress(this.customer.customerId)
     .subscribe(
       data => {
         this.address = data;
         console.log(this.address);
         if (this.address.length != 0) {
          this.hasAddress = true;
        }

       }
     );
  }

}
