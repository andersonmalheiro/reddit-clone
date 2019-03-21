import { Component, OnInit } from "@angular/core";
import { PostService } from "../post.service";
import { CommentService } from "../comment.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  posts = [];
  loading: boolean;
  showPost: boolean = false;
  selectedPost: {};
  comments: [];

  constructor(
    private postService: PostService,
    private commentService: CommentService
  ) {}

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

  postDetail(): void {
    this.showPost = !this.showPost;
    if (this.showPost){
      document.body.setAttribute('style', 'overflow: hidden');
      this.getComments()
    } else {
      document.body.setAttribute('style', '')
    }
  };

  getComments(): void {
    this.commentService.getComments(this.selectedPost['id']).subscribe(
      response => {this.comments = response, console.log(this.comments)}
    );
  }

  selectPost(post: {}): void {
    this.selectedPost = post;
    this.postDetail();
  }
}
