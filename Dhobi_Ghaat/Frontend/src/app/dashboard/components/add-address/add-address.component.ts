import { Router } from '@angular/router';
import { AddressService } from 'src/app/services/address.service';
import { Address } from '../../models/Address'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {
  address: Address = new Address(1, "", "", "", "");
  errorMessage = "Invalid address";
  invalidDetails: boolean = false;
  pincodePattern = "^[1-9][0-9]{5}$";

  constructor(private svc:AddressService,private router :Router) { }

  ngOnInit() {
  }

  Add() {
    console.log(this.address);
    this.svc.addAddress(this.address)
      .subscribe(
        data => {
          alert("New address added succesfully");
          this.invalidDetails = false;
          this.router.navigate(['welcome']);
        },
        error => {
          console.log(error);
          this.invalidDetails = true;
        }
    )
  }

}
