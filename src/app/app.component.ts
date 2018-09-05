import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { Skill } from './skill';
import { SkillCategory } from './skill-category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: User;
  skillCategories: SkillCategory[];

  constructor(private userService: UserService) { }

  getUser(): void {
    this.userService.getUser(1).subscribe(user => {
      this.user = user;

      if (user.skills) {
        const { skills } = this.user;
        const categories = skills.map((skill: Skill) => skill.category);
        this.skillCategories = Array.from(new Set(categories));
      }
    });
  }

  ngOnInit() {
    this.getUser();
  }
}
