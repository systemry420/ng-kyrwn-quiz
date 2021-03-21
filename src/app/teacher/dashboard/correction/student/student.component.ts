import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { EvalService } from 'src/app/services/eval.service';
import { QuizService } from 'src/app/services/quiz.service';

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
  submissionsSubject = new BehaviorSubject(null)
  showForm =true
  formData = []
  currentQuiz
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private evalService: EvalService,
    private quizService: QuizService
  ) { }

  ngOnInit(): void {
    this.studentId = this.route.snapshot.paramMap.get('id')
    this.subject = this.route.snapshot.paramMap.get('subject')
    this.getUser()
  }

  getUser() {
    this.authService.getUser(this.studentId)
    .pipe(
      map(user => this.student = user),
      switchMap(() => this.getSubmissions()),
      map(subs => {
        this.submissions = subs
        this.submissionsSubject.next(subs)
      })
    ).subscribe()
  }

  getSubmissions() {
    return this.evalService.getSubmissions(this.student?.level, this.subject, this.student?.id)
  }

  getQuiz(date) {
    this.quizService.getQuiz(this.student?.level, this.subject, date)
    .subscribe((quiz:any) => {
      this.currentQuiz = quiz.data
      this.constuctExamFrom(date)
    })
  }

  constuctExamFrom(date) {
    this.formData = []
    let quiz = this.currentQuiz
    let submissions = this.submissions.filter(sub => {
      if(sub.date == date) {
        return sub['answers']
      }
    })

    let answers = submissions[0]['answers']
    quiz = Object.keys(quiz).map((ques, index) => {
      let question = quiz[ques]
      if(question.type == 'mcq') {
        this.formData.push({
          'type': 'mcq',
          'question': question['data']['q'],
          'answer': question['data']['o'+ answers[index]['answer']]
        })
      } else {
        this.formData.push({
          'type': 'qa',
          'question': question['data']['q'],
          'answer': answers[index]['answer']
        })
      }
    })
  }

  showCorrectionForm(date, index) {
    this.showForm = index
    this.getQuiz(date)
  }

}
