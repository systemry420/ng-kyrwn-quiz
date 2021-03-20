import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  step1 = false; subsNames
  level
  subject
  duration
  day
  time
  currentExam = []
  questionType;
  outputs = []

  constructor(
    private router: Router,
    private teacherService: TeacherService,
  ) { }

  log() {
    console.log(this.day);

  }

  ngOnInit(): void {
  }

  next() {
    if(this.level && this.subject){
      this.step1 = true;
    }
  }

  changeType(event) {
    if(event.target.value == 'mcq') {
      this.questionType = 'mcq'
    }
    else {
      this.questionType = 'qa'
    }
  }

  addQuestion(data) {
    let question
    if(this.questionType == 'mcq') {
      question = {type: 'mcq', data}
    }
    else if(this.questionType == 'qa') {
      question = {type: 'qa', data}
    }
    this.currentExam.push(question)
    this.outputs.push(question)
  }

  removeQuestion(i) {
    this.currentExam.splice(i, 1)
    this.outputs.splice(i, 1)
  }

  submitQuiz() {
    this.teacherService.addQuiz(
      this.day,
      this.time,
      this.duration,
      this.level,
      this.subject,
      this.currentExam
    )
    // .then(()=>{
    //   console.log("added quiz")
    // })
    // .catch(error => {
    //   console.log(error);
    // })
  }

  getSubjects(ev) {
    this.teacherService.getSubjects(ev.target.value)
    .subscribe(data=>{
      this.subsNames = Object.keys(data).map((index)=>{
        let sub = data[index];
        const name = Object.keys(sub).toString()
        const display = Object.values(sub).toString()
        return {'key': name, 'value': display}
      });
      console.log(this.subsNames);
    })
  }

}
