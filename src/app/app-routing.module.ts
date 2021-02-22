import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { TLoginComponent } from './teacher/t-login/t-login.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "tlogin",
    pathMatch: "full",
    // component: LoginComponent
  },
  {
    path: "slogin",
    component: LoginComponent
  },
  {
    path: "tlogin",
    component: TLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
