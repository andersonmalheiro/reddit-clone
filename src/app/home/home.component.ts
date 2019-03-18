import { Component, OnInit } from "@angular/core";
import { PostService } from "../post.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  posts = [];
  loading: boolean;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.getPosts("-createdAt");
  }

  getPosts(ordering: string): void {
    this.loading = true;
    this.postService.getPosts(ordering).subscribe(response => {
      this.loading = false;
      this.posts = response.slice(0, 5);
    });
  }
}
