import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilesModule } from '../files/files.module';
import { SharedModule } from '../shared/shared.module';

// Services
import { UserService } from './services/user.service';

// Routes
import { UserRoutes } from './user.route';

// Components
import { UserComponent } from './user.component';
import { ProfileComponent } from './profile/profile.component';
import { TableComponent } from './table/table.component';


@NgModule({
  imports: [
    CommonModule,
    UserRoutes,
    FormsModule,
    ReactiveFormsModule,
    FilesModule,
    SharedModule
  ],
  declarations: [
    ProfileComponent,
    TableComponent,
    UserComponent,
  ],
  providers: [
    UserService
  ],
  exports: [
    UserComponent
  ]
})
export class UserModule { }
