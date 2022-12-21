import { HttpClient}    from '@angular/common/http';
import { Injectable } from "@angular/core";


import { Customer } from "../auth/models/Customer";

@Injectable({
  providedIn: "root"
})
export class RegisterService {
  customers: Customer[];

  constructor(private http:HttpClient) {
    this.customers = [];
  }


  RegisterCustomer(customer:Customer) {
    console.log("i m here!!!");
    console.log(customer);
    return this.http.post("http://localhost:7777/register", customer,{responseType:'text' as 'json'});
  }
}