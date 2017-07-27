"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var NavService = (function () {
    function NavService() {
        // Observable navItem source
        this._navItemSource = new BehaviorSubject_1.BehaviorSubject(null);
        // Observable navItem stream
        this.navItem$ = this._navItemSource.asObservable();
    }
    // service command
    NavService.prototype.changeNav = function (query) {
        this._navItemSource.next(query);
    };
    return NavService;
}());
NavService = __decorate([
    core_1.Injectable()
], NavService);
exports.NavService = NavService;
// http://stackoverflow.com/questions/34376854/delegation-eventemitter-or-observable-in-angular2
// http://plnkr.co/edit/XqwwUM44NQEpxQVFFxNW?p=preview
// BehaviorSubject
// An observable sequence that hides the identity of the source sequence. 
//# sourceMappingURL=nav.service.js.map