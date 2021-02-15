import { Injectable, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  public currentSubject
  quiz
  constructor(
    @Inject('firebaseProject1') private fb: AngularFirestore,
  ) { }

  fetchQuiz(sub, level) {
    // this.quiz = this.fb.collection('exams').doc(level + '/' + sub)
    let date = new Date('2021-02-28')
    let d = (date.getFullYear() + '-0' + (date.getMonth()+1) + '-' + date.getDate()).toString()
    console.log(d);

    this.fb.collection('exams').doc(level + '/' + sub + '/' + d)
    .snapshotChanges()
    .pipe(
      map(changes => {
        const data = changes.payload.data();
        const id = changes.payload.id;
        console.log(id, data);

      })
    )
  }

  getQuiz(name) {
    // return this.quiz
    return this.fb.collection(name)
  }
}
