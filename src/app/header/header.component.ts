import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { User } from '../classes/user';
import { Navigation } from "../classes/navigation";
import { UserService } from '../user/services/user.service';
import { AuthenticationService } from "../authentication/services/authentication.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  /**
   * Attributes
   */
  public current: User = null;
  public navigation: Navigation = null;


  /**
   * constructor
   * @param router
   * @param userService
   */
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {
    this.current = this.userService.getCurrent();
    if (this.current) {
      this.navigation = this.current.getHeaderDropdown();
    }

    this.router.events.subscribe((event) =>{
      if(event instanceof NavigationEnd) {
        if (event.url === '/' && event.urlAfterRedirects === '/auth/login') {
          this.authenticationService.logout();
          this.current = null;
        }
      }
      this.closeMenu();
    })

  }

  /**
   * lifecycle
   */
  ngOnInit() {

  }

  /**
   * force to close menu
   */
  closeMenu() {
    var element = document.getElementsByClassName('main-page');
    if (element[0].classList.contains('active')) {
      element[0].classList.remove('active');
    }
  }

  /**
   * toggle mobile menu
   */
  toggleMenu() {
    var element = document.getElementsByClassName('main-page');
    if (element[0].classList.contains('active')) {
      element[0].classList.remove('active');
    } else {
      element[0].classList.add('active');
    }
  }
}
