"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.taskName = '';
        this.taskDate = '';
        this.config = null;
        this.tasks = [
            {
                name: 'Siłownia',
                deadline: '2020-02-20',
                done: false
            },
            {
                name: 'Nauka Angulara',
                deadline: '2020-02-21',
                done: false
            },
            {
                name: 'Śpiewanie',
                deadline: '2020-05-10',
                done: false
            }
        ];
        setTimeout(function () {
            _this.config = {
                title: 'Lista Zadań',
                footer: '© Lista zadań, All rights reserved.',
                date: new Date().toDateString()
            };
        }, 500);
    }
    AppComponent.prototype.clearTasks = function () {
        this.tasks = [];
    };
    AppComponent.prototype.createTask = function () {
        var task = {
            name: this.taskName,
            deadline: this.taskDate,
            done: false
        };
        this.tasks.push(task);
        this.taskName = '';
        this.taskDate = '';
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
