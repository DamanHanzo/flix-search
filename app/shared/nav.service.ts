import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NavService {

  // Observable navItem source
  private _navItemSource = new BehaviorSubject<string>(null);

  // Observable navItem stream
  navItem$ = this._navItemSource.asObservable();

  // service command
  changeNav(query: string) {
    this._navItemSource.next(query);
  }
}



// http://stackoverflow.com/questions/34376854/delegation-eventemitter-or-observable-in-angular2

// http://plnkr.co/edit/XqwwUM44NQEpxQVFFxNW?p=preview

// BehaviorSubject
// An observable sequence that hides the identity of the source sequence.