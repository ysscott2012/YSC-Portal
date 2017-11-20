import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-database-menu',
  templateUrl: './database-menu.component.html',
  styleUrls: ['./database-menu.component.css']
})
export class DatabaseMenuComponent implements OnInit {

  /**
   * Attributes
   */
  collections:[String];

  /**
   * constructor
   * @param adminService
   */
  constructor(
    private adminService: AdminService
  ) { }

  /**
   * lifecycle
   */
  ngOnInit() {
    this.GetCollectionList();
  }

 /**
  * get collection list
  */
  GetCollectionList () {
    this.adminService.GetCollectionList().subscribe(
      data => {
        this.collections = data;
      },
      error => console.log(error)
    );
  }


}
