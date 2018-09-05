import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../job';
import { expandCollapse } from '../animation-triggers';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
  animations: [expandCollapse]
})
export class JobComponent implements OnInit {

  @Input() job: Job;

  state = 'in';

  constructor() { }

  ngOnInit() {
  }

  toggleState() {
    this.state = this.state === 'in' ? 'out' : 'in';
  }

}
