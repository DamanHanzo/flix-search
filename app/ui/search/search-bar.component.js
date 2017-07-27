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
var nav_service_1 = require("../../shared/nav.service");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var SearchBarComponent = (function () {
    function SearchBarComponent(_fb, _router, _navService) {
        this._fb = _fb;
        this._router = _router;
        this._navService = _navService;
    }
    SearchBarComponent.prototype.ngOnInit = function () {
        this.searchForm = this._fb.group({
            query: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]]
        });
    };
    SearchBarComponent.prototype.search = function (_a) {
        var value = _a.value;
        console.log(value.query);
        this._navService.changeNav(value.query);
        this.searchForm.reset();
        this._router.navigate(["/search"]);
    };
    return SearchBarComponent;
}());
SearchBarComponent = __decorate([
    core_1.Component({
        selector: 'tv-search-bar',
        template: "\n  <div *ngIf=\"_router.url != '/search'\">\n    <form class=\"form-inline float-xs-right\"\n                (ngSubmit)=\"search(searchForm)\"\n                [formGroup]=\"searchForm\">\n      <input class=\"form-control\"\n                   type=\"text\"\n                   formControlName=\"query\"\n                   placeholder=\"Search\">\n         <button class=\"btn btn-outline-success\"\n                        type=\"submit\">Search\n              </button>\n            </form>\n         </div>\n  "
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.Router,
        nav_service_1.NavService])
], SearchBarComponent);
exports.SearchBarComponent = SearchBarComponent;
//# sourceMappingURL=search-bar.component.js.map