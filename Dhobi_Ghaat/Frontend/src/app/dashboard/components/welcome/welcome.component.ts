import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/auth/models/Customer';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  customer:Customer;
  Name:string;

  constructor() { 
    this.customer  =  JSON.parse(localStorage.getItem("customer"));
    console.log(this.customer);
    this.Name = this.customer.firstName;
  }

  ngOnInit() {
  }

}
