import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../../../classes/user';
import { UserService } from '../services/user.service';
import { Navigation } from '../../../classes/navigation';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  /**
   * Attributes
   */
  selectedUser: User;
  navigation: Navigation;

  /**
   * constructor
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  /**
   * lifecycle
   */
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.userService.getUserByID(id).subscribe(
        data => {
          this.userService.token(data);
          this.selectedUser = new User(data.user);
          this.GetDashboard(this.selectedUser);
        },
        error => console.log(error)
      );
    } else {
      this.selectedUser = this.userService.getCurrent();
      this.GetDashboard(this.selectedUser);
    }
  }

  /**
   * Get dashboard link
   */
  GetDashboard(user: User) {
    this.navigation = new Navigation(user, 'dashboard');
  }

  /**
   * navigate to the link;
   * @param url
   */
  directTo(url: String) {
    this.router.navigate([url]);
  }
}
