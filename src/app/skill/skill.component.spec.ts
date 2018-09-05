import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillComponent } from './skill.component';

describe('SkillComponent', () => {
  it('should create', () => {
    TestBed.configureTestingModule({
      declarations: [ SkillComponent ]
    });
    const fixture = TestBed.createComponent(SkillComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
});
