import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TsComponent } from './pages/home/ts/ts.component';
import { BtComponent } from './pages/home/bt/bt.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './shared/comps/navbar/navbar.component';
import { CardComponent } from './shared/comps/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TsComponent,
    BtComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
