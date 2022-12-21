import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  showing: boolean;
  adminShowing: boolean;

  constructor(private svc: LoginService) {
    this.showing = !this.svc.isUserLoggedIn();
    this.adminShowing = !this.svc.isAdminLoggedIn();
   }

  ngOnInit() {
  }

  Logout(){
    localStorage.clear();
    
  }

}
