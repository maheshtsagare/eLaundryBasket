import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FootComponent } from './foot/foot.component';


const routes: Routes = [
  {path:"nav-bar", component:NavBarComponent},
  {path:"foot", component:FootComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
