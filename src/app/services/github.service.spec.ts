import { TestBed, inject } from '@angular/core/testing';

import { GithubService } from './github.service';

import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

describe('GithubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubService]
    });
  });

  it('should be created', inject([GithubService], (service: GithubService) => {
    expect(service).toBeTruthy();
  }));
});
