import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherRoutingModule } from './teacher-routing.module';
import { TLoginComponent } from './t-login/t-login.component';
import { FormsModule } from '@angular/forms';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    TLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboardModule,
    TeacherRoutingModule
  ],
  exports: [
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
