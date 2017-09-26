import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// classes
import { User } from '../classes/user';

// Services
import { HttpService } from '../services/http.service';

@Injectable()
export class SharedService {

  // This Shared Service is to cache data.

  /**
   * Contructor.
   * @param http
   */
  constructor(
    private http: HttpService
  ) { }

}
