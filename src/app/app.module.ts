import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
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
import { TextareaAutoresizeDirective } from './pages/quiz/textarea-autoresize.directive';
import { TeacherModule } from './teacher/teacher.module';
import { StudentsModule } from './pages/students.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // LoginComponent,
    // HomeComponent,
    // NavbarComponent,
    // CardComponent,
    // QuizComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StudentsModule,
    TeacherModule,
    SharedModule
  ],
  exports: [
    // NavbarComponent
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
