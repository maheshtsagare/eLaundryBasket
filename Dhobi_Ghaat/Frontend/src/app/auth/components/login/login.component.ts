import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { error } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin:boolean = false;
  errorMessage = 'Invalid login-credentials'
  email:string = ''
  password = ''

  constructor(private router:Router,
    private svc:LoginService) { }
  
  Login() {

    this.svc.authService(this.email,this.password)
    .subscribe(
      data =>{
        console.log(data)
        this.invalidLogin = false
        this.router.navigate(['welcome', data.firstName])
      },
      error => {
        console.log(error)
        this.invalidLogin = true
      }
    )
  }

  ngOnInit() {
  }

}
