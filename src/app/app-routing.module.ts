import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { DashBordComponent } from './components/dash-bord/dash-bord.component';
import { CartsComponent } from './components/carts/carts.component';

const routes: Routes = [

  {path:'login',component:LoginComponent},
  {path:'details/:id',component:UserDetailsComponent},
  {path:'dashbord',component:DashBordComponent},
  {path:'**',component:CartsComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
