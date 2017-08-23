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
      { path: 'approved', component: TableComponent, data: { title: 'Approved Users', isApproved: true, isRejected: false} },
      { path: 'rejected', component: TableComponent, data: { title: 'Rejected Users', isApproved: false, isRejected: true} },
      { path: 'pending', component: TableComponent, data: { title: 'Pending Users', isApproved: false, isRejected: false} },
      { path: 'table', component: TableComponent, data: {title: 'All Users'}},
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


