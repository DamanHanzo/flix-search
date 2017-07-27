import { Component, OnInit } from '@angular/core';
import { Carousel } from './carousel';
import { CarouselService } from './carousel.service';

@Component({
  moduleId: module.id,
  selector: 'tv-carousel-container',
  templateUrl: 'carousel-container.template.html'
})

export class CarouselContainerComponent implements OnInit {
  slides: Carousel[];
  errorMessage: string;

  constructor(private _carouselService: CarouselService) { }

  ngOnInit() {
    this.getSlides();
  }

  getSlides() {
    this._carouselService.featured()
      .subscribe(
        slides => this.slides = slides,
        error => this.errorMessage = <any>error
        );
  }

}