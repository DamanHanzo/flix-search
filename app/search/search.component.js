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
var forms_1 = require("@angular/forms");
var search_service_1 = require("./search.service");
var nav_service_1 = require("../shared/nav.service");
var SearchComponent = (function () {
    function SearchComponent(_fb, _searchService, _navService) {
        this._fb = _fb;
        this._searchService = _searchService;
        this._navService = _navService;
        this.isLoading = false;
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.getQuery();
        if (this.item) {
            this.searchFromBar();
        }
        this.searchForm = this._fb.group({
            query: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]]
        });
    };
    SearchComponent.prototype.getQuery = function () {
        var _this = this;
        this.subscription = this._navService.navItem$
            .subscribe(function (item) {
            _this.item = item;
        }, function (error) { return _this.errorMessage = error; });
    };
    SearchComponent.prototype.searchFromBar = function () {
        var _this = this;
        this.isLoading = true;
        this._searchService
            .search(this.item)
            .subscribe(function (shows) {
            console.log(shows);
            _this.isLoading = false;
            _this.shows = shows;
        }, function (error) { return _this.errorMessage = error; });
    };
    SearchComponent.prototype.searchShows = function (_a) {
        var _this = this;
        var value = _a.value;
        console.log(value.query);
        this.isLoading = true;
        this.resetSearch();
        this._searchService
            .search(value.query)
            .subscribe(function (shows) {
            console.log(shows);
            _this.isLoading = false;
            _this.shows = shows;
        }, function (error) { return _this.errorMessage = error; });
    };
    SearchComponent.prototype.resetSearch = function () {
        this.errorMessage = null;
        this.shows = null;
        this.searchForm.reset();
    };
    SearchComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component is destroyed
        this.subscription.unsubscribe();
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'search.template.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        search_service_1.SearchService,
        nav_service_1.NavService])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map