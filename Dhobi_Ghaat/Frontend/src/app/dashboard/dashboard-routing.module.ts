import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NewRequestComponent } from './components/new-request/new-request.component';
import { PriceListComponent } from './components/price-list/price-list.component';
import { TrackOrderComponent } from './components/track-order/track-order.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { OrderComponent } from './components/order/order.component';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { UpdateAddressComponent } from './components/update-address/update-address.component';


const routes: Routes = [
  { path:'welcome/:firstName', component:WelcomeComponent},
  { path:'welcome', component:WelcomeComponent},
  { path:'profile', component:ProfileComponent},
  { path:'logout', component:LogoutComponent},
  { path:'newRequest', component:NewRequestComponent},
  { path:'priceList', component:PriceListComponent},
  { path:'trackOrder', component:TrackOrderComponent},
  { path:'about-us', component:AboutUsComponent},
  { path:'feedback', component:FeedbackComponent},
  { path:'order', component:OrderComponent},
  { path:'add-address', component:AddAddressComponent},
  { path:'update-address', component:UpdateAddressComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
