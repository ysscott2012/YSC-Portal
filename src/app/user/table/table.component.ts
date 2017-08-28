import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import {} from '../../global/global'
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
  title: String = '';
  current: User;

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
    this.current = this.userService.GetCurrent();
    this.GerUsers(params);
  }

  /**
   * Get Users
   * @param params
   */
  GerUsers(params) {
    this.userService.GetUsers(params).subscribe(
      data => { this.users = data.objects; console.log(data) },
      error => console.log(error)
    );
  }

}
