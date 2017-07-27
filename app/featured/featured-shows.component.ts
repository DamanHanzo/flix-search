import { Component, OnInit } from '@angular/core';
import { Featured } from './featured';
import { FeaturedService } from './featured.service';

@Component({
  moduleId: module.id,
  selector: 'tv-featured-shows',
  templateUrl: 'featured-shows.template.html',
  styleUrls: ['styles.css']
})

export class FeaturedShowsComponent implements OnInit {
  shows: Featured[];
  errorMessage: string;

  constructor(private _featureService: FeaturedService) { }

  ngOnInit() {
    this.getFeaturedShows();
  }

  getFeaturedShows() {
    this._featureService.featuredShows()
           .subscribe(
              (shows: Featured[]) => {
                console.log(shows);
                this.shows = shows;
              },
              error => this.errorMessage = <any>error
             );
  }

}