import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgetpwdComponent } from './components/forgetpwd/forgetpwd.component';


const routes: Routes = [
  { path:'login', component:LoginComponent},
  { path:'register', component:RegisterComponent},
  { path:'forgetpwd', component:ForgetpwdComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
