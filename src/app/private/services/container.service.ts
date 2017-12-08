import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// Services
import { HttpService } from './http.service';

// Classes
import { GreenTeaContainer } from '../../classes/GreenTeaContainer';

@Injectable()
export class ContainerService {

  /**
   * constants
   */
  private URL_FIND_CONTAINERS = environment.API_URL + '/container/find';
  private URL_FIND_CONTAINER = environment.API_URL + '/container/findOne';
  private URL_REMOVE_CONTAINER = environment.API_URL + '/container/remove';
  private URL_SAVE_CONTAINER = environment.API_URL + '/container/save';
  private URL_UPDATE_CONTAINERS = environment.API_URL + '/container/update';
  private URL_UPDATE_CONTAINER = environment.API_URL + '/container/updateOne';

  /**
   * Contructor.
   * @param http
   */
  constructor(
    private http: HttpService
  ) { }

  /**
   * create container
   */
  save(container: GreenTeaContainer) {
    const body = JSON.stringify(container);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.URL_SAVE_CONTAINER, body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }



}
