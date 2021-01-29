import { Component, OnInit, ViewChild } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { FormBuilder } from "@angular/forms";
import { EvalService } from 'src/app/services/eval.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz
  currentQuestion = 0
  question; answer; score = 0; total
  disabled = true
  finish: boolean

  constructor(
    private quizService: QuizService,
    public fb: FormBuilder,
    private evalService: EvalService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.quizService.getQuiz('bt-social').valueChanges().subscribe(data=> {
      this.quiz = data.pop()['data']
      this.total = this.quiz.length
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

  finishQuiz() {
    let user = this.userService.getCurrentUser()
    let subject = this.quizService.currentSubject
    this.evalService.sendMarks(user, subject, this.score, this.total)
  }

}
