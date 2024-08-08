import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBordComponent } from './components/dash-bord/dash-bord.component';
import { LoginComponent } from './components/login/login.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { CartsComponent } from './components/carts/carts.component'

@NgModule({
  declarations: [
    AppComponent,
    DashBordComponent,
    LoginComponent,
    UserDetailsComponent,
    CartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
