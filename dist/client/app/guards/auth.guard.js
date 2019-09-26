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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_service_1 = require("../auth/auth.service");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this._authService.isLoggedIn) {
            return true;
        }
        this._authService.redirectUrl = url;
        this._router.navigate(['admin/login']);
        return false;
    };
    AuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ndWFyZHMvYXV0aC5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQywwQ0FBbUc7QUFDbkcscURBQW1EO0FBR25EO0lBRUksbUJBQW9CLFlBQXlCLEVBQVUsT0FBZTtRQUFsRCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFBSSxDQUFDO0lBRTNFLCtCQUFXLEdBQVgsVUFBWSxLQUE2QixFQUFFLEtBQTBCO1FBQ2pFLElBQUksR0FBRyxHQUFXLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFFNUIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFTyw4QkFBVSxHQUFsQixVQUFtQixHQUFXO1FBQzFCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUU7WUFDOUIsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDdkMsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQWxCUSxTQUFTO1FBRHJCLGlCQUFVLEVBQUU7eUNBR3lCLDBCQUFXLEVBQW1CLGVBQU07T0FGN0QsU0FBUyxDQW1CckI7SUFBRCxnQkFBQztDQW5CRCxBQW1CQyxJQUFBO0FBbkJZLDhCQUFTIiwiZmlsZSI6ImFwcC9ndWFyZHMvYXV0aC5ndWFyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlciwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC9hdXRoLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHsgfVxyXG5cclxuICAgIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCB1cmw6IHN0cmluZyA9IHN0YXRlLnVybDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tMb2dpbih1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tMb2dpbih1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLl9hdXRoU2VydmljZS5pc0xvZ2dlZEluKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2UucmVkaXJlY3RVcmwgPSB1cmw7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnYWRtaW4vbG9naW4nXSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59Il19
