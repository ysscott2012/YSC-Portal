import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { TableComponent } from './table/table.component';
import { UserComponent } from './user.component';
import { UserHomeComponent } from './home/home.component';

const route: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: '',
        redirectTo: '/user/dashboard',
        pathMatch: 'full'
      },
      // { path: '', component: UserHomeComponent, data: {} },
      { path: 'approved', component: TableComponent, data: { title: 'Approved', isApproved: true, isRejected: false} },
      { path: 'rejected', component: TableComponent, data: { title: 'Rejected', isApproved: false, isRejected: true} },
      { path: 'pending', component: TableComponent, data: { title: 'Pending', isApproved: false, isRejected: false} },
      { path: 'table', component: TableComponent, data: {title: 'All'}},
      { path: 'activity', component: UserHomeComponent },
      // { path: 'activity/:id', component: UserHomeComponent },
      { path: 'profile/:id', component: ProfileComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'dashboard/:id', component: DashboardComponent }
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


