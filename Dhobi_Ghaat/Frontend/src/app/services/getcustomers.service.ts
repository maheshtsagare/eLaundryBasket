import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetcustomersService {

  url:string = "http://localhost:7777";

  constructor(private http:HttpClient) { }

  getAllCustomers()
  {
   
     return this.http.get<any>(this.url+'/listCust');
  }

   removeByCustId(id:number)
   { 
     console.log("Swadsad");
     return this.http.delete('http://localhost:7777/removeCust/'+id); 
   }

   getOrdersByCustId(id:number){
     return this.http.get<any[]>(this.url+'/getorderbycustid/'+id);
   }
   
   updateOrderStatus(orderObj:any)
  {
    console.log(orderObj);
    
    return this.http.put<any>(this.url+'/updateOrderByStatus',orderObj);
  }

}
