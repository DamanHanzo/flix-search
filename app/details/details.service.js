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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var DetailsService = (function () {
    function DetailsService(_http) {
        this._http = _http;
        this.tvMazeURL = 'https://api.tvmaze.com';
    }
    DetailsService.prototype.getShowDetails = function (id, show) {
        return Observable_1.Observable.forkJoin([
            this.getShowInfo(show),
            this.getEpisodes(id)
        ]);
    };
    DetailsService.prototype.getShowInfo = function (show) {
        return this._http
            .get(this.tvMazeURL + "/singlesearch/shows?q=" + show)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(data); })
            .catch(this.handleError);
    };
    DetailsService.prototype.getEpisodes = function (id) {
        return this._http
            .get(this.tvMazeURL + "/shows/" + id + "/episodes")
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(data); })
            .catch(this.handleError);
    };
    DetailsService.prototype.handleError = function (error) {
        var msg = "Error status code " + error.status + " status " + error.statusText + " at " + error.url;
        return Observable_1.Observable.throw(msg);
    };
    return DetailsService;
}());
DetailsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DetailsService);
exports.DetailsService = DetailsService;
//# sourceMappingURL=details.service.js.map