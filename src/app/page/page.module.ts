import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HeaderComponent } from './header/header.component';
import { PageComponent } from './page.component';

// Route
import { PageRoutes } from './page.route';

@NgModule({
  imports: [
    CommonModule,
    PageRoutes
  ],
  declarations: [
    HeaderComponent,
    PageComponent
  ],
  exports: [
    PageComponent
  ]
})
export class PageModule { }
