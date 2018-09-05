import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AvatarComponent } from './avatar/avatar.component';
import { ContactComponent } from './contact/contact.component';
import { SchoolComponent } from './school/school.component';
import { SkillComponent } from './skill/skill.component';
import { FooterComponent } from './footer/footer.component';
import { JobComponent } from './job/job.component';
import { SkillCategoryFilterPipe } from './skill-category-filter.pipe';
import { UserService } from './user.service';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, AvatarComponent, ContactComponent,
        SchoolComponent, SkillComponent, FooterComponent,
        JobComponent, SkillCategoryFilterPipe
      ],
      providers: [
        UserService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
