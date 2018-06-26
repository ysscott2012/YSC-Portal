import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlgorithmComponent } from './algorithm.component';

const route: Routes = [
  {
    path: 'algorithm',
    component: AlgorithmComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(route),
  ],
  exports: [
    RouterModule,
  ]
})
export class AlgorithmRoute { }


