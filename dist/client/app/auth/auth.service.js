"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
require("rxjs/add/operator/do");
require("rxjs/add/operator/delay");
var AuthService = /** @class */ (function () {
    function AuthService() {
        this.isLoggedIn = false;
    }
    AuthService.prototype.login = function () {
        var _this = this;
        return Observable_1.Observable.of(true).delay(1000).do(function (val) { return _this.isLoggedIn = true; });
    };
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
    };
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUEyQztBQUUzQyw4Q0FBNkM7QUFDN0Msa0NBQWdDO0FBQ2hDLGdDQUE4QjtBQUM5QixtQ0FBaUM7QUFHakM7SUFEQTtRQUVJLGVBQVUsR0FBWSxLQUFLLENBQUM7SUFZaEMsQ0FBQztJQVBHLDJCQUFLLEdBQUw7UUFBQSxpQkFFQztRQURHLE9BQU8sdUJBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxFQUF0QixDQUFzQixDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELDRCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBWlEsV0FBVztRQUR2QixpQkFBVSxFQUFFO09BQ0EsV0FBVyxDQWF2QjtJQUFELGtCQUFDO0NBYkQsQUFhQyxJQUFBO0FBYlksa0NBQVciLCJmaWxlIjoiYXBwL2F1dGgvYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9vZic7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RlbGF5JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuICAgIGlzTG9nZ2VkSW46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvLyBzdG9yZSB0aGUgVVJMIHNvIHdlIGNhbiByZWRpcmVjdCBhZnRlciBsb2dnaW5nIGluXHJcbiAgICByZWRpcmVjdFVybDogc3RyaW5nO1xyXG5cclxuICAgIGxvZ2luKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKHRydWUpLmRlbGF5KDEwMDApLmRvKHZhbCA9PiB0aGlzLmlzTG9nZ2VkSW4gPSB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dvdXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gZmFsc2U7XHJcbiAgICB9XHJcbn0iXX0=
