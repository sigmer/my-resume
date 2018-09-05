import { SkillCategory } from './skill-category';

export class Skill {
  constructor(
    public name: string,
    public category: SkillCategory,
    public level: number = 0
  ) { }
}
