import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../classes/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  current: User = new User();
  constructor(
    private router: Router
  ) {
    this.current = JSON.parse(localStorage.getItem('current'));
  }

  ngOnInit() {
  }

  Logout() {
    localStorage.clear();
    alert('Logout sucessfully');
    this.router.navigate(['/auth/login']);
  }
}
