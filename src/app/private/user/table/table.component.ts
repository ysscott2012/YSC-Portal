import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// services
import { UserService } from '../services/user.service';

// classes
import { User } from '../../../classes/user';
import { Params } from '../../../classes/params';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  /**
   * Variables
   */
  users: User[] = [];
  current: User = new User();
  title: String = '';

  /**
   * constructor
   * @param route
   * @param userService
   */
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  /**
   * lifecycle
   */
  ngOnInit() {
    this.title = this.route.snapshot.data['title'];
    this.current = this.userService.getCurrent();
    this.getUsers();
  }

  /**
   * Get Users
   * @param params
   */
  getUsers() {
    const params: Params = new Params();

    if (this.route.snapshot.data.hasOwnProperty('isApproved') &&
       this.route.snapshot.data.hasOwnProperty('isRejected')) {

      params.conditions = {
        isApproved: this.route.snapshot.data['isApproved'],
        isRejected: this.route.snapshot.data['isRejected']
      };

      this.userService.getUsers(params).subscribe(
        data => {
          data.payload.forEach(element => {
            this.users.push(new User(element));
          });
        },
        error => console.log(error)
      );
    }
  }

  /**
   * Approve user
   * @param user selected user
   */
  approve(user: User) {
    const params: Params = new Params();
    params.conditions = {email: user.email};
    params.update = {isApproved: true, isRejected: false};
    params.options = null;
    this.updateUser(params);
  }

  /**
   * Reject User
   * @param user selected user
   */
  reject(user: User) {
    const params: Params = new Params();
    params.conditions = {email: user.email};
    params.update = {isApproved: false, isRejected: true};
    params.options = null;
    this.updateUser(params);
  }

  /**
   * update user
   * @param params
   */
  updateUser(params: Params) {
    this.userService.findOneAndUpdate(
      params.conditions,
      params.update,
      params.options
    ).subscribe(
      data => {
        this.users = this.users.filter(d => d.email !== data.payload.email);
      },
      error => console.log(error)
    );
  }

}
