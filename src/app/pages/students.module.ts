import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsRoutingModule } from './students-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../shared/comps/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    StudentsRoutingModule,
  ],
  exports: [],
  declarations: [
    HomeComponent,
    LoginComponent,
    QuizComponent
  ]
})

export class StudentsModule {}
