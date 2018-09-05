import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  it('should create', () => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    });
    const fixture = TestBed.createComponent(FooterComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
});
