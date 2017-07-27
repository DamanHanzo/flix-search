import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { SearchBarComponent } from './search/search-bar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    NavbarComponent,
    SearchBarComponent,
    FooterComponent
  ],
  exports: [
    NavbarComponent,
    SearchBarComponent,
    FooterComponent
  ]
})

export class UIModule { }