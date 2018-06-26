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
import { User } from '../../classes/user';


@Injectable()
export class ContainerService {

  /**
   * constants
   */
  private URL_FIND_CONTAINERS = environment.API_ENDPOINT + '/container/find';
  private URL_FIND_CONTAINER = environment.API_ENDPOINT + '/container/findOne';
  private URL_REMOVE_CONTAINER = environment.API_ENDPOINT + '/container/remove';
  private URL_SAVE_CONTAINER = environment.API_ENDPOINT + '/container/save';
  private URL_UPDATE_CONTAINERS = environment.API_ENDPOINT + '/container/update';
  private URL_UPDATE_CONTAINER = environment.API_ENDPOINT + '/container/updateOne';

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

  /**
   * find boards by owenr id
   * @param user
   */
  findByReference (referenceID, referenceType) {
    const condition = {
      '$and': [
        {'referenceID' : referenceID},
        {'referenceType': referenceType}
      ]
    };
    const body = JSON.stringify(condition);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.URL_FIND_CONTAINERS, body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  /**
   * create container
   */
  remove(container: GreenTeaContainer) {
    const body = JSON.stringify(container);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.URL_REMOVE_CONTAINER, body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  /**
   * find one and updatw
   * @param condition
   * @param update
   * @param option
   */
  updateOne(condition, update, option) {
    const body = JSON.stringify({condition: condition, update: update, option: option});
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.URL_UPDATE_CONTAINER, body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }


}
