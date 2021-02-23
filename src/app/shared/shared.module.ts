import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { CardComponent } from './comps/card/card.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    CardComponent
  ]
})
export class SharedModule { }
