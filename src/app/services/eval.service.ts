import { Injectable, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EvalService {

  constructor(
    @Inject('firebaseProject1') private fs: AngularFirestore,
  ) { }

  sendMarks(user, subject, mark, total) {
    console.log(user, subject, mark, total);
    this.fs.collection('eval').doc('user1')
      .update({
        'subjects': {
          'name': subject, 'mark': mark, 'total': total
        }
      })
  }
}
