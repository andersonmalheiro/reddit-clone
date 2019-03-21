import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import handleError from "../handleError";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  
  serverUrl = "https://rest-reddit.herokuapp.com/api/";

  constructor(
    private http: HttpClient,
  ) { }

  getComments(postId: number): Observable<[]> {
    return this.http.get<[]>(this.serverUrl + `posts/${postId}/comments/`).pipe(
      tap(_ => console.log("Comments fetched")),
      catchError(handleError<[]>("Get comments"))
    );
  };
}
