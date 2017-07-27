import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';

import { DetailsComponent } from './details.component';

import { DetailsService } from './details.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'details/:show/:id', component: DetailsComponent }
      ])
  ],
  declarations: [
    DetailsComponent
  ],
  exports: [
    DetailsComponent
  ],
  providers: [
    DetailsService
  ]
})

export class DetailsModule { }