import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from '../dashboard/quiz/quiz.component';
import { ProfileComponent } from '../dashboard/profile/profile.component';

@NgModule({
  declarations: [
    QuizComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
