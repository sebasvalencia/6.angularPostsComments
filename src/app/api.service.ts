import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.interface';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  postUrl = 'https://jsonplaceholder.typicode.com/posts';
  commentsUrl = 'https://jsonplaceholder.typicode.com/comments/';

  private subjectId$ = new Subject<number>();

  constructor(private http: HttpClient) { }

  getPost() {
    return this.http.get<Post>(this.postUrl);
  }

  getComment(id: number) {
    return this.http.get<Comment>(this.commentsUrl + '?postId=' + id);
  }

  addId(idPostComment: number) {
    this.subjectId$.next(idPostComment);
  }

  getID$(): Observable<number> {
    return this.subjectId$.asObservable();
  }

}
