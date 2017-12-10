import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DndModule } from 'ng2-dnd';

// Module
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Services
import { ContainerService } from '../services/container.service';
import { ObjectService } from '../services/object.service';
import { UserService } from '../user/services/user.service';

//import { KanbanService } from './services/kanban.service';

// Routes
import { KanbanRoutes } from './kanban.route';

// Components
import { KanbanComponent } from './kanban.component';
import { KanbanBoardComponent } from './board/board.component';
import { KanbanListComponent } from './list/list.component';
import { BoardSampleComponent } from './board-sample/board-sample.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    DndModule.forRoot(),
    FormsModule,
    KanbanRoutes,
    SharedModule
  ],
  declarations: [
    KanbanComponent,
    KanbanBoardComponent,
    KanbanListComponent,
    BoardSampleComponent,
  ],
  providers: [
    ContainerService,
    ObjectService
  ],
  exports: [
    KanbanComponent
  ]
})
export class KanbanModule { }
