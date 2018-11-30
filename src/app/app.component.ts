import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularPostsComents';

  postUrl = 'https://jsonplaceholder.typicode.com/posts';
  commentsUrl = 'https://jsonplaceholder.typicode.com/comments/';

  posts$: Observable<Post>;
  comments$: Observable<Comment>;
  isComment = false;

  constructor(private http: HttpClient) {
    this.posts$ = this.http.get<Post>(this.postUrl);
    this.comments$ = this.http.get<Comment>(this.commentsUrl);
    // this.http.get(this.commentsUrl).subscribe(console.log);
  }

  onShowComments(id) {
    // console.log('id: ', id);
    this.isComment = true;
    this.comments$ = this.http.get<Comment>(this.commentsUrl + '?postId=' + id);
  }

}

interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

interface Comment {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}

