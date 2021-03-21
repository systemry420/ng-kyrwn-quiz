import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TLoginComponent } from './t-login/t-login.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/correction',
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
