import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FootComponent } from './foot/foot.component';
import { AppRoutingModule } from '../app-routing.module';
import { AuthModule } from '../auth/auth.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from '../dashboard/dashboard.module';

import {MatToolbarModule, MatButtonModule, MatIconModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [NavBarComponent, FootComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    AppRoutingModule,
    AuthModule,
    RouterModule,
    HttpClientModule,
    DashboardModule,

    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatSliderModule,
    MatCheckboxModule,
    MatInputModule
  ],

  exports: [
    NavBarComponent,
    FootComponent]
})
export class SharedModule { }
