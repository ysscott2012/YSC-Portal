import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Activity } from '../../classes/activity';
import { Params } from '../../classes/params';
import { User } from '../../classes/user';

import { ActivityService } from '../services/activity.service';
import { UserService } from '../../user/services/user.service';

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

  /**
   * constructor
   */
  constructor(
    private activityService: ActivityService,
    private userService: UserService
  ) {
    this.current = userService.getCurrent();
    this.getActivitiesByOwner();

  }

  /**
   * lifecycle
   */
  ngOnInit() {
  }

  /**
   * get total activities
   */
  getActivitiesByOwner() {
    this.params.filter = {
      owner: this.current
    }
    this.activityService.getActivitiesByOwner(this.params).subscribe(
      data => {
        if (data.success) {

          // check if data is ending;
          this.end = data.payload.length === 0;

          if (!this.end) {
            // serialize
            data.payload.forEach(element => {
              this.activities.push(new Activity(element));
            });
          }
          console.log(this.activities);
        }
      },
      error => console.log(error)
    )
  }
}
