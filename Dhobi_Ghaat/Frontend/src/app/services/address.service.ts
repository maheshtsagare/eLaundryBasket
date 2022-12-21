import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Address} from '../dashboard/models/Address'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  custId: number;

  constructor(private http: HttpClient) { }

  getCustAddress(customerId:number){
  return this.http.get<any[]>("http://localhost:7777/addresslist"+"?custId="+customerId);
  }

  addAddress(addr: Address) {
    this.custId = (JSON.parse(localStorage.getItem("customer")).customerId);
    return this.http.post("http://localhost:7777/addressadd"+"?custId="+this.custId,addr,{responseType:'text' as 'json'})
    
  }

  updateAddress(addr: Address) {
    console.log(addr);
    return this.http.put("http://localhost:7777/addressUpdate",addr,{responseType:'text' as 'json'})
  }
}
