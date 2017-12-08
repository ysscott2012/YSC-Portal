import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Module
import { SharedModule } from '../shared/shared.module';

// Services
// import { KanbanService } from './services/kanban.service';

// Routes
import { KanbanRoutes } from './kanban.route';

// Components
import { KanbanComponent } from './kanban.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  imports: [
    CommonModule,
    KanbanRoutes,
    SharedModule
  ],
  declarations: [
    KanbanComponent,
    BoardComponent
  ],
  // providers: [
  //   KanbanService
  // ],
  exports: [
    KanbanComponent
  ]
})
export class KanbanModule { }
