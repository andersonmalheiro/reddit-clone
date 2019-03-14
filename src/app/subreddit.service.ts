import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubredditService {

  serverUrl = 'https://rest-reddit.herokuapp.com/api/';

  constructor(private http: HttpClient) { }

  getSubreddits(): Observable<[]>{
    return this.http.get<[]>(this.serverUrl + 'subreddits/').pipe(
      tap(_ => console.log('subreddits fetched')),
      catchError(this.handleError<[]>('fetch subreddits'))
    );
  };

  addSubreddit(data: {}): Observable<{}> {
    return this.http.post<{}>(this.serverUrl + 'subreddits/', data).pipe(
      tap(_ => console.log('subreddit added')),
      catchError(this.handleError('add subreddit'))
    );
  };

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  };
}
