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
    let date = new Date(2021, 1, 19)
    console.log(date.toString());
    let d = this.constructDate(date)
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

  getQuiz(name) {
    // return this.quiz
    return this.fb.collection(name)
  }
}
