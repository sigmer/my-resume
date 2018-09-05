import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobComponent } from './job.component';

describe('JobComponent', () => {
  it('should create', () => {
    TestBed.configureTestingModule({
      declarations: [ JobComponent ]
    });
    const fixture = TestBed.createComponent(JobComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
});
