import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlgorithmComponent } from './algorithm.component';
import {LeetcodeDashboardComponent} from './components/leetcode-dashboard/leetcode-dashboard.component';

const route: Routes = [
  {
    path: 'algorithm',
    component: AlgorithmComponent,
    children: [
      {path: 'leetcode-dashboard', component: LeetcodeDashboardComponent}
    ]
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


