import { Injectable } from "@angular/core";
import { RegisterService } from "./register.service";

import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient) {}

  authService(email, password) {
    return this.http
      .post<any>("http://localhost:7777/login", {
        email: email,
        password: password
      })
      .pipe(
        map(data => {
          localStorage.clear();
          localStorage.setItem("authenticatedUser", email);
          localStorage.setItem("customer", JSON.stringify(data));
          return data;
        })
      );
  }

  getAuthenticatedUser() {
    return localStorage.getItem("authenticatedUser");
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) return localStorage.getItem("customer");
  }

  isUserLoggedIn() {
    let user = localStorage.getItem("authenticatedUser");
    return !(user === null);
  }

  isAdminLoggedIn() {
    let admin = localStorage.getItem("adminuser");
    return !(admin === null);
  }

  logout() {
    localStorage.removeItem("authenticatedUser");
    localStorage.removeItem("customer");
    localStorage.removeItem("adminuser");
  }
}
