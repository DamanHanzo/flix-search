import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Details } from './details';
import { Episodes } from './episode';

@Injectable()
export class DetailsService {
  private tvMazeURL: string = 'https://api.tvmaze.com';

  constructor(private _http: Http) { }

  getShowDetails(id: number, show: string): Observable<any> {
    return Observable.forkJoin([
      this.getShowInfo(show),
      this.getEpisodes(id)
      ])
  }

    getShowInfo(show: string): Observable<Details> {
    return this._http
                      .get(`${this.tvMazeURL}/singlesearch/shows?q=${show}`)
                      .map((response: Response) => <Details> response.json())
                      .do(data => console.log(data))
                      .catch(this.handleError);
  }

    getEpisodes(id: number): Observable<Episodes[]> {
    return this._http
                      .get(`${this.tvMazeURL}/shows/${id}/episodes`)
                      .map((response: Response) => <Episodes[]> response.json())
                      .do(data => console.log(data))
                      .catch(this.handleError);
  }

  private handleError(error: Response) {
    let msg = `Error status code ${error.status} status ${error.statusText} at ${error.url}`;
    return Observable.throw(msg);
  }
}