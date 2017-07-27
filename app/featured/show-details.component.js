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
var ShowDetailsComponent = (function () {
    function ShowDetailsComponent() {
    }
    return ShowDetailsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ShowDetailsComponent.prototype, "show", void 0);
ShowDetailsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'tv-show-details',
        styleUrls: ['styles.css'],
        template: "\n      <article class=\"card\">\n      <header class=\"title-header\">\n        <h3 class=\"card-title\">{{ show.name }}</h3>\n      </header>\n      <div class=\"card-block\">\n        <div class=\"img-card\">\n          <img [src]=\"show.image\" alt=\"Movie\" class=\"w-100 poster\" />\n        </div>\n        <p class=\"tagline card-text text-xs-center\">{{ show.network }}</p>\n        <a target=\"_blank\" [href]=\"show.link\" class=\"btn btn-primary btn-block\">\n          <i class=\"fa fa-eye\"></i> Details</a>\n      </div>\n    </article>\n  "
    })
], ShowDetailsComponent);
exports.ShowDetailsComponent = ShowDetailsComponent;
//# sourceMappingURL=show-details.component.js.map