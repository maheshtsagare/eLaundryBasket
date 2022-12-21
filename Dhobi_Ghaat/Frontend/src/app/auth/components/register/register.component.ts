import { Component, OnInit } from "@angular/core";
import { RegisterService } from "src/app/services/register.service";
import { NgIf } from '@angular/common';
import { Customer } from '../../models/Customer';
import { Button } from 'protractor';
import { error } from 'util';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  customer:Customer = new Customer("","","","","");
  invalidRegistration:boolean = false;
  errorMessage = 'Invalid credentials'

  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";

  constructor(private svc: RegisterService) {
  }

  Register() {
    this.svc.RegisterCustomer(this.customer)
    .subscribe(
      data => {
        if(data == "Successful"){
          alert("You have registered successfully. Go to login page and login.");
          this.invalidRegistration = false
        }
        else{
          alert("The number or the email id you have entered already exists !!!  give another valid email id and number ")
        }
      },
      error => {
        console.log(error)
        this.invalidRegistration = true
      }
    )
  }

  ngOnInit() {}
}
