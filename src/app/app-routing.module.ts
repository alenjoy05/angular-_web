import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistrictsComponent } from './pages/districts/districts.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SingleComponent } from './pages/single/single.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'districts',component:DistrictsComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'sign-up',component:SignUpComponent
  },
  {
    path:'single',component:SingleComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
