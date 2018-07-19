import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private cient_id = '0e5e41d7bbbe8cee4df3';
  private client_secret = '02b1592bbd1d9b87b08fff6d106f7bcfcb8b2b1c';
  private username = 'nossulenko';

  constructor(private  _http: Http) {
    console.log('github serivce init');
  }
  getUserInfo() {
   return this._http.get('https://api.github.com/users/' + this.username)
      .map(res => res.json());
  }
  getUserRepoInfo() {
    return this._http.get('https://api.github.com/users/' + this.username + '/repos')
      .map(res => res.json());
  }
  updateUsername(username: string ) {
    this.username = username;
  }
}

