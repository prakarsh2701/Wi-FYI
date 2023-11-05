"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var booking_component_1 = require("./Components/BookingComponent/booking.component");
var platform_browser_1 = require("@angular/platform-browser");
var check_plans_component_1 = require("./Components/check-plans/check-plans.component");
var footer_component_1 = require("./Components/footer/footer.component");
var http_1 = require("@angular/common/http");
var header_component_1 = require("./Components/header/header.component");
var home_component_1 = require("./Components/home/home.component");
var core_1 = require("@angular/core");
var slider_component_1 = require("./Components/slider/slider.component");
var view_plans_component_1 = require("./Components/view-plans/view-plans.component");
var icon_1 = require("@angular/material/icon");
var divider_1 = require("@angular/material/divider");
var button_1 = require("@angular/material/button");
var animations_1 = require("@angular/platform-browser/animations");
var card_1 = require("@angular/material/card");
var dialog_component_1 = require("./Components/dialog/dialog.component");
var dialog_1 = require("@angular/material/dialog");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent, booking_component_1.BookingComponent, check_plans_component_1.CheckPlansComponent,
                footer_component_1.FooterComponent, header_component_1.HeaderComponent, home_component_1.HomeComponent, slider_component_1.SliderComponent,
                view_plans_component_1.ViewPlansComponent,
                dialog_component_1.DialogComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, http_1.HttpClientModule,
                button_1.MatButtonModule, divider_1.MatDividerModule, icon_1.MatIconModule, animations_1.BrowserAnimationsModule,
                card_1.MatCardModule, dialog_1.MatDialogModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
