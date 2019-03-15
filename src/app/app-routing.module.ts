import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { SubredditComponent } from './subreddit/subreddit.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'r/:subreddit', component: SubredditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
