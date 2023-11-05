"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ViewPlansComponent = void 0;
var core_1 = require("@angular/core");
var dialog_component_1 = require("../dialog/dialog.component");
var ViewPlansComponent = /** @class */ (function () {
    function ViewPlansComponent(dialog) {
        this.dialog = dialog;
        this.pack = [
            {
                "serial": 0,
                "PackageId": 101,
                "Company": "Airtel",
                "PackageName": "Gamer 399",
                "Speed": 40,
                "Price": 399,
                "Duration": 81,
                "InstallationFee": 50,
                "Description": "Basic plan for Moderate Gaming for those who ant loww latency and higher data transfer speeds on a daily basis for long durations"
            },
            { "serial": 1,
                "PackageId": 541,
                "Company": "Jio",
                "PackageName": "IT 1299",
                "Speed": 200,
                "Price": 1299,
                "Duration": 120,
                "InstallationFee": 150,
                "Description": "High speed plan for Fast IT Industrial work"
            },
            {
                "serial": 2,
                "PackageId": 251,
                "Company": "Gigatel",
                "PackageName": "Entertainment 599",
                "Speed": 100,
                "Price": 599,
                "Duration": 81,
                "InstallationFee": 100,
                "Description": "Complete Family Plan for multiple family members"
            },
            {
                "serial": 3,
                "PackageId": 101,
                "Company": "Airtel",
                "PackageName": "Gamer 399",
                "Speed": 40,
                "Price": 399,
                "Duration": 81,
                "InstallationFee": 50,
                "Description": "Basic plan for Moderate Gaming for those who ant loww latency and higher data transfer speeds on a daily basis for long durations"
            },
            { "serial": 4,
                "PackageId": 541,
                "Company": "Jio",
                "PackageName": "IT 1299",
                "Speed": 200,
                "Price": 1299,
                "Duration": 120,
                "InstallationFee": 150,
                "Description": "High speed plan for Fast IT Industrial work"
            },
            {
                "serial": 5,
                "PackageId": 251,
                "Company": "Gigatel",
                "PackageName": "Entertainment 599",
                "Speed": 100,
                "Price": 599,
                "Duration": 81,
                "InstallationFee": 100,
                "Description": "Complete Family Plan for multiple family members"
            }
        ];
        this.len = this.pack.length;
    }
    ViewPlansComponent.prototype.openDialog = function (item) {
        var dialogRef = this.dialog.open(dialog_component_1.DialogComponent, {
            width: '6000px',
            height: '1000px',
            data: this.pack[item]
        });
    };
    ViewPlansComponent = __decorate([
        core_1.Component({
            selector: 'app-view-plans',
            templateUrl: './view-plans.component.html',
            styleUrls: ['./view-plans.component.css']
        })
    ], ViewPlansComponent);
    return ViewPlansComponent;
}());
exports.ViewPlansComponent = ViewPlansComponent;
