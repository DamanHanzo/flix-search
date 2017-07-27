import { Component, Input } from '@angular/core';
import { Carousel } from './carousel';

@Component({
  selector: 'tv-carousel-image',
  template: `
    <img src="{{ slide.image }}" alt="{{ slide.title }}">
      <div class="carousel-caption">
        <h2>{{ slide.title }}</h2>
      </div>
  `
})

export class CarouselImageComponent {
  @Input() slide: Carousel;
}