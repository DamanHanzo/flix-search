import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Featured } from './featured';

@Injectable()
export class FeaturedService {
  private featuredUrl: string = 'api/featured_shows.json';

  constructor(private _http: Http) { }

  featuredShows(): Observable<Featured[]> {
    return this._http
                      .get(this.featuredUrl)
                      .map((response: Response) => <Featured[]> response.json())
                      .do(data => console.log(data))
                      .catch(this.handleError);
  }

  private handleError(error: Response) {
    let msg = `Error status code ${error.status} status ${error.statusText} at ${error.url}`;
    return Observable.throw(msg);
  }
}