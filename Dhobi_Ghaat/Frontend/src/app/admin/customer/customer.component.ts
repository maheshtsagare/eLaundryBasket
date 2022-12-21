import { Component, OnInit } from '@angular/core';
import { GetcustomersService } from 'src/app/services/getcustomers.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  msg:string = "Successfully deleted";
  allCustomer:any=[];
  
  constructor(private svc:GetcustomersService,private router:Router) { }

  ngOnInit() {
  }
     
   getAllCustomer()
   {
     this.svc.getAllCustomers().subscribe(
       data =>{
       this.allCustomer = data;
       console.log(this.allCustomer);
       }
      
     )
   }

   removeByCustId(id:number)
   {
     console.log("btn clicked"+id);
     this.svc.removeByCustId(id).subscribe(
      (msg) => console.log(msg),
      (error) => console.log(error)
    );
    alert("Customer removed");
    location.reload();
   }

   getOrdersByCustId(id:number,cust : any){
    //  this.svc.getOrdersByCustId(id).subscribe(
      //  data => {
      //    this.ordersByCustId = data;

      //    console.log(this.ordersByCustId);

          localStorage.setItem('Runningcustomer',JSON.stringify(cust));
         this.router.navigate(['customerordersdetail',cust.customerId]);
       // });
   }

   getCustAddress(id:number, cust:any){
    localStorage.setItem('Runningcustomer',JSON.stringify(cust));
    this.router.navigate(['cust-address',cust.customerId]);
   }

}
