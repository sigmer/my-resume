import { InMemoryDbService } from 'angular-in-memory-web-api';
import { SkillCategory } from './skill-category';
import { User } from './user';
import { Skill } from './skill';
import { Job } from './job';
import { School } from './school';
import { ExternalLink } from './external-link';

const languages = new SkillCategory('Languages', 'fa-code');
const frameworks = new SkillCategory('Frameworks', 'fa-puzzle-piece');

const user: User = {
  id: 1,
  name: 'Andrew Ulliani',
  title: 'Software Engineer',
  address: 'Waltham, MA',
  email: 'aulliani@yahoo.com',
  avatar: '/assets/images/AndrewUlliani-avatar.jpg',
  skills: [
    /* Languages */
    new Skill('Java', languages, 90), new Skill('Javascript / ES6', languages, 90),
    new Skill('CSS / Sass', languages, 75), new Skill('HTML', languages, 80),
    /* Frameworks */
    new Skill('Ember', frameworks, 90), new Skill('Angular', frameworks, 50),
    new Skill('React', frameworks, 30), new Skill('Vue', frameworks, 20)
  ],
  jobs: [
    /* Virtustream */
    new Job('Virtustream', 'Senior Principal Software Engineer', new Date(2018, 2, 6), undefined,
    `Built cloud-native applications using Spring Boot, JPA, MySQL and React.js.
    Used Pivotal Cloud Foundry to manage the platform and deployment.`),
    /* RSA */
    new Job('RSA', 'Principal Software Engineer', new Date(2013, 1, 28), new Date(2018, 2, 3),
    `Developed an enterprise scale Java application running on JBoss/Wildfly.
    Refactored the front-end by transitioning the existing UI to the Ember.js framework.`),
    /* IBM */
    new Job('IBM', 'Senior Software Engineer', new Date(2007, 11), new Date(2013, 1),
    `Worked on a full-stack J2EE application using Java, JSP, Javascript and Apache Struts.
    Ran the application on Websphere and Weblogic with DB2 and Oracle databases.`),
    /* OpenPages */
    new Job('OpenPages', 'Consulting Engineer', new Date(2005, 9), new Date(2007, 11),
    `Implemented an enterprise financial controls management application for customers from
    initial requirements gathering to go-live. Developed customizations to meet client needs
    using Java, JSP, SQL, and various other techniques.`),
    /* OneBeacon */
    new Job('OneBeacon Insurance', 'UI Developer', new Date(2004, 6), new Date(2005, 9),
    `Developed the front-end of a J2EE application using JSP, Javascript, Apache Struts amoungst
    other technology.`)
  ],
  education: [
    new School('Boston University', new Date(2000, 9), new Date(2004, 5), 'Bachelor Degree in Computer Science')
  ],
  socialLinks: [
    new ExternalLink('https://www.facebook.com/andrew.ulliani', 'Facebook', 'fa-facebook-official'),
    new ExternalLink('https://www.linkedin.com/in/andrew-ulliani-68ab412/', 'LinkedIn', 'fa-linkedin'),
    new ExternalLink('https://github.com/sigmer', 'GitHub', 'fa-github')
  ]
};

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [ user ];
    return {users};
  }
}
