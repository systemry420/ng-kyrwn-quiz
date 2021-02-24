import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "st/home",
    pathMatch: "full",
  },
  {
    path: "st",
    loadChildren: () => import('./pages/students.module').then(m => m.StudentsModule)
  },
  {
    path: "tr",
    loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
