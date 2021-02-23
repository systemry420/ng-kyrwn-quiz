import { Component, OnInit, ViewChild } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { EvalService } from 'src/app/services/eval.service';
import { firebaseData } from './../../../assets/data-model'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz
  quizForm: FormGroup
  currentQuestion = 0
  question; answer; score = 0; total; counter
  disabled = true
  finish: boolean
  subject; time; end; data
  minutes = 0; seconds = 0
  quizInfo; quizData
  constructor(
    private quizService: QuizService,
    public fb: FormBuilder,
    private evalService: EvalService,
  ) { }

  ngOnInit(): void {
    this.quizService.currentSubject.subscribe(sub => {
      this.subject = sub
    })

    // this.quizService.currentQuiz.subscribe(quiz => {
    //   this.quizInfo = {
    //     'day': quiz.day,
    //     'time': quiz.time,
    //     'duration': quiz.duration,
    //   }
    //   this.quizData = quiz.data
    // })

    this.quizInfo = firebaseData.exams

    this.quizData = this.quizInfo.questions

  }



  startQuiz() {
    console.log(this.quizData);

    // this.quizService.currentQuiz.subscribe(data => {
    //   this.quizData = data.data
    //   console.log(data);

    // })
    // this.startTimer(1)
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

  onSubmit(form) {
    console.log(form.value);

  }

  finishQuiz() {
    // let user = this.userService.getCurrentUser()
    // let subject = this.quizService.currentSubject.name
    // this.evalService.sendMarks(user, subject, this.score, this.total)
  }

}
