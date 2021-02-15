import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { QuizService } from 'src/app/services/quiz.service';
import { UserService } from 'src/app/services/user.service';

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
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.userSubject.subscribe( user => this.user = user)

    this.userService.getSubjects(this.user.level)
    // .subscribe(subs => this.subs = subs)

    // fetch arabic names
    // this.subs = Object.keys(this.user.subs).map(sub => {
    //   return {'name': sub ,'content': this.user.subs[sub]}
    // }) 
  }

  fetchQuiz(name, content) {
    this.quizService.currentSubject = {name, content}
    this.quizService.fetchQuiz(name, this.user.level)
    this.router.navigate(['quiz'])
  }

}
