import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string; password: string
  users

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe( data => {
      this.users = data
    })
  }

  onSubmit() {
    console.log(this.email, this.password);
  }

}
