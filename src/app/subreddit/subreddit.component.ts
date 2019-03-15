import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SubredditService } from '../subreddit.service';

@Component({
  selector: 'app-subreddit',
  templateUrl: './subreddit.component.html',
  styleUrls: ['./subreddit.component.css']
})
export class SubredditComponent implements OnInit {

  subreddit: {};
  posts: [];

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private subService: SubredditService,
  ) { }

  ngOnInit() {
    this.getSubreddit();
    this.getPosts('-createdAt');
  }
  
  getSubreddit(): void {
    this.subService.getSubreddit(this.route.snapshot.params.id).subscribe(
      response => this.subreddit = response
    );
  };

  getPosts(ordering: string): void {
    this.subService.getPostsBySubreddit(this.route.snapshot.params.id, ordering).subscribe(
      response => this.posts = response
    );
  };

}
