import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';

interface UserToken {
  cls: string;
  id: string;
  level: string;
  name: string;
  password: string;
  subs: string[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users
  userSubject = new BehaviorSubject<UserToken>(null)

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe( data => {
      this.users = data
    })
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
          user.class,
          user.password,
          user['full-name'],
          user.level,
          user.subjects
        )
        break;
      }
    }
    return valid
  }

  private handleAuth(id, cls, password, name, level, subs) {
    // const expDate = new Date(new Date().getTime() + expiresIn * 1000)
    const userToken: UserToken = {
      id, cls, password, name, level, subs
    }
    this.userSubject.next(userToken)
    this.userSubject.subscribe(data => console.log(data));

    localStorage.setItem('userData', JSON.stringify(userToken))
  }
}
