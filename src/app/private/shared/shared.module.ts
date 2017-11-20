import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CirclePhotoComponent } from './circle-photo/circle-photo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CirclePhotoComponent
  ],
  exports: [
    CirclePhotoComponent
  ]
})
export class SharedModule { }
