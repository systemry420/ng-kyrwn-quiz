import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user
  subs
  quiz
  constructor(
    private quizService: QuizService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userData'))
    this.subs = Object.keys(this.user.subs).map(sub => {
      return {'name': sub ,'content': this.user.subs[sub]}
    })
  }

  fetchQuiz(name) {
    this.quizService.currentSubject = name
    this.quizService.fetchQuiz(name)
    this.router.navigate(['quiz'])
  }

}
