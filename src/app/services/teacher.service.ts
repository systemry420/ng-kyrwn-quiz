import { Inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

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


  addQuiz(day, time, duration, level, subject, questions) {
    let date = new Date()
    let d = ((date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getFullYear() + date.getTime()).toString()

    return this.fb.collection('exams').doc(level + '/'+ subject + '/'+ day)
    .set(
      {
        'day': day,
        'duration': duration,
        'time': time,
        'data': questions
      }
    )
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
