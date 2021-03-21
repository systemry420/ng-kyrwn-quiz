import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface UserToken {
  id: string;
  level: string;
  name: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users
  userSubject = new BehaviorSubject<UserToken>(null)
  usersSubject = new BehaviorSubject<any[]>(null)

  constructor(
    @Inject('fbQuiz') private fb: AngularFirestore,
    private http: HttpClient) {
  }

  getUsers() {
    this.fb.collection('users').valueChanges()
      .subscribe(users => this.usersSubject.next(users))
    return this.fb.collection('users').valueChanges()
  }

  getStudentsByLevel(level) {
    if(level == 'all') {
      return this.getUsers()
    }
    return this.fb
    .collection('users', ref => ref.where('level', '==', level))
    .valueChanges()
  }

  getSubjects(level) {
    return this.fb.collection('subjects').doc(level).valueChanges()
  }


  teacherLogin(email: string, password: string) {
    return this.http.post<any>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCnowTTt-juDiyc-ykbgiQeGSVh9j6SWQw',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    )
    .pipe(catchError(this.handleError))
  }


  login(email: string, password: string) {
    let valid: boolean = false
    this.getUsers().subscribe( data => {
      this.users = data

      for (let i = 0; i < this.users.length; i++) {
        const user = this.users[i];
        if(email == user.id && password == user.password){
          valid = true
          this.handleAuth(
            user.id,
            user.password,
            user['full-name'],
            user.level,
          )
          break;
        }
      }
    })
  }

  addStudent(std, length) {
    let id = std.id + (length + 1)
    this.fb.collection('users').doc(id).set({
      name: std.name,
      level: std.level,
      id: id,
      password: id
    })
  }

  deleteStudent(std) {
    console.log(std);

    return this.fb.collection('users').doc(std.id).delete()
  }

  private handleAuth(id, password, name, level) {
    // const expDate = new Date(new Date().getTime() + expiresIn * 1000)
    const userToken: UserToken = {
      id, password, name, level
    }
    this.userSubject.next(userToken)
    this.userSubject.subscribe(data => console.log(data));

    localStorage.setItem('userData', JSON.stringify(userToken))
  }

  private handleError(errorRes) {
    let errorMessage = 'حدث خطأ في الاتصال'

    if(!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage)
    }
    switch (errorRes.error.error.message) {
      case "EMAIL_NOT_FOUND":
        errorMessage = 'هذا البريد غير متوفر'
        break;
      case "INVALID_PASSWORD":
        errorMessage = 'كلمة المرور خاطئة'
        break;
    }
    return throwError(errorMessage)
  }
}
