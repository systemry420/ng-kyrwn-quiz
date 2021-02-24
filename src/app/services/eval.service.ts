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
    let d = new Date()
    this.fs.collection('submissions')
    .doc(level + '/' + subject.en + '/stds/' + userId + '/' + d)
    .set({
      answers
    })
    .then(res => {
      console.log(res);

    })
  }
}
