import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// import services
import { AuthenticationService } from '../services/authentication.service';

// import calsses
import { User } from '../../classes/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  public user = new User();


  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {

    this.registerForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }


  // register a new user
  register() {

    this.user.firstName = this.registerForm.value.firstName;
    this.user.lastName = this.registerForm.value.lastName;
    this.user.password = this.registerForm.value.password;
    this.user.email = this.registerForm.value.email;
    this.authenticationService.register(this.user)
      .subscribe(
      data => {
        alert(data.message);
        console.log(data);
      },
      error => {
        alert(error.message);
      }
    );
  }

}
