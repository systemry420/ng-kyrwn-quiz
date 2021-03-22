import { Injectable, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

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
      answers: answers,
      date: d
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

  getSubmissions(level, subject, stdId) {
    return this.fs.collection('submissions')
    .doc(level).collection(subject).doc('stds').collection(stdId)
    .valueChanges()
  }

  submitMark(level, subject, userId, mark, date) {
    console.log(mark, date);
    this.fs.collection('evaluation')
      .doc(`${level}/${subject}/stds/${userId}/${date}/`)
        .set({
          mark,
          date
        })
  }
}


