import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AuthenticationComponent } from './authentication/authentication.component'
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent},
  { path: 'auth', component: AuthenticationComponent},
  { path: 'home', component: AppComponent},
  // { path: 'user', component: UserComponent}
  //{ path: '**', component: NotFound }, //always last
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutes {};
