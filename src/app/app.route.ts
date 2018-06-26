import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { AdminComponent } from './private/admin/admin.component';
import { AuthenticationComponent } from './public/authentication/authentication.component';
import { AlgorithmComponent } from './private/algorithm/algorithm.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent},
  { path: 'auth', component: AuthenticationComponent},
  { path: 'algorithm', component: AlgorithmComponent}
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
