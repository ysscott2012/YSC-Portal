import { Component, OnInit } from '@angular/core';

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

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.GerUsers();
  }

  GerUsers() {
    this.userService.GetUsers().subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

}
