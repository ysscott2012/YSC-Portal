import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// classes
import { Params } from '../../classes/params';

// Services
import { HttpService } from '../../services/http.service';

@Injectable()
export class ActivityService {

  /**
   * constants
   */
  private URL_SAVE_ACTIVITY = environment.API_URL + '/activity/save';
  private URL_FIND_ACTIVITIES = environment.API_URL + '/activity/find';
  private URL_FIND_ACTIVITIES_BY_OWNER = environment.API_URL + '/activity/findByOwner';

  /**
   * Contructor.
   * @param http
   */
  constructor(
    private http: HttpService
  ) { }

  /**
   * Get activities.
   * @param
   */
  getActivities(params: Params) {
    const body = JSON.stringify(params.filter);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.URL_FIND_ACTIVITIES, body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  /**
   * Get activities by owner
   * @param params
   */
  getActivitiesByOwner(params: Params) {
    const body = JSON.stringify(params.filter);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.URL_FIND_ACTIVITIES_BY_OWNER, body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  /**
   * Save a new record
   * @param conditions
   */
  save(params: Params) {
    const body = JSON.stringify(params.conditions);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.URL_SAVE_ACTIVITY, body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

}
