import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';

import { CirclePhotoComponent } from './circle-photo/circle-photo.component';
import { HeaderComponent } from './header/header.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CirclePhotoComponent,
    HeaderComponent,
    MobileMenuComponent
  ],
  exports: [
    CirclePhotoComponent,
    HeaderComponent,
    MobileMenuComponent
  ]
})
export class SharedModule { }
