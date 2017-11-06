import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { TableComponent } from './table/table.component';
import { ProfileComponent } from './profile/profile.component';
import { UserHomeComponent } from './home/home.component';

const route: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: '', component: UserHomeComponent, data: {} },
      { path: 'approved', component: TableComponent, data: { title: 'Approved', isApproved: true, isRejected: false} },
      { path: 'rejected', component: TableComponent, data: { title: 'Rejected', isApproved: false, isRejected: true} },
      { path: 'pending', component: TableComponent, data: { title: 'Pending', isApproved: false, isRejected: false} },
      { path: 'table', component: TableComponent, data: {title: 'All'}},
      { path: 'profile/:id', component: ProfileComponent }
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


