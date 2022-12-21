import { Component, OnInit } from '@angular/core';
import { Admin } from '../models/admin';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  admin:Admin;
  adminName:string;
  constructor() {
    this.admin = JSON.parse(localStorage.getItem('adminuser'));
    this.adminName = this.admin.email; 
    console.log(this.adminName);
   }
   
  ngOnInit() {
  }


  

}
