import { Component, OnInit, Directive, Input } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';
import { AuthenticationService } from '../../authentication/services/authentication.service';
import { FilesService } from '../../files/services/files.service';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  @Input() id;
  @Input() activity;
  @Input() uploadDirectly;
  @Input() fileType;
  @Input() fileFolder;
  @Input() title;

  public uploader: FileUploader = new FileUploader({});
  public fileString = {};
  public hasBaseDropZoneOver: Boolean = false;
  public hasAnotherDropZoneOver: Boolean = false;

  constructor(
    public router: Router,
    public filesService: FilesService,
    public authenticationService: AuthenticationService
  ) {

  }

  ngOnInit() {
  }

  ngOnChanges() {

    console.log('id: ' + this.id);
    console.log('activity: ' + this.activity);
    console.log('uploadDirectly: ' + this.uploadDirectly);
    console.log('fileType: ' + this.fileType);
    console.log('fileFolder: ' + this.fileFolder);

    const url = this.getUploadAPI();

    this.uploader.setOptions({
      url: url,
      authToken: this.fileFolder + '/' + this.id + ' ' + this.authenticationService.getToken(),
    });

    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = environment.FILE_CREDENTIALS;
      const extension = this.filesService.getFileExtension(file.file.name);
      const temp = this.activity + '.' + extension;
      if (this.fileString.hasOwnProperty(temp)) {
        file.file.name = this.activity + '_' + this.fileString[temp] + '.' + extension;
        this.fileString[temp]++;
      } else {
        file.file.name = this.activity + '.' + extension;
        this.fileString[temp] = 1;
      }
    };

    this.uploader.onAfterAddingAll = (files) => {
      if (this.uploadDirectly) {
        const c = confirm('Upload ' + files.length + ' files?');
        if (c) {
          this.uploader.uploadAll();
        } else {
          this.uploader.clearQueue();
        }
      }
    };

    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      var data = JSON.parse(response);

      if (data.success) {
        localStorage.setItem('current', JSON.stringify(data.payload));
        location.reload();
      }
    };
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  public getUploadAPI() {
    return environment.FILE_UPLOAD_API;
  }


}




