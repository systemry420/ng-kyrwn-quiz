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
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentComponent } from './correction/student/student.component';

@NgModule({
  declarations: [
    DashboardComponent,
    QuizComponent,
    ProfileComponent,
    McqComponent,
    QaComponent,
    CorrectionComponent,
    StudentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
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
        component: CorrectionComponent,
      },
      {
        path: 'correction/student/:id/:subject',
        component: StudentComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class DashboardModule { }
