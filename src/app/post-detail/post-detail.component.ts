import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from "../models/post";
import { Comment } from "../models/comment";
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  @Input() post: {};
  @Input() subreddit: {};
  @Input() show: boolean = false;
  @Output() hide = new EventEmitter();
  @Input() comments: [];

  constructor(
  ) {}

  ngOnInit() {
  }

  hidePost(): void {
    this.hide.emit();
  }

  

}
