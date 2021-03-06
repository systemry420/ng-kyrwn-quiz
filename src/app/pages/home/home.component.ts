import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user
  subjects
  quiz
  constructor(
    private quizService: QuizService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.authService.userSubject.subscribe( user => this.user = user)
    this.user = {
      id: "fn1",
      password: "fn1",
      name: "fatema naser",
      level: "bt1-nursing",
    }


    this.authService.getSubjects(this.user.level)
    .pipe(map((data:any)=>{
      for(const key in data) {
        console.log(data[key]);
        let arr = Object.keys(data[key]).map(sub=>{
          return {'en': sub, 'ar': data[key][sub]}
        })
        return arr
      }
    }))
    .subscribe(subjects => {
      this.subjects = subjects
      console.log(subjects);
    })
  }

  fetchQuiz(ar, en) {
    this.quizService.currentSubject.next({ar, en})
    this.quizService.fetchQuiz(en, this.user.level)
    .subscribe(quiz =>{
      if(quiz) {
        this.quizService.currentQuiz.next(quiz)
        this.router.navigate(['st/quiz'])
      }
    },
      () => {
        console.log('no exam');
      }
    )
  }

}
