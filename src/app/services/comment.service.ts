import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// classes
import { Params } from '../classes/params';
import { Comment } from '../classes/comment';

// Services
import { HttpService } from '../services/http.service';

@Injectable()
export class CommentService {

  /**
   * constants
   */
  private URL_SAVE_COMMENT = environment.API_URL + '/comment/save';
  private URL_FIND_COMMENTS = environment.API_URL + '/comment/find';
  private URL_FIND_COMMENTS_BY_ACTIVITY = environment.API_URL + '/comment/findByActivity';
  private URL_FIND_COMMENT = environment.API_URL + '/comment/findOne';

  /**
   * Contructor.
   * @param http
   */
  constructor(
    private http: HttpService
  ) { }

  /**
   * Get comments.
   * @param
   */
  getComments(params) {
    const body = JSON.stringify(params);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.URL_FIND_COMMENTS, body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  /**
   * Get comments by activity.
   * @param params
   */
  getCommentsByActivity(params) {
    const body = JSON.stringify(params);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.URL_FIND_COMMENTS_BY_ACTIVITY, body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  /**
   * save comments
   * @param params
   */
  saveComment(params) {
    const body = JSON.stringify(params);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.URL_SAVE_COMMENT, body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

}
