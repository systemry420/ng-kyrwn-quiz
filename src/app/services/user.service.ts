import { Injectable, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    @Inject('fbQuiz') private fb: AngularFirestore,
  ) { }

  getUsers() {
    return this.fb.collection('users').valueChanges()
  }

  // getCurrentUser() {
  //   let user = JSON.parse(localStorage.getItem('userData'))
  //   return user.id
  // }

  getSubjects(level) {
    return this.fb.collection('subjects').doc(level).valueChanges()


  }
}
