import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// Services
import { HttpService } from './http.service';

@Injectable()
export class ObjectService {
 /**
   * constants
   */
  private URL_FIND_OBJECTS = environment.API_URL + '/object/find';
  private URL_FIND_OBJECT = environment.API_URL + '/object/findOne';
  private URL_REMOVE_OBJECT = environment.API_URL + '/object/remove';
  private URL_SAVE_OBJECT = environment.API_URL + '/object/save';
  private URL_UPDATE_OBJECTS = environment.API_URL + '/object/update';
  private URL_UPDATE_OBJECT = environment.API_URL + '/object/updateOne';

  /**
   * Contructor.
   * @param http
   */
  constructor(
    private http: HttpService
  ) { }



}
