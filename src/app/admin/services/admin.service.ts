import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// classes
import { User } from '../../classes/user';
import { Params } from '../../classes/params';

// Services
import { HttpService } from '../../services/http.service';

@Injectable()
export class AdminService {

  /**
   * constants
   */
  private URL_GET_COLLECTION_LIST = environment.API_URL + '/admin/collections';

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
  GetCollectionList() {
    const body = JSON.stringify({});
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.URL_GET_COLLECTION_LIST, body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }
}
