import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Activity } from '../../classes/activity';
import { Params } from '../../classes/params';
import { User } from '../../classes/user';

import { ActivityService } from '../services/activity.service';
import { UserService } from '../../user/services/user.service';

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
  public activities: Activity[] = [];
  public params: Params = new Params();
  public end: Boolean = false;
  public currentIndex: number = 0;
  public amount: number = 10;

  @Input() newPostedActivity: Activity;

  /**
   * constructor
   */
  constructor(
    private activityService: ActivityService,
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
    var currentIndex = reload ? 0 : this.currentIndex;
    this.params.filter = {
      owner: this.current,
      currentIndex: currentIndex,
      amount: this.amount
    }

    this.activityService.getActivitiesByOwner(this.params).subscribe(
      data => {
        if (data.success) {

          // check if data is ending;
          this.end = data.payload.length === 0;

          if (!this.end) {
            this.currentIndex = this.currentIndex + this.amount;
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


}
