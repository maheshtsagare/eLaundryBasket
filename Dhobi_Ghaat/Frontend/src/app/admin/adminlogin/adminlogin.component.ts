import { Component, OnInit } from "@angular/core";
import { AdminloginService } from "../services/adminlogin.service";
import { Router } from "@angular/router";
import { Admin } from "../models/admin";

@Component({
  selector: "app-adminlogin",
  templateUrl: "./adminlogin.component.html",
  styleUrls: ["./adminlogin.component.css"]
})
export class AdminloginComponent implements OnInit {
  invalidAdminLogin: boolean = false;
  errorMessage = "Invalid Adminlogin-credentials";
  admin: Admin = new Admin("", "");

  constructor(private svc: AdminloginService, private router: Router) {}

  ngOnInit() {
    console.clear();
  }

  AdminLogin() {
    console.log("hi you there");

    console.log(this.admin.email);
    console.log(this.admin.password);

    console.log(this.svc.authAdmin(this.admin));

    if (this.svc.authAdmin(this.admin)) {
      this.invalidAdminLogin = true;
      localStorage.setItem("adminuser", JSON.stringify(this.admin));

      this.router.navigate(["dashboard", this.admin.email]);
    }
  }
}
