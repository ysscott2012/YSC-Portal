import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { PageComponent } from './page.component';


const pageRoutes: Routes = [
  {
    path: 'page',
    component: PageComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(pageRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PageRoutes { }


