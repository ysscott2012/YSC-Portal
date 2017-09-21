import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Open Sources
// import { DataTableModule, SharedModule, ButtonModule, DropdownModule, CalendarModule } from 'primeng/primeng';

// Services
import { UserService } from './services/user.service';

// Routes
import { UserRoutes } from './user.route';

// Components
import { UserComponent } from './user.component';
import { ProfileComponent } from './profile/profile.component';
import { TableComponent } from './table/table.component';
import { HeaderComponent } from '../header/header.component';


@NgModule({
  imports: [
    CommonModule,
    UserRoutes,
    FormsModule,
    ReactiveFormsModule
    // DataTableModule,
    // SharedModule,
    // ButtonModule,
    // DropdownModule,
    // CalendarModule
  ],
  declarations: [
    ProfileComponent,
    TableComponent,
    HeaderComponent,
    UserComponent
  ],
  providers: [
    UserService
  ],
  exports: [
    UserComponent
  ]
})
export class UserModule { }
