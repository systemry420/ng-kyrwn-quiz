import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { EvalService } from 'src/app/services/eval.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentId
  student
  subject
  submissions
  showForm
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private evalService: EvalService
  ) { }

  ngOnInit(): void {
    this.studentId = this.route.snapshot.paramMap.get('id')
    this.subject = this.route.snapshot.paramMap.get('subject')
    this.authService.getUser(this.studentId)
      .subscribe(s => {
        this.student = s
        this.evalService.getSubmissions(this.student?.level, this.subject, this.student?.id)
          .subscribe(subs => {
            this.submissions = subs
          })
      })
  }

}
