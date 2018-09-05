import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../skill';
import { expandCollapse } from '../animation-triggers';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [expandCollapse]
})
export class SkillsComponent implements OnInit {

  @Input() title: string;
  @Input() icon: string;
  @Input() skills: Skill[];

  state = 'in';

  constructor() { }

  ngOnInit() {
  }

  toggleState() {
    this.state = this.state === 'in' ? 'out' : 'in';
  }

}
