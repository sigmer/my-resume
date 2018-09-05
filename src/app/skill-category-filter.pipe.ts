import { Pipe, PipeTransform } from '@angular/core';
import { Skill } from './skill';
import { SkillCategory } from './skill-category';

@Pipe({
  name: 'skillCategoryFilter',
  pure: false
})
export class SkillCategoryFilterPipe implements PipeTransform {

  transform(skills: Skill[], category: SkillCategory): Skill[] {
    if (!skills || !category) {
      return skills;
    }
    return skills.filter((skill: Skill) => skill.category === category);
  }

}
