import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

// Components
import { ActivityComponent } from './activity.component';
import { ActivityInputComponent } from './input/input.component';
import { ActivityListComponent } from './list/list.component';
import { ActivityCommentComponent } from './comment/comment.component';

// Services
import { ActivityService } from './services/activity.service';
import { CommentService } from '../services/comment.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ActivityComponent,
    ActivityInputComponent,
    ActivityListComponent,
    ActivityCommentComponent
  ],
  providers: [
    ActivityService,
    CommentService
  ],
  exports: [
    ActivityComponent,
    ActivityInputComponent,
    ActivityListComponent,
    ActivityCommentComponent
  ]
})
export class ActivityModule { }
