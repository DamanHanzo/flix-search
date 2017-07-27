"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var shared_module_1 = require("./../shared/shared.module");
var featured_shows_component_1 = require("./featured-shows.component");
var show_details_component_1 = require("./show-details.component");
var featured_service_1 = require("./featured.service");
var FeaturedModule = (function () {
    function FeaturedModule() {
    }
    return FeaturedModule;
}());
FeaturedModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule
        ],
        declarations: [
            featured_shows_component_1.FeaturedShowsComponent,
            show_details_component_1.ShowDetailsComponent
        ],
        exports: [
            featured_shows_component_1.FeaturedShowsComponent,
            show_details_component_1.ShowDetailsComponent
        ],
        providers: [
            featured_service_1.FeaturedService
        ]
    })
], FeaturedModule);
exports.FeaturedModule = FeaturedModule;
//# sourceMappingURL=featured.module.js.map