import { Component, OnInit } from '@angular/core';
import { SubredditService } from '../subreddit.service';

@Component({
  selector: 'app-subreddit-list',
  templateUrl: './subreddit-list.component.html',
  styleUrls: ['./subreddit-list.component.css']
})
export class SubredditListComponent implements OnInit {

  subreddits = [];

  constructor(private subredditService: SubredditService) { }

  getSubreddits(): void {
    this.subredditService.getSubreddits().subscribe(
      subreddits => this.subreddits = subreddits
    );
  }

  ngOnInit() {
    this.getSubreddits();
  }

}
