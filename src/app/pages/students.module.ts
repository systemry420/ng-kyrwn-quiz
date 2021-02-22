import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsRoutingModule } from './students-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';


@NgModule({
  imports: [
    CommonModule,
    StudentsRoutingModule
  ],
  exports: [],
  declarations: [
    HomeComponent,
    LoginComponent,
    QuizComponent
  ]
})

export class StudentsModule {}
