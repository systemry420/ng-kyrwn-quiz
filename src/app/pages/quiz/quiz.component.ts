import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz
  constructor(
    private quizService: QuizService
  ) { }

  ngOnInit(): void {
    this.quizService.getQuiz().valueChanges().subscribe(data=> {
      this.quiz = data
      console.log(this.quiz);
    })
  }

}
