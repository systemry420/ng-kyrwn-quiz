import { Injectable, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

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
    let date = new Date(2021, 3, 1)
    console.log(date.toString());
    let d = this.constructDate(date)
    console.log(level, sub, d);

    return this.fb.collection('exams').doc(level + '/' + sub + '/' + d)
    .valueChanges()
    // .pipe(
    //     tap((changes:any) => {
    //         // const data = changes.payload.data();
    //         const id = changes.payload.id;
    //         console.log(id);
    //       })
    //     )
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

  getQuiz(level, sub, date) {
    date = this.constructDate(new Date(2021, 3, 1))
    console.log(date);

    return this.fb.collection('exams').doc(level + '/' + sub + '/' + date)
    .valueChanges()
  }
}
