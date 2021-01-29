import { Component, OnInit, ViewChild } from '@angular/core';
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
  question; answer; score = 0
  disabled = true
  finish: boolean

  // @ViewChild('a') elA
  // @ViewChild('b') elB
  // @ViewChild('c') elC

  constructor(
    private quizService: QuizService,
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.quizService.getQuiz('bt-social').valueChanges().subscribe(data=> {
      this.quiz = data.pop()['data']
      console.log(this.quiz);
      this.loadQuestion()
    })
  }

  loadQuestion(){
    this.disabled = true
    if(this.quiz.length == 0) {
      this.finish = true
    }
    else {
      this.question = this.quiz.pop()['ques']
    }
  }

  onSubmit() {
    if(this.answer == this.question[4]) {
      this.score++
    }
    this.loadQuestion()
    console.log(this.score);

    this.deselect()
  }

  deselect() {
    const radios = document.querySelectorAll('input')
    radios.forEach((radio: HTMLInputElement) => {
      radio.checked = false
    })
  }

  changeAnswer(ev) {
    this.answer = ev.target.value
    this.disabled = false
  }

}
