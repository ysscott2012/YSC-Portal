import { Component, OnInit } from '@angular/core';
import {AlgorithmService} from './services/algorithm.service';

@Component({
  selector: 'app-algorithm',
  templateUrl: './algorithm.component.html',
  styleUrls: ['./algorithm.component.css']
})
export class AlgorithmComponent implements OnInit {

  constructor(
    private algorithmService: AlgorithmService
  ) { }

  ngOnInit() {

  }


}
