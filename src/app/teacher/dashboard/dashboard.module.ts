import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from '../dashboard/quiz/quiz.component';
import { ProfileComponent } from '../dashboard/profile/profile.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    QuizComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'quiz',
        component: QuizComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class DashboardModule { }
