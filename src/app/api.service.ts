import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  postUrl = 'https://jsonplaceholder.typicode.com/posts';
  commentsUrl = 'https://jsonplaceholder.typicode.com/comments/';

  comments$: Observable<Comment>;


  constructor(private http: HttpClient) { }
  // this.http.get(this.commentsUrl).subscribe(console.log);
  getPost() {
    return this.http.get<Post>(this.postUrl);
  }

  getComment() {
    this.comments$ = this.http.get<Comment>(this.commentsUrl);
  }

}
