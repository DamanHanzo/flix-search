import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

import { FeaturedShowsComponent } from './featured-shows.component';
import { ShowDetailsComponent } from './show-details.component';

import { FeaturedService } from './featured.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    FeaturedShowsComponent,
    ShowDetailsComponent
  ],
  exports: [
    FeaturedShowsComponent,
    ShowDetailsComponent
  ],
  providers: [
    FeaturedService
  ]
})

export class FeaturedModule { }