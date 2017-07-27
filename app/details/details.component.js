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
var router_1 = require("@angular/router");
var details_service_1 = require("./details.service");
var DetailsComponent = (function () {
    function DetailsComponent(route, _detailsService) {
        this.route = route;
        this._detailsService = _detailsService;
        this.isLoading = false;
        console.log(this.route.snapshot.params['id']);
        console.log(this.route.snapshot.params['show']);
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.params['id']; //the plus is used to convert a number to a string
        var show = this.route.snapshot.params['show'];
        this.getShowDetails(id, show);
    };
    DetailsComponent.prototype.getShowDetails = function (id, show) {
        var _this = this;
        this.isLoading = true;
        this._detailsService.getShowDetails(id, show)
            .subscribe(function (results) {
            console.log(results);
            _this.isLoading = false;
            _this.details = results[0];
            _this.Episodes = results[1];
        }, function (error) { return _this.errorMessage = error; });
    };
    return DetailsComponent;
}());
DetailsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'details.template.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        details_service_1.DetailsService])
], DetailsComponent);
exports.DetailsComponent = DetailsComponent;
//# sourceMappingURL=details.component.js.map