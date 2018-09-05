import { Component, OnInit, Input } from '@angular/core';
import { School } from '../school';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {

  @Input() school: School;

  constructor() { }

  ngOnInit() {
  }

}
