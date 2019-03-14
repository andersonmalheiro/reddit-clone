import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { SubredditService } from '../subreddit.service';
import { SubredditListComponent } from '../subreddit-list/subreddit-list.component';

@Component({
  selector: 'app-add-subreddit',
  templateUrl: './add-subreddit.component.html',
  styleUrls: ['./add-subreddit.component.css']
})

export class AddSubredditComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private subredditService: SubredditService,
    private sublist: SubredditListComponent,
  ) { }

  subredditForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: ['',]
  });

  addSubreddit(): void {
    this.subredditService.addSubreddit(this.subredditForm.value).subscribe(
      _ => this.sublist.getSubreddits()
    )
  }

  ngOnInit() {
  }

}
