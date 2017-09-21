import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../classes/user';
import { UserService } from '../user/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  current: User = null;
  constructor(
    private router: Router,
    private userService: UserService
  ) {
    this.current = this.userService.getCurrent();
  }

  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    alert('Logout sucessfully');
    this.router.navigate(['/auth/login']);
  }
}
