import { Injectable, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quiz
  constructor(
    @Inject('firebaseProject2') private fb: AngularFirestore,
  ) { }

  fetchQuiz(name) {
    this.quiz = this.fb.collection(name).valueChanges()
  }
}
