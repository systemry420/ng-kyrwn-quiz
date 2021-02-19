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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import {
  AngularFirestoreProject1,
  AngularFirestoreProject2,
} from './firebase.factory';
import { PLATFORM_ID, NgZone } from '@angular/core';
import { QuizComponent } from './pages/quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TsComponent,
    BtComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    CardComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: 'env',
      useValue: environment
    },
    {
      provide: 'fbKayrawan',
      deps: [PLATFORM_ID, NgZone],
      useFactory: AngularFirestoreProject1
    },
    {
      provide: 'fbQuiz',
      deps: [PLATFORM_ID, NgZone],
      useFactory: AngularFirestoreProject2
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
