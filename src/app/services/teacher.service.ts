import { Inject, Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  examStudents = new BehaviorSubject(null)

  constructor(
    @Inject('fbQuiz') private fb: AngularFirestore,
  ) { }

  getSubjects(cls) {
    console.log(cls);
    // change this shit bt
    return this.fb.collection("subjects").doc(cls)
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.payload.data();
        // const id = changes.payload.id;
        // return { data };
      })
    )
  }

  constructDate(day) {
    let d = (day + new Date().getTime()).toString()
    return d
  }

  addQuiz(day, time, duration, level, subject, questions) {
    let date = this.constructDate(day)
    return this.fb.collection('exams').doc(level + '/'+ subject + '/'+ date)
    .set(
      {
        'day': date,
        'duration': duration,
        'time': time,
        'data': questions
      }
    )
  }

  getStudentsIds(level, subject) {
    console.log(level, subject);
    let students = []

    this.fb.collection('submissions')
    .doc(level)
    .collection(subject)
    .snapshotChanges()
    .forEach((actions:any) => {
      return actions.map(a => {
        const id = a.payload.doc.id;
        students.push(id)
      });
    });

    this.examStudents.next(students)
  }

  // getStudent() {
  //   this.kayrawanFS.collection("bt").doc("bt-accounting/stds/fn1/submission/health-care")
  //   .valueChanges().subscribe(data=>{
  //     console.log(data);

  //   })
  // }

  // // tetsing quiz
  // getQuiz() {
  //   let date = new Date()
  //   let d = ((date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getFullYear()).toString()
  //   this.kayrawanFS.collection("bt3_nursing").doc("health_care/" + d + '/' + d)
  //   .valueChanges().subscribe(data=>{
  //     let date = new Date()
  //     let d = ((date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear()).toString()
  //     console.log(data, d);

  //     Object.keys(data).map((index)=>{
  //       let sub = data[index];
  //       console.log(index);
  //       const name = Object.keys(sub).toString()
  //       const display = Object.values(sub).toString()
  //       console.log(sub);
  //       if(index == d) {
  //         console.log(sub);

  //       }
  //     })
  //   })
  // }

}

// .pipe(
//       map(snapshot => {
//           let items = [];
//           snapshot.docs.map(a => {
//               const data = a.data();
//               const id = a.id;
//               items.push({ id, data })
//           })
//           return items
//       })
//     )
