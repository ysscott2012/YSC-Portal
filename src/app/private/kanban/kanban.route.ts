import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KanbanComponent } from './kanban.component';
import { KanbanBoardComponent } from './board/board.component';

const route: Routes = [
  {
    path: 'kanban',
    component: KanbanComponent,
    children: [
      { path: '',
        redirectTo: '/kanban/board',
        pathMatch: 'full'
      },
      { path: 'board', component: KanbanBoardComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(route)
  ],
  exports: [
    RouterModule
  ]
})
export class KanbanRoutes { }


