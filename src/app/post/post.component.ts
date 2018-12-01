import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../post.interface';
import { Observable, of, PartialObserver, Subject } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts$: Observable<Post>;
  public observer: PartialObserver<any>;

  constructor(private service: ApiService) {
    this.posts$ = service.getPost();
   }

  ngOnInit() {
  }

  onGetIdPost(idPostComment) {
    this.service.addId(idPostComment);
  }

}
