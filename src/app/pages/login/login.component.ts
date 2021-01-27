import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string; password: string
  users

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe( data => {
      this.users = data
      console.log(data);

    })
  }

  onSubmit() {
    this.users.forEach(user => {
      if(this.email == user.id && this.password == user.password){
        this.router.navigate(['dashboard'])
      }
      else {
        console.log('error');
      }
    });
  }

}
