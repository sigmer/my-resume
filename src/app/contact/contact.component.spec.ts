import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  it('should create', () => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ]
    });
    const fixture = TestBed.createComponent(ContactComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
});
