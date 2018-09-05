import { SkillCategoryFilterPipe } from './skill-category-filter.pipe';
import { Skill } from './skill';
import { SkillCategory } from './skill-category';

describe('SkillCategoryFilterPipe', () => {

  const pipe = new SkillCategoryFilterPipe();

  const c1 = new SkillCategory('c1');
  const skills = [
    new Skill('s1', c1),
    new Skill('s2', new SkillCategory('c2')),
    new Skill('s3', c1)
  ];

  it('filters on a category', () => {
    expect(pipe.transform(skills, c1)).toEqual([
      new Skill('s1', c1),
      new Skill('s3', c1)
    ]);
  });

  it('returns empty array when no categories match', () => {
    expect(pipe.transform(skills, new SkillCategory('c3'))).toEqual([]);
  });

  it('works with an empty array of skills', () => {
    expect(pipe.transform([], new SkillCategory('c1'))).toEqual([]);
  });

  it('works with null skills', () => {
    expect(pipe.transform(null, new SkillCategory('c1'))).toBeNull();
  });

  it('works with undefined skills', () => {
    expect(pipe.transform(undefined, new SkillCategory('c1'))).toBeUndefined();
  });

  it('works with null category', () => {
    expect(pipe.transform(skills, null)).toEqual(skills);
  });

  it('works with undefined category', () => {
    expect(pipe.transform(skills, undefined)).toEqual(skills);
  });
});
