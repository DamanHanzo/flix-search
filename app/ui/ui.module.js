"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var shared_module_1 = require("./../shared/shared.module");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var navbar_component_1 = require("./navbar/navbar.component");
var search_bar_component_1 = require("./search/search-bar.component");
var footer_component_1 = require("./footer/footer.component");
var UIModule = (function () {
    function UIModule() {
    }
    return UIModule;
}());
UIModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [
            navbar_component_1.NavbarComponent,
            search_bar_component_1.SearchBarComponent,
            footer_component_1.FooterComponent
        ],
        exports: [
            navbar_component_1.NavbarComponent,
            search_bar_component_1.SearchBarComponent,
            footer_component_1.FooterComponent
        ]
    })
], UIModule);
exports.UIModule = UIModule;
//# sourceMappingURL=ui.module.js.map