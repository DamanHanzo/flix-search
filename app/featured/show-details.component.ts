import { Component, Input } from '@angular/core';
import { Featured } from './featured';

@Component({
  moduleId: module.id,
  selector: 'tv-show-details',
  styleUrls: ['styles.css'],
  template: `
      <article class="card">
      <header class="title-header">
        <h3 class="card-title">{{ show.name }}</h3>
      </header>
      <div class="card-block">
        <div class="img-card">
          <img [src]="show.image" alt="Movie" class="w-100 poster" />
        </div>
        <p class="tagline card-text text-xs-center">{{ show.network }}</p>
        <a target="_blank" [href]="show.link" class="btn btn-primary btn-block">
          <i class="fa fa-eye"></i> Details</a>
      </div>
    </article>
  `
})

export class ShowDetailsComponent {
  @Input() show: Featured;
}