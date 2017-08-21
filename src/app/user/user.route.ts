import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { TableComponent } from './table/table.component';
import { ProfileComponent } from './profile/profile.component';

const route: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: 'table', component: TableComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(route)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutes { }


