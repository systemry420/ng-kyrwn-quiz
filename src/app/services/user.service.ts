import { Injectable, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    @Inject('firebaseProject1') private fb: AngularFirestore,
  ) { }

  getUsers() {
    return this.fb.collection('users').valueChanges()
  }

  getCurrentUser() {
    let user = JSON.parse(localStorage.getItem('userData'))
    return user.id
  }

  getSubjects(level) {
    this.fb.collection('bt').doc(level).valueChanges()
    .subscribe(d =>{
      console.log(d)
    })

  }
}
