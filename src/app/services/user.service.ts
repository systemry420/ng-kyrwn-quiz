import { Injectable, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    @Inject('firebaseProject1') private firebaseProject1: AngularFirestore,
  ) { }

  getUsers() {
    return this.firebaseProject1.collection('users').valueChanges()
  }

  getCurrentUser() {
    let user = JSON.parse(localStorage.getItem('userData'))
    return user.id
  }
}
