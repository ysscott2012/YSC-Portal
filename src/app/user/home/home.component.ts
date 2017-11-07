import { Component, OnInit } from '@angular/core';

import { Activity } from '../../classes/activity';

@Component({
  selector: 'app-user-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class UserHomeComponent implements OnInit {

  /**
   * Attributes
   */
  public newPostedActivity: Activity;


  /**
   * constructor
   */
  constructor(

  ) { }

  /**
   * lifecycle
   */
  ngOnInit() {
  }

  /**
   * detect if activity is posted
   */
  activityPosted(activity: Activity) {
    this.newPostedActivity = activity;
  }

}
