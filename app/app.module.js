"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_1 = require("./app.routing");
var ui_module_1 = require("./ui/ui.module");
var carousel_module_1 = require("./carousel/carousel.module");
var featured_module_1 = require("./featured/featured.module");
var search_module_1 = require("./search/search.module");
var details_module_1 = require("./details/details.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
require("./shared/rxjs-extensions");
var nav_service_1 = require("./shared/nav.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            ui_module_1.UIModule,
            carousel_module_1.CarouselModule,
            featured_module_1.FeaturedModule,
            search_module_1.SearchModule,
            details_module_1.DetailsModule,
            app_routing_1.AppRoutingModule,
        ],
        declarations: [app_component_1.AppComponent,
            home_component_1.HomeComponent
        ],
        providers: [nav_service_1.NavService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map