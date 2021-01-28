import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz
  currentQuestion = 0
  question; answer = 1
  constructor(
    private quizService: QuizService,
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.quizService.getQuiz('bt-social').valueChanges().subscribe(data=> {
      this.quiz = data.pop()
      console.log(this.quiz);
      this.loadQuestion(this.quiz['data'])
    })

  }

  loadQuestion(quiz){
    console.log(quiz[0]);
    this.question = quiz.pop()['ques']
    console.log(this.question['ques']);
  }

  onSubmit() {
    // console.log(this.quizForm.value)
  }

  changeAnswer(ev) {
    console.log(ev.target.value);

  }

}
