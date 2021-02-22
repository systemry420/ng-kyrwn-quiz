import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './dashboard/quiz/quiz.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { TeacherRoutingModule } from './teacher-routing.module';
import { TLoginComponent } from './t-login/t-login.component';

@NgModule({
  declarations: [
    QuizComponent,
    ProfileComponent,
    TLoginComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ],
  exports: [
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
