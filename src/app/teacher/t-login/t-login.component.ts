import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-t-login',
  templateUrl: './t-login.component.html',
  styleUrls: ['./t-login.component.css']
})
export class TLoginComponent implements OnInit {
  email; password; error
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.email);

    this.authService.teacherLogin(this.email, this.password)
    .subscribe(response => {
      if(response.registered) {
        this.router.navigate(['tr', 'dashboard'])
      }
    }, error=> {
      this.error = error
    })
  }

}
