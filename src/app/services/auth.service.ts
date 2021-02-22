import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserService } from './user.service';

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

  constructor(
    private userService: UserService,
    private http: HttpClient) {
    this.userService.getUsers().subscribe( data => {
      this.users = data
    })
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
    // console.log(this.users);

    for (let i = 0; i < this.users.length; i++) {
      const user = this.users[i];
      // console.log(user.id, user.password, email, password);
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
    return valid
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
