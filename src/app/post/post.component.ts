import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../post.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts$: Observable<Post>;

  constructor(private service: ApiService) {
    this.posts$ = service.getPost();
   }

  ngOnInit() {
  }

}
