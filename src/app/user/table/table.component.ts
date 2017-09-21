import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// services
import { UserService } from '../services/user.service';

// classes
import { User } from '../../classes/user';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  users: User[];
  current: User;
  title: String = '';
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    let params = {};
    if (this.route.snapshot.data.hasOwnProperty('isApproved') && this.route.snapshot.data.hasOwnProperty('isRejected')) {
      params = {
        isApproved: this.route.snapshot.data['isApproved'],
        isRejected: this.route.snapshot.data['isRejected']
      };
    }
    this.title = this.route.snapshot.data['title'];
    this.current = this.userService.getCurrent();
    this.gerUsers(params);
  }

  /**
   * Get Users
   * @param params
   */
  gerUsers(params) {
    this.userService.GetUsers(params).subscribe(
      data => {
        this.users = [];
        data.payload.forEach(element => {
          this.users.push(new User(element));
        });
        console.log(data);
      },
      error => console.log(error)
    );
  }

  /**
   * Approve user
   * @param user selected user
   */
  approve(user: User) {
    this.userService.findOneAndUpdate({email: user.email}, {isApproved: true, isRejected: false}, null).subscribe(
      data => { this.users = this.users.filter(d => d.email !== data.payload.email); },
      error => console.log(error)
    );
  }

  /**
   * Reject User
   * @param user selected user
   */
  reject(user: User) {
    this.userService.findOneAndUpdate({email: user.email}, {isApproved: false, isRejected: true}, null).subscribe(
      data => { this.users = this.users.filter(d => d.email !== data.payload.email); },
      error => console.log(error)
    );
  }

}
