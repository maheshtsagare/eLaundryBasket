import { error } from 'protractor';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/services/address.service';
import { Component, OnInit } from '@angular/core';
import {Address} from '../../models/Address'

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent implements OnInit {
  address: Address = new Address(localStorage.getItem("addId"),"","","","");
  errorMessage = "Invalid address";
  invalidDetails: boolean = false;

  constructor(private svc: AddressService, private router: Router) { }

  ngOnInit() {
  }

  update() {
    console.log(this.address);
    this.svc.updateAddress(this.address)
      .subscribe(
        data => {
          alert("Address updated successfully");
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
