import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Activity } from '../../../classes/activity';
import { User } from '../../../classes/user';
import { Comment } from '../../../classes/comment';

import { UserService } from '../../user/services/user.service';
import { CommentService } from '../../services/comment.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-activity-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class ActivityCommentComponent implements OnInit {

  /**
   * Attributes
   */
  public current: User;

  // Comment
  // need to use hash table to get different comments;
  public comments: Comment[] = [];
  public commentEnd: Boolean = false;
  public commentIndex: number = 0;
  public commentAmount: number = 3;
  @Input() activity;

  /**
   * constructor
   */
  constructor(
    private commentService: CommentService,
    private userService: UserService
  ) {
    this.current = userService.getCurrent();
  }

  /**
   * lifecycle
   */
  ngOnInit() {
  }

  /**
   * lifecycle
   */
  ngOnChanges() {
    this.getComments(true);
  }

  /**
   * create comment
   * @param event
   * @param activity
   */
  comment(event, activity: Activity) {
    if (event.keyCode === 13) {
      let element = $(event.currentTarget);
      let str = element.val();
      if (str) {
        let comment = new Comment();
        comment.setUpCommentByActivity(activity, str, new Date().toJSON());
        let params = {
          comment: comment,
          owner: this.current
        }
        this.commentService.saveComment(params).subscribe(
          data => {
            if (data.success) {
              const newComment = new Comment(data.payload);
              this.comments.unshift(newComment);
              element.val('');
            }
          },
          error => console.log(error)
        );
      }
    }
  }


  /**
   * like
   */
  like() {

  }


  /**
   * get total comments
   */
  getComments(reload) {

    var commentIndex = reload ? 0 : this.commentIndex;

    var params = {
      activity: this.activity,
      currentIndex: commentIndex,
      amount: this.commentAmount
    }

    this.commentService.getCommentsByActivity(params).subscribe(
      data => {
        if (data.success) {
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


}
