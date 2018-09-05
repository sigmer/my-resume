import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolComponent } from './school.component';

describe('SchoolComponent', () => {
  it('should create', () => {
    TestBed.configureTestingModule({
      declarations: [ SchoolComponent ]
    });
    const fixture = TestBed.createComponent(SchoolComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
});
