// Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Services
import {AlgorithmService} from './services/algorithm.service';

// Routes
import { AlgorithmRoute } from './algorithm.route';

// Components
import { AlgorithmComponent } from './algorithm.component';
import { LeetcodeDashboardComponent } from './components/leetcode-dashboard/leetcode-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    AlgorithmRoute,
    SharedModule,
    FormsModule,
    NgbModule
  ],
  declarations: [
    AlgorithmComponent,
    LeetcodeDashboardComponent
  ],
  providers: [
    AlgorithmService
  ]
})
export class AlgorithmModule { }
