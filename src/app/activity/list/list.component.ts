import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Activity } from '../../classes/activity';
import { User } from '../../classes/user';
import { Comment } from '../../classes/comment';

import { ActivityService } from '../services/activity.service';
import { UserService } from '../../user/services/user.service';
import { CommentService } from '../../services/comment.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-activity-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ActivityListComponent implements OnInit {

  /**
   * Attributes
   */
  public current: User;

  // Activity
  public activities: Activity[] = [];
  public activityEnd: Boolean = false;
  public activityIndex: number = 0;
  public activityAmount: number = 10;

  // Comment
  // need to use hash table to get different comments;
  public comments: Comment[] = [];
  public commentEnd: Boolean = false;
  public commentIndex: number = 0;
  public commentAmount: number = 3;

  @Input() newPostedActivity: Activity;

  /**
   * constructor
   */
  constructor(
    private activityService: ActivityService,
    private commentService: CommentService,
    private userService: UserService
  ) {
    this.current = userService.getCurrent();
    this.getActivitiesByOwner(true);

  }

  /**
   * lifecycle
   */
  ngOnInit() {
    var section = $('.section');
    var activityDiv = $('#userHome');
    console.log(section)
    section.scroll(function() {
      if (activityDiv.height() - section.height() === section.scrollTop()) {
        if (!this.end) {
          this.getActivitiesByOwner(false);
        }
      }
    }.bind(this));
  }

  /**
   * lifecycle
   */
  ngOnChanges() {
    if (this.newPostedActivity) {
      this.activities.unshift(this.newPostedActivity);
    }
  }

  /**
   * get total activities
   */
  getActivitiesByOwner(reload) {

    console.log("get activities");
    var activityIndex = reload ? 0 : this.activityIndex;

    var params = {
      owner: this.current,
      currentIndex: activityIndex,
      amount: this.activityAmount
    }

    this.activityService.getActivitiesByOwner(params).subscribe(
      data => {
        if (data.success) {

          // check if data is ending;
          this.activityEnd = data.payload.length === 0;

          if (!this.activityEnd) {
            this.activityIndex = this.activityIndex + this.activityAmount;
            // serialize
            data.payload.forEach(element => {
              this.activities.push(new Activity(element));
            });
          }
        }
      },
      error => console.log(error)
    )
  }

  /**
   * get total comments
   */
  getComments(reload, activity) {
    var element = $('#comment' + activity.id);
    $(element).show();

    console.log("get comments");
    var commentIndex = reload ? 0 : this.commentIndex;

    var params = {
      activity: activity,
      currentIndex: commentIndex,
      amount: this.commentAmount
    }

    this.commentService.getCommentsByActivity(params).subscribe(
      data => {
        if (data.success) {
          console.log(data.payload)
          // // check if data is ending;
          this.commentEnd = data.payload.length === 0;

          if (!this.commentEnd) {
            this.commentIndex = this.commentIndex + this.commentAmount;
            // serialize
            data.payload.forEach(element => {
              this.comments.push(new Comment(element));
            });
          }
        }
      },
      error => console.log(error)
    )

  }

  /**
   * create comment
   * @param event
   * @param activity
   */
  comment(event, activity: Activity) {

    if (event.keyCode === 13) {
      var str = $(event.currentTarget).val();
      if (str) {
        var comment = new Comment();
        comment.setUpCommentByActivity(activity, str, new Date().toJSON());
        var params = {
          comment: comment,
          owner: this.current
        }
        this.commentService.saveComment(params).subscribe(
          data => {
            if (data.success) {
              var newComment = new Comment(data.payload);
              $(event.currentTarget).val("");
            }
          },
          error => console.log(error)
        )
      }
    }
  }

  /**
   * like
   */
  like() {
    debugger
  }

}
