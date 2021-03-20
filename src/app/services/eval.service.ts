import { Injectable, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EvalService {

  constructor(
    @Inject('fbQuiz') private fs: AngularFirestore,
  ) { }

  submitAnswers(level, userId, subject, answers) {
    console.log(answers);
    let d = this.constructDate(new Date())
    this.fs.collection('submissions')
    .doc(level + '/' + subject.en + '/stds/' + userId + '/' + d)
    .set({
      answers
    })
    .then(res => {
      console.log(res);

    })
  }

  constructDate(date) {
    let m = date.getMonth() + 1
    m = m < 10 ? '0' + m : m
    let d = date.getDate()
    d = d < 10 ? '0' + d : d

    let examDay = (date.getFullYear() +
     '-' + m +
     '-' + d
     ).toString()

     return examDay

  }
}
