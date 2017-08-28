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

  // HTTP URL
  private URL_GET_USERS = environment.API_URL + '/user/filter';

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
    return this.http.post(this.URL_GET_USERS, body, { headers: headers })
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

}
