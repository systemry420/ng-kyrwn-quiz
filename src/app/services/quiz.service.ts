import { Injectable, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  public currentSubject = new BehaviorSubject<any>(null);
  public currentQuiz = new BehaviorSubject<any>(null);
  quiz
  constructor(
    @Inject('fbQuiz') private fb: AngularFirestore,
  ) { }

  fetchQuiz(sub, level) {
    let date = new Date()
    let d = (date.getFullYear() + '-0' + (date.getMonth()+1) + '-' + date.getDate()).toString()
    console.log(d);

    return this.fb.collection('exams').doc(level + '/' + sub + '/' + d)
    .valueChanges()
    // .pipe(
    //   map(changes => {
    //     const data = changes.payload.data();
    //     const id = changes.payload.id;
    //     console.log(id, data);

    //   })
    // )
  }

  getQuiz(name) {
    // return this.quiz
    return this.fb.collection(name)
  }
}
