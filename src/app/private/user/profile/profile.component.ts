import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { User } from '../../../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  /**
   * Attributes
   */
  activity: String = 'profile';
  fileFolder: String = 'users';
  fileType: String = 'image';
  id: String = '';
  isCurrent: Boolean = false;
  profileForm: FormGroup;
  uploadDirectly: Boolean = true;
  user: User;

  /**
   * constructor
   * @param route
   * @param userService
   */
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) {
    this.id = this.userService.getCurrent().id;
  }

  /**
   * angular lifecycle
   */
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    const params = {
      '_id' : id
    };
    this.isCurrent = this.userService.isCurrent(id);
    this.getUser(params);
  }

  /**
   * get User
   * @param params
   */
  getUser(params) {
    this.userService.getUser(params).subscribe(
      data => {
        this.userService.token(data);
        this.user = new User(data.payload);
      },
      error => console.log(error)
    );
  }


}
