import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { DatabaseMenuComponent } from './database-menu/database-menu.component';
import { CollectionComponent } from './collection/collection.component';

import { AdminRoutes } from './admin.route';

import { AdminService } from './services/admin.service';
@NgModule({
  imports: [
    CommonModule,
    AdminRoutes
  ],
  declarations: [
    AdminComponent,
    DatabaseMenuComponent,
    CollectionComponent
  ],
  providers: [
    AdminService
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
