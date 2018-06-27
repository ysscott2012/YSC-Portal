import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Router } from '@angular/router';

import { environment } from '../../../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// import user class
import { User } from '../../../classes/user';

// Services
import { HttpService } from '../../../private/services/http.service';

@Injectable()
export class AuthenticationService {

  /**
   * Attributes
   */
  public static TOKEN = 'token';
  public static CURRENT_USER = 'current';

  private URL_SIGN_UP = environment.NODE_ENDPOINT + '/auth/signup';
  private URL_LOGIN = environment.NODE_ENDPOINT + '/auth/login';

  /**
   * contructor.
   * @param http
   */
  constructor(
    private http: HttpService,
    private router: Router
  ) { }

  /**
   * register a new user.
   * @param user
   */
  register(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.URL_SIGN_UP, body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  /**
   * login.
   * @param user
   */
  login(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.URL_LOGIN, body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  /**
   * log out
   */
  logout() {
    localStorage.clear();
    // alert('Logout sucessfully');
    this.router.navigate(['/auth/login']);
  }

  /**
   * GetToken.
   */
  getToken() {
    return localStorage.getItem(AuthenticationService.TOKEN);
  }

}
