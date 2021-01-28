import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user
  subs
  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userData'))
    this.subs = Object.keys(this.user.subs).map(sub => {
      return this.user.subs[sub]
    })
    console.log(this.subs);

  }

  keys() : Array<string> {
    return Object.keys(this.subs);
  }

}

interface Subjects {
  [ index: string ]: string
}
