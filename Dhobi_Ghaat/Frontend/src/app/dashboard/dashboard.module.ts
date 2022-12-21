import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NewRequestComponent } from './components/new-request/new-request.component';
import { PriceListComponent } from './components/price-list/price-list.component';
import { TrackOrderComponent } from './components/track-order/track-order.component';
import { OrderComponent } from './components/order/order.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { UpdateAddressComponent } from './components/update-address/update-address.component';




@NgModule({
  declarations: [WelcomeComponent, ProfileComponent, LogoutComponent,
     NewRequestComponent, PriceListComponent, TrackOrderComponent, OrderComponent, AboutUsComponent, FeedbackComponent, AddAddressComponent, UpdateAddressComponent],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    MatSliderModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class DashboardModule { }
