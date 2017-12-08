import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardComponent } from './board/board.component';
import { KanbanComponent } from './kanban.component';

const route: Routes = [
  {
    path: 'kanban',
    component: KanbanComponent,
    children: [
      { path: '',
        redirectTo: '/kanban/board',
        pathMatch: 'full'
      },
      { path: 'board', component: BoardComponent }
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


