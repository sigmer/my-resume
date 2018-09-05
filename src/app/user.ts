import { Job } from './job';
import { School } from './school';
import { Skill } from './skill';
import { ExternalLink } from './external-link';

export class User {
  id: number;
  name: string;
  title?: string;
  address?: string;
  email?: string;
  avatar?: string;
  skills?: Skill[] = [];
  jobs?: Job[] = [];
  education?: School[] = [];
  socialLinks?: ExternalLink[] = [];
}
