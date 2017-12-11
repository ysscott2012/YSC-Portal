import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../../classes/user';
import { Navigation } from '../../../classes/navigation';
import { UserService } from '../../user/services/user.service';
import { AuthenticationService } from '../../../public/authentication/services/authentication.service';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css']
})
export class MobileMenuComponent implements OnInit {

  /**
   * Attributes
   */
  public current: User;
  public navigation: Navigation;

  /**
   * constructor
   * @param authenticationService
   * @param userService
   * @param router
   */
  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private router: Router
  ) {
    this.current = this.userService.getCurrent();

    if (this.current) {
      this.navigation = this.current.getMobileNavigation();
    }

  }

  /**
   * lifecycle
   */
  ngOnInit() {
  }

  /**
   * toggle mobile menu
   */
  toggleMenu() {
    var element = document.getElementsByClassName('main-page');
    if (element[0]) {
      if (element[0].classList.contains('active')) {
        element[0].classList.remove('active');
      } else {
        element[0].classList.add('active');
      }
    }
  }

}
