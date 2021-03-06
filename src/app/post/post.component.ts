import { Component, OnInit, Input } from '@angular/core';
import { PostService } from "../services/post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: {};
  @Input() comments: [];
  @Input() showComments: boolean = false;
  
  constructor(private postService: PostService) { }

  likePost(id: number, post: {}): void {
    this.postService.likePost(id, post).subscribe(
      response => this.post = response
    );
  };

  dislikePost(id: number, post: {}): void {
    this.postService.dislikePost(id, post).subscribe(
      response => this.post = response
    );
  };

  ngOnInit() {
  }

}
