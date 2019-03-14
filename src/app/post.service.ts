import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  serverUrl = 'https://rest-reddit.herokuapp.com/api/';

  constructor(private http: HttpClient) { }


  getPosts(ordering: string): Observable<[]>{
    return this.http.get<[]>(this.serverUrl + 'posts/' + `?order_by=${ordering}`).pipe(
      tap(_ => console.log("Posts fetched")),
      catchError(this.handleError<[]>('Get posts'))
    );
  };

  addPost(post: {}): Observable<{}>{
    return this.http.post<{}>(this.serverUrl + 'posts/', post).pipe(
      tap(_ => console.log("Post added")),
      catchError(this.handleError<{}>("Add post"))
    );
  };

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
