import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-circle-photo',
  templateUrl: './circle-photo.component.html',
  styleUrls: ['./circle-photo.component.css']
})
export class CirclePhotoComponent implements OnInit {

  /**
   * Attributes
   */
  @Input() board: String;
  @Input() path: String;

  /**
   * Constructor
   */
  constructor(

  ) { }

  /**
   * lifecycle
   */
  ngOnInit() {
  }

  /**
   * lifecycle
   */
  ngOnChanges() {
    // Set up board with and height
    this.board = this.board === '1000' ? '100%' : this.board + 'px';
  }

}
