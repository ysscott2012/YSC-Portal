import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { User } from '../../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  profileForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    const params = {
      '_id' : id
    };
    this.getUser(params);
  }

  /**
   * get User
   * @param params
   */
  getUser(params) {
    this.userService.getUser(params).subscribe(
      data => {
        this.user = new User(data.payload);
        console.log(this.user);
      },
      error => console.log(error)
    );
  }
}
