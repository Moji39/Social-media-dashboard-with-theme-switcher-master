import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { DashbordFollowersComponent } from './components/dashbord-followers/dashbord-followers.component';
import { DashbordOverviewComponent } from './components/dashbord-overview/dashbord-overview.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FollowersCardComponent } from './components/followers-card/followers-card.component';
import { OverviewCardComponent } from './components/overview-card/overview-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardHeaderComponent,
    DashbordFollowersComponent,
    DashbordOverviewComponent,
    FollowersCardComponent,
    OverviewCardComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
