import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesService } from './services/files.service';
import { UploadComponent } from './upload/upload.component';

import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    FileUploadModule
  ],
  declarations: [
    UploadComponent
  ],
  providers: [
    FilesService
  ],
  exports: [
    UploadComponent
  ]
})

export class FilesModule { }
