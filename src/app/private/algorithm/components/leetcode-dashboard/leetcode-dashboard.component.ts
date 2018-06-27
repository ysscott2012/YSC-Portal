import { Component, OnInit } from '@angular/core';

// booststrao
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import {Leetcode} from '../../../../classes/Leetcode';

@Component({
  selector: 'app-leetcode-dashboard',
  templateUrl: './leetcode-dashboard.component.html',
  styleUrls: ['./leetcode-dashboard.component.css']
})
export class LeetcodeDashboardComponent implements OnInit {

  leetcode: Leetcode;

  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.leetcode = new Leetcode();
  }

  /**
   * open a dialog
   * @param content
   */
  open(content) {
    const ngbModalOptions: NgbModalOptions = {
      windowClass: 'board-modal',
      size: 'lg'
    };
    this.modalService.open(content, ngbModalOptions).result.then((result) => {
    }, (reason) => {
    });
  }

  validate() {
    return this.leetcode.algorithmId &&
      this.leetcode.chapter &&
      this.leetcode.description &&
      this.leetcode.difficultly &&
      this.leetcode.name &&
      this.leetcode.number;
  }

  setLeetcodeNote(event) {
    this.leetcode.note = event.currentTarget.value;
  }

  setLeetcodeName(event) {
    this.leetcode.name = event.currentTarget.value;
  }

  setLeetcodeDescription(event) {
    this.leetcode.description = event.currentTarget.value;
  }

}
