
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Module
import { ActivityModule } from '../activity/activity.module';
import { FilesModule } from '../files/files.module';
import { SharedModule } from '../shared/shared.module';

// Services
import { UserService } from './services/user.service';

// Routes
import { UserRoutes } from './user.route';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user.component';
import { ProfileComponent } from './profile/profile.component';
import { TableComponent } from './table/table.component';
import { UserHomeComponent } from './home/home.component';


@NgModule({
  imports: [
    ActivityModule,
    CommonModule,
    FilesModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    UserRoutes
  ],
  declarations: [
    DashboardComponent,
    ProfileComponent,
    TableComponent,
    UserComponent,
    UserHomeComponent,
  ],
  providers: [
    UserService
  ],
  exports: [
    UserComponent
  ]
})
export class UserModule { }
