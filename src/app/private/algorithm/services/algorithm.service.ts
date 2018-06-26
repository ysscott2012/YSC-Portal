import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Router} from '@angular/router';
import {HttpService} from '../../services/http.service';
import {Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AlgorithmService {

  private URL_FIND_LEETCODE = environment.API_ENDPOINT + '/v1/algorithms/leetcode';

  constructor(
    private http: HttpService,
    private router: Router
  ) { }


  getLeetcode() {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.get(this.URL_FIND_LEETCODE, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

}
