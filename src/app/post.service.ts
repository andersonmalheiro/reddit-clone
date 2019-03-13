import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  serverUrl = 'https://rest-reddit.herokuapp.com/api';

  constructor(private http: HttpClient) { }


  getPosts(): Observable<[]>{
    console.log('get posts');
    return this.http.get<[]>(this.serverUrl + '/posts').pipe(
      tap(_ => console.log("Posts fetched")),
      catchError(this.handleError<[]>('Get posts'))
    )
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
