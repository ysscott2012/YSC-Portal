import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { AppComponent } from './app.component';
import { AdminComponent } from './private/admin/admin.component';
import { AuthenticationComponent } from './public/authentication/authentication.component'
import { UserComponent } from './private/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent},
  { path: 'auth', component: AuthenticationComponent},
  // { path: 'home', component: AppComponent},
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
