import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-database-menu',
  templateUrl: './database-menu.component.html',
  styleUrls: ['./database-menu.component.css']
})
export class DatabaseMenuComponent implements OnInit {

  collections:[String];

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.GetCollectionList();
  }


  GetCollectionList () {
    this.adminService.GetCollectionList().subscribe(
      data => {
        this.collections = data;
      },
      error => console.log(error)
    );
  }


}
