import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// classes
import { User } from '../../classes/user';

// Services
import { HttpService } from '../../services/http.service';

@Injectable()
export class UserService {

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
    private http: HttpService
  ) { }

  /**
   * Ger Users.
   * @param
   */
  GetUsers(params) {
    const body = JSON.stringify(params);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.URL_FIND_USERS, body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  /**
   * Get Current User
   */
  GetCurrent(): User {
    let current: User = null;
    const str = localStorage.getItem('current');
    if (str != null && str !== '') {
      current = JSON.parse(str);
    }
    return current;
  }

  FindOneAndUpdate(conditions, update, options) {
    const params = {conditions: conditions, update: update, options: options};
    const body = JSON.stringify(params);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.URL_UPDATE_USER, body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

}
