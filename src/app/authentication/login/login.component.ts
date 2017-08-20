import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

// import services
import { AuthenticationService } from '../services/authentication.service';

// import calsses
import { User } from '../../classes/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;


  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  login() {
    const user = new User();
    user.password = this.loginForm.value.password;
    user.email = this.loginForm.value.email;
    this.authenticationService.login(user)
      .subscribe(
      data => {
        alert(data.message);
        if (data.success) {
          this.router.navigate(['/page']);
        }
      },
      error => {
        alert(error.message);
      }
    );
  }

}
