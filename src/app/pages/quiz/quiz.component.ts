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
  question; answer; score = 0; total; counter
  disabled = true
  finish: boolean
  subject; time; end; data
  minutes = 0; seconds = 0

  constructor(
    private quizService: QuizService,
    public fb: FormBuilder,
    private evalService: EvalService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    // this.subject = this.quizService.currentSubject
    // this.quizService
    // .getQuiz(this.subject.name)
    // .valueChanges().subscribe(data=> {
    //   this.data = data.pop()
    // })
  }

  startQuiz() {
    console.log('shit');

    this.quizService.fetchQuiz('health-care', 'bt1-nursing')
    // this.quiz = this.data['data']
    // this.total = this.quiz.length
    // this.counter = this.quiz.length + 1
    // this.startTimer(1)
    // this.loadQuestion()
  }

  startTimer(min) {
    let start = new Date().getTime()
    let b = min * 60 * 1000
    let time = setInterval(()=>{
      if(b == 0) {
        clearInterval(time)
        this.finish = true
      }
      let end = new Date(start +(b-=1000)).getTime()
      let diff = end - start
      let totalSec = Math.floor(diff / 1000)
      let mins = Math.floor(totalSec % 3600 / 60)
      let secs = totalSec % 60
      this.minutes = mins
      this.seconds = secs
      // console.log(diff, totalSec, mins, secs);
    }, 1000)
  }

  loadQuestion(){
    this.disabled = true
    if(this.quiz.length == 0) {
      this.finish = true
    }
    else {
      this.question = this.quiz.pop()['ques']
    }

    this.counter--
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
    let subject = this.quizService.currentSubject.name
    this.evalService.sendMarks(user, subject, this.score, this.total)
  }

}
