import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-correction',
  templateUrl: './correction.component.html',
  styleUrls: ['./correction.component.css']
})
export class CorrectionComponent implements OnInit {
  constructor(
    private teacherService: TeacherService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  subsNames
  subject
  level


  getSubjects(ev) {
    this.teacherService.getSubjects(ev.target.value)
    .subscribe(data=>{
      this.subsNames = Object.keys(data).map((index)=>{
        let sub = data[index];
        const name = Object.keys(sub).toString()
        const display = Object.values(sub).toString()
        return {'key': name, 'value': display}
      });
      console.log(this.subsNames);
    })
  }

  studentIds; students
  getExam() {
    if(this.subject && this.level) {
      // fetch stds
      // this.teacherService.getStudentsIds(this.level, this.subject)
      // this.teacherService.examStudents.subscribe(ids => this.studentIds = ids)

      this.authService.getStudentsByLevel(this.level).subscribe(users => {
        this.students = users

      })
    }
  }

}
