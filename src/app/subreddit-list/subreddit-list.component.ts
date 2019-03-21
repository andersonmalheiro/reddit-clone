import { Component, OnInit } from "@angular/core";
import { SubredditService } from "../services/subreddit.service";

@Component({
  selector: "app-subreddit-list",
  templateUrl: "./subreddit-list.component.html",
  styleUrls: ["./subreddit-list.component.css"]
})
export class SubredditListComponent implements OnInit {
  subreddits = [];
  loading: boolean;

  constructor(private subredditService: SubredditService) {}

  getSubreddits(): void {
    this.loading = true;
    this.subredditService.getSubreddits().subscribe(subreddits => {
      this.loading = false;
      this.subreddits = subreddits;
    });
  }

  ngOnInit() {
    this.getSubreddits();
  }
}
