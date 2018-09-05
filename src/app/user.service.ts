import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';

import { User } from './user';
import { Skill } from './skill';
import { SkillCategory } from './skill-category';
import { Job } from './job';
import { School } from './school';
import { ExternalLink } from './external-link';
import { USERS } from './mock-users';

@Injectable()
export class UserService {

  private useApi = false; // !isDevMode();
  private usersUrl = 'api/users';

  constructor(private http: HttpClient) { console.log('Is dev mode? ' + isDevMode()); }

  getUsers(): Observable<User[]> {
    if (this.useApi) {
      console.log('use API');
      return this.http.get<User[]>(this.usersUrl).pipe(
        tap(users => console.log('fetched users')),
        catchError(this.handleError('getUsers', []))
      );
    } else {
      console.log('do not use API');
      return of(USERS);
    }
  }

  getUser(id: number): Observable<User> {
    if (this.useApi) {
      console.log('use API');
      const url = `${this.usersUrl}/${id}`;
      return this.http.get<User>(url).pipe(
        tap(_ => console.log(`fetched user id=${id}`)),
        catchError(this.handleError<User>(`getUser id=${id}`))
      );
    } else {
      console.log('do not use API');
      return of(USERS.find(user => user.id === id));
    }
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
