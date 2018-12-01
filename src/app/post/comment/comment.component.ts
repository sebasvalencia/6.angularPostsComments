import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comments$: Observable<Comment>;
  isComment = false;

  constructor(private service: ApiService) {
    const observable = this.service.getID$();
    observable.subscribe( idPost => {
      this.comments$ = this.service.getComment(idPost);
      this.isComment = true;
    } );
    
  }

  ngOnInit() {
  }

}
