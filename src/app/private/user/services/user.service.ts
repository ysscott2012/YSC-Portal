import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Router } from '@angular/router';

import { environment } from '../../../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// classes
import { User } from '../../../classes/user';
import { Params } from '../../../classes/params';
import { Preferences } from '../../../classes/preferences';

// Services
import { HttpService } from '../../services/http.service';
import { webconstant } from '../../../classes/webconstant';

@Injectable()
export class UserService {

  /**
   * constants
   */
  private URL_FIND_USERS = environment.API_URL + '/user/find';
  private URL_FIND_USER = environment.API_URL + '/user/findOne';
  private URL_REMOVE_USER = environment.API_URL + '/user/remove';
  private URL_SAVE_USER = environment.API_URL + '/user/save';
  private URL_UPDATE_USERS = environment.API_URL + '/user/update';
  private URL_UPDATE_USER = environment.API_URL + '/user/updateOne';

  /**
   * Contructor.
   * @param http
   */
  constructor(
    private http: HttpService,
    private router: Router
  ) { }

  /**
   * Find one user and update
   * @param conditions (condition matches to the database)
   * @param update ()
   * @param options ()
   */
  findOneAndUpdate(conditions, update, options) {
    const params = {conditions: conditions, update: update, options: options};
    const body = JSON.stringify(params);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.URL_UPDATE_USER, body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  /**
   * Get Current User
   */
  getCurrent(): User {
    let current: User = null;
    const str = localStorage.getItem('current');
    if (str != null && str !== '') {
      current = new User(JSON.parse(str));
    }
    return current;
  }

  /**
   * Get user
   * @param params
   */
  getUser(params) {
    const body = JSON.stringify(params);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.URL_FIND_USER, body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  /**
   * Get user by userID
   * @param id
   */
  getUserByID(id: string) {
    const body = JSON.stringify({'_id' : id});
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.URL_FIND_USER, body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  /**
   * Get users.
   * @param
   */
  getUsers(params: Params) {
    const body = JSON.stringify(params.conditions);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.URL_FIND_USERS, body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  /**
   * check if selected user is current user
   * @param id
   */
  isCurrent(id: String) {
    return id === this.getCurrent().id;
  }

  /**
   * check token
   * @param data
   */
  token(data) {
    if (!data.success && data.activity.toLowerCase() === webconstant.ERROR_TOKEN_EXPIRED) {
      alert('Your logged in session is out, please re-login');
      this.router.navigate(['/auth/login']);
    }
  }

  /**
   * Remove user
   * @param conditions
   */
  remove(conditions) {
    const params = {conditions: conditions};
    const body = JSON.stringify(params);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.URL_REMOVE_USER, body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

}
