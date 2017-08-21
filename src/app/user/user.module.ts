import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Open Sources
import { DataTableModule, SharedModule, ButtonModule, DropdownModule, CalendarModule } from 'primeng/primeng';

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
    DataTableModule,
    SharedModule,
    ButtonModule,
    DropdownModule,
    CalendarModule
  ],
  declarations: [
    ProfileComponent,
    TableComponent,
    HeaderComponent,
    UserComponent
  ],
  exports: [
    UserComponent
  ]
})
export class UserModule { }
