import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Activity } from '../../classes/activity';
import { User } from '../../classes/user';

import { ActivityService } from '../services/activity.service';
import { UserService } from '../../user/services/user.service';

import { YS_REFERENCE } from '../../global';

import * as $ from 'jquery';

@Component({
  selector: 'app-activity-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class ActivityInputComponent implements OnInit {

  /**
   * Attributes
   */
  public current: User;
  @Output() activityPosted = new EventEmitter<any>();

  /**
   * constructor
   */
  constructor(
    private router: Router,
    private activityService: ActivityService,
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
   * on focus
   */
  onFocus() {
    console.log("focus on textarea");
  }

  /**
   * on blur
   */
  onBlur() {
    console.log("leave textarea");
  }

  /**
   * post new activity
   */
  post() {
    const value = $('#activityInput').val().replace(/\n/g, '<br>');
    var params = {
      content: value,
      creationDate: new Date().toJSON(),
      owner: this.current
    }
    if (value) {
      this.activityService.save(params).subscribe(
        data => {
          if (data.success) {
            var activity = new Activity(data.payload);
            this.activityPosted.emit(activity);
            $('#activityInput').val('');
          }
        },
        error => console.log(error)
      )
    }
  }
}
