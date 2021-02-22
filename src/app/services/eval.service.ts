import { Injectable, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EvalService {

  constructor(
    @Inject('fbQuiz') private fs: AngularFirestore,
  ) { }

  sendMarks(user, subject, mark, total) {
    // console.log(user, subject, mark, total);

    // return new Promise<any>((resolve, reject) => {
    //   this.fs.collection('eval').doc('user1')
    //   .update({
    //     'subjects': {
    //       'name': subject, 'mark': mark, 'total': total
    //     }
    //   }).then(res => {
    //     resolve(res)
    //   }, err => reject(err))
    // })
  }
}
