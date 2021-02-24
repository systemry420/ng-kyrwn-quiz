import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string; password: string
  users; validUser = false

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let valid = this.authService.login(this.email, this.password)
    this.authService.userSubject.subscribe(user => {
      if(user) {
        this.router.navigate(['st/home'])
      }
      else {
        console.log('error');

      }
    })
  }

}
