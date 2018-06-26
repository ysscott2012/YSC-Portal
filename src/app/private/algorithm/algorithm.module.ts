// Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import {AlgorithmService} from './services/algorithm.service';

// Routes
import { AlgorithmRoute } from './algorithm.route';

// Components
import { AlgorithmComponent } from './algorithm.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AlgorithmRoute,
    SharedModule,
  ],
  declarations: [
    AlgorithmComponent
  ],
  providers: [
    AlgorithmService
  ]
})
export class AlgorithmModule { }
