import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgetpwdComponent } from './components/forgetpwd/forgetpwd.component';
import { ConfirmEqualValidatorDirective } from '../shared/confirm-equal-validator.directive';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgetpwdComponent, ConfirmEqualValidatorDirective],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule

  ],

  exports: [
    LoginComponent,
    RegisterComponent,
    ForgetpwdComponent]
})
export class AuthModule { }
