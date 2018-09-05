import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { UserService } from './user.service';
import { SkillComponent } from './skill/skill.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillCategoryFilterPipe } from './skill-category-filter.pipe';
import { AvatarComponent } from './avatar/avatar.component';
import { JobComponent } from './job/job.component';
import { SchoolComponent } from './school/school.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    SkillComponent,
    SkillsComponent,
    SkillCategoryFilterPipe,
    AvatarComponent,
    JobComponent,
    SchoolComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // Uncomment to enable the mock in-memory web api
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
