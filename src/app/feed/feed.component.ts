import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  @Input() posts : [];
  @Output() post = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  selectPost(post: {}): void {
    this.post.emit(post);
  }

}
