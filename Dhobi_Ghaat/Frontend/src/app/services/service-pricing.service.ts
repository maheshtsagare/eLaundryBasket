import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service } from '../dashboard/models/service';

@Injectable({
  providedIn: 'root'
})
export class ServicePricingService {

  constructor(private http: HttpClient){}

  getServicesPrice(){
    return this.http.get<Service[]>("http://localhost:7777"+'/getallservice');
  }
}
