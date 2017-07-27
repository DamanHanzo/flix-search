import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

import { CarouselContainerComponent } from './carousel-container.component';
import { CarouselImageComponent } from './carousel-image.component';

import { CarouselService } from './carousel.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    CarouselContainerComponent,
    CarouselImageComponent
  ],
  exports: [
    CarouselContainerComponent,
    CarouselImageComponent
  ],
  providers: [
    CarouselService
  ]
})

export class CarouselModule { }