import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { PostComponent } from "./post/post.component";
import { HomeComponent } from "./home/home.component";
import { SubredditListComponent } from "./subreddit-list/subreddit-list.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { AddSubredditComponent } from "./add-subreddit/add-subreddit.component";
import { FeedComponent } from "./feed/feed.component";
import { SubredditComponent } from "./subreddit/subreddit.component";
import { SpinnerComponent } from './spinner/spinner.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    HomeComponent,
    SubredditListComponent,
    AddPostComponent,
    AddSubredditComponent,
    FeedComponent,
    SubredditComponent,
    SpinnerComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
