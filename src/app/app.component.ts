import { Component } from '@angular/core';
import { Comment } from './comment.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isComment = false;

  constructor() {

  }

  onShowComments(id) {
    // console.log('id: ', id);
    this.isComment = true;
//    this.comments$ = this.http.get<Comment>(this.commentsUrl + '?postId=' + id);
  }

}


