import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { SubredditService } from '../services/subreddit.service';

import { HomeComponent } from '../home/home.component'

declare let $: any;

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  subreddits = [];

  constructor(
    private formBuilder: FormBuilder,
    private subredditService: SubredditService,
    private postService: PostService,
    private home: HomeComponent
  ) { }
  
  addForm = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(3)]],
    subreddit: ['', Validators.required],
    author: ['', Validators.required],
    image: ['']
  })
  
  getSubreddits(): void {
    this.subredditService.getSubreddits().subscribe(
      subreddits => this.subreddits = subreddits
    );
  }

  addPost(): void {
    this.postService.addPost(this.addForm.value).subscribe(
      response => {
        $('#add-post').modal('toggle')
        this.home.getPosts('-createdAt'),
        this.clear()
      },
      error => {
        console.log(error.error)
      }
    );
  }

  clear(): void {
    this.addForm.setValue({
      title: '',
      description: '',
      subreddit: '',
      author: '',
      image: ''
    })
  }

  ngOnInit() {
    this.getSubreddits();
  }

}
