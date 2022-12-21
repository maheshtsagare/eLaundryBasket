import { Injectable } from '@angular/core';
import { Admin } from '../models/admin';
@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  // emailId:string = 'admin.dhobighaat@gmail.com';
  // custPassword:string = 'Admin321';

  constructor() { }

  authAdmin(admin:Admin)
  {
      if(admin.email == "abc@gmail.com" && admin.password == "123456")
      {
        return true;
      }
      else
      {
        return false;
      }
        
  }

}
