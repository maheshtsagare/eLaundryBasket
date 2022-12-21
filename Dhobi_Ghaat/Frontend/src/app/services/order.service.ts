
import { Injectable } from '@angular/core';
import { Order } from '../dashboard/models/Order';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  url:string = "http://localhost:7777";
  constructor(private http:HttpClient) { }

  getAllOrders(){
      return this.http.get<any>(this.url+'/getallorder');
  }

  updateOrderStatus(orderObj:any)
  {
    console.log(orderObj);
    
    return this.http.put<any>(this.url+'/updateOrderByStatus',orderObj);
  }

  // /getorderbystatus/

   getOrdersByStatus(status:string)
   {
     return this.http.get<any[]>(this.url+'/getorderbystatus/'+status);
   }

}
