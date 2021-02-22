import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TLoginComponent } from './t-login/t-login.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { QuizComponent } from './dashboard/quiz/quiz.component'
import { ProfileComponent } from './dashboard/profile/profile.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: TLoginComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule]
})
export class TeacherRoutingModule {}
