"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var carousel_service_1 = require("./carousel.service");
var CarouselContainerComponent = (function () {
    function CarouselContainerComponent(_carouselService) {
        this._carouselService = _carouselService;
    }
    CarouselContainerComponent.prototype.ngOnInit = function () {
        this.getSlides();
    };
    CarouselContainerComponent.prototype.getSlides = function () {
        var _this = this;
        this._carouselService.featured()
            .subscribe(function (slides) { return _this.slides = slides; }, function (error) { return _this.errorMessage = error; });
    };
    return CarouselContainerComponent;
}());
CarouselContainerComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'tv-carousel-container',
        templateUrl: 'carousel-container.template.html'
    }),
    __metadata("design:paramtypes", [carousel_service_1.CarouselService])
], CarouselContainerComponent);
exports.CarouselContainerComponent = CarouselContainerComponent;
//# sourceMappingURL=carousel-container.component.js.map