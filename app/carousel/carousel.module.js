"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var shared_module_1 = require("./../shared/shared.module");
var carousel_container_component_1 = require("./carousel-container.component");
var carousel_image_component_1 = require("./carousel-image.component");
var carousel_service_1 = require("./carousel.service");
var CarouselModule = (function () {
    function CarouselModule() {
    }
    return CarouselModule;
}());
CarouselModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule
        ],
        declarations: [
            carousel_container_component_1.CarouselContainerComponent,
            carousel_image_component_1.CarouselImageComponent
        ],
        exports: [
            carousel_container_component_1.CarouselContainerComponent,
            carousel_image_component_1.CarouselImageComponent
        ],
        providers: [
            carousel_service_1.CarouselService
        ]
    })
], CarouselModule);
exports.CarouselModule = CarouselModule;
//# sourceMappingURL=carousel.module.js.map