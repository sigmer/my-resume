import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarComponent } from './avatar.component';
import { User } from '../user';

describe('AvatarComponent', () => {
  it('should create', () => {
    TestBed.configureTestingModule({
      declarations: [ AvatarComponent ]
    });
    const fixture = TestBed.createComponent(AvatarComponent);
    const component = fixture.componentInstance;
    const user: User = {
      id: null,
      name: 'Andrew',
      avatar: 'andrew.jpg'
    };
    component.user = user;
    expect(component).toBeDefined();
  });
});
