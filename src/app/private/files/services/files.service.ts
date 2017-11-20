import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// Import envirnoment variable
import { environment } from '../../../../environments/environment';

// Services
import { HttpService } from '../../services/http.service';

@Injectable()
export class FilesService {

  private URL_UPLOAD_FILE = environment.API_URL + '/file/user/profile/upload';

  /**
  * Contructor.
  * @param http
  */
  constructor(
    private http: HttpService) {
  }

  /**
   * Get file extension
   * @param filename
   */
  getFileExtension(filename) {
    return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename) : undefined;
  }

}
