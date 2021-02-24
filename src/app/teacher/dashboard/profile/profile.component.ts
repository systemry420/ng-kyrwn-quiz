import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  level; students
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.fetchAllStudents()
  }

  fetchAllStudents() {
    this.authService.getUsers()
    .subscribe(users => {
      this.students = users
    })
  }

  fetchStudentsByLevel() {
    this.authService.getStudentsByLevel(this.level).subscribe(users => {
      this.students = users
    })
  }


}
