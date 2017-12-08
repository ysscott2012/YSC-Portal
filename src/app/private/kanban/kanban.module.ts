import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DndModule } from 'ng2-dnd';

// Module
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

// Services
import { ContainerService } from '../services/container.service';
import { ObjectService } from '../services/object.service';
import { UserService } from '../user/services/user.service';

//import { KanbanService } from './services/kanban.service';

// Routes
import { KanbanRoutes } from './kanban.route';

// Components
import { KanbanComponent } from './kanban.component';
import { BoardComponent } from './board/board.component';
import { BoardSampleComponent } from './board-sample/board-sample.component';
import { CreateBoardComponent } from './dialogs/create-board/create-board.component';

@NgModule({
  imports: [
    CommonModule,
    DndModule.forRoot(),
    FormsModule,
    KanbanRoutes,
    SharedModule
  ],
  declarations: [
    KanbanComponent,
    BoardComponent,
    BoardSampleComponent,
    CreateBoardComponent
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
