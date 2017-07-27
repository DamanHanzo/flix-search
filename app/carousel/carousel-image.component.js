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
var CarouselImageComponent = (function () {
    function CarouselImageComponent() {
    }
    return CarouselImageComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CarouselImageComponent.prototype, "slide", void 0);
CarouselImageComponent = __decorate([
    core_1.Component({
        selector: 'tv-carousel-image',
        template: "\n    <img src=\"{{ slide.image }}\" alt=\"{{ slide.title }}\">\n      <div class=\"carousel-caption\">\n        <h2>{{ slide.title }}</h2>\n      </div>\n  "
    })
], CarouselImageComponent);
exports.CarouselImageComponent = CarouselImageComponent;
//# sourceMappingURL=carousel-image.component.js.map