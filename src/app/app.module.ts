import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DistrictsComponent } from './pages/districts/districts.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { SingleComponent } from './pages/single/single.component';
import { AssetsComponent } from './img/assets/assets.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DistrictsComponent,
    LoginComponent,
    SignUpComponent,
    NavbarComponent,
    FooterComponent,
    SingleComponent,
    AssetsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
