import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../api.service';
import { Observable } from 'rxjs';
import { Post } from '../../post.interface';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comments$: Observable<Comment>;
  post$: Post;
  isComment = false;

  constructor(private service: ApiService) {
    const observable = this.service.getID$();
    observable.subscribe( (post: Post) => {
      this.comments$ = this.service.getComment(post.id);
      this.post$ = post;
      this.isComment = true;
    } );
  }

  ngOnInit() {
  }

}
