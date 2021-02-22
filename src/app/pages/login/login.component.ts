import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string; password: string
  users

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit() {
    let valid = this.authService.login(this.email, this.password)
    if(valid) {
      this.router.navigate(['home'])
    }
    else {
      console.log('error');

    }
  }

}
