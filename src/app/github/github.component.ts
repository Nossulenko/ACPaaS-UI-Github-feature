import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss'],
  providers: [GithubService]
})
export class GithubComponent {
  user: any;
  repos: any;
  noDesc: 'No Description Available';
  username: string;

  constructor(private _githubService: GithubService) {
  }
  search(){
    console.log('Github Component Init...');
    this._githubService.getUserInfo().subscribe(user => {
      this.user = user;
    });

    this._githubService.getUserRepoInfo().subscribe(repos => {
      this.repos = repos;
    });
  }
}
