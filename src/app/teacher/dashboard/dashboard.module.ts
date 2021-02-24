import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from '../dashboard/quiz/quiz.component';
import { ProfileComponent } from '../dashboard/profile/profile.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from "@angular/forms";
import { McqComponent } from './quiz/mcq/mcq.component';
import { QaComponent } from './quiz/qa/qa.component';
import { CorrectionComponent } from './correction/correction.component';

@NgModule({
  declarations: [
    QuizComponent,
    ProfileComponent,
    McqComponent,
    QaComponent,
    CorrectionComponent
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
      },
      {
        path: 'correction',
        component: CorrectionComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class DashboardModule { }
