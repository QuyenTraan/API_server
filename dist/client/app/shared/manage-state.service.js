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
var ng2_webstorage_1 = require("ng2-webstorage");
var core_2 = require("angular2-cookie/core");
var ManageStateService = /** @class */ (function () {
    function ManageStateService(localStorageService, sessionStorageService, cookieService) {
        this.localStorageService = localStorageService;
        this.sessionStorageService = sessionStorageService;
        this.cookieService = cookieService;
    }
    ManageStateService.prototype.save = function (key, value) {
        this.cookieService.putObject(key, value);
    };
    ManageStateService.prototype.load = function (key) {
        return this.cookieService.getObject(key);
    };
    ManageStateService.prototype.saveSession = function (key, value) {
        this.sessionStorageService.store(key, value);
    };
    ManageStateService.prototype.loadSession = function (key) {
        return this.sessionStorageService.retrieve(key);
    };
    ManageStateService.prototype.clear = function (key) {
        this.cookieService.remove(key);
    };
    ManageStateService.prototype.clearSession = function () {
        this.sessionStorageService.clear();
    };
    ManageStateService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [ng2_webstorage_1.LocalStorageService,
            ng2_webstorage_1.SessionStorageService,
            core_2.CookieService])
    ], ManageStateService);
    return ManageStateService;
}());
exports.ManageStateService = ManageStateService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbWFuYWdlLXN0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MsaURBQTRFO0FBQzVFLDZDQUFxRDtBQUdyRDtJQUVJLDRCQUFvQixtQkFBd0MsRUFDaEQscUJBQTRDLEVBQzVDLGFBQTRCO1FBRnBCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDaEQsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1QyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUN4QyxDQUFDO0lBRU0saUNBQUksR0FBWCxVQUFZLEdBQVcsRUFBRSxLQUFVO1FBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU0saUNBQUksR0FBWCxVQUFZLEdBQVc7UUFDbkIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRU0sd0NBQVcsR0FBbEIsVUFBbUIsR0FBVyxFQUFFLEtBQVU7UUFDdEMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVNLHdDQUFXLEdBQWxCLFVBQW1CLEdBQVc7UUFDMUIsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFTSxrQ0FBSyxHQUFaLFVBQWEsR0FBVztRQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU0seUNBQVksR0FBbkI7UUFDSSxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQTdCUSxrQkFBa0I7UUFEOUIsaUJBQVUsRUFBRTt5Q0FHZ0Msb0NBQW1CO1lBQ3pCLHNDQUFxQjtZQUM3QixvQkFBYTtPQUovQixrQkFBa0IsQ0E4QjlCO0lBQUQseUJBQUM7Q0E5QkQsQUE4QkMsSUFBQTtBQTlCWSxnREFBa0IiLCJmaWxlIjoiYXBwL3NoYXJlZC9tYW5hZ2Utc3RhdGUuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSwgU2Vzc2lvblN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnbmcyLXdlYnN0b3JhZ2UnO1xyXG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhcjItY29va2llL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTWFuYWdlU3RhdGVTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2FsU3RvcmFnZVNlcnZpY2U6IExvY2FsU3RvcmFnZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBzZXNzaW9uU3RvcmFnZVNlcnZpY2U6IFNlc3Npb25TdG9yYWdlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGNvb2tpZVNlcnZpY2U6IENvb2tpZVNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2F2ZShrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuY29va2llU2VydmljZS5wdXRPYmplY3Qoa2V5LCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWQoa2V5OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0T2JqZWN0KGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNhdmVTZXNzaW9uKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uU3RvcmFnZVNlcnZpY2Uuc3RvcmUoa2V5LCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRTZXNzaW9uKGtleTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXNzaW9uU3RvcmFnZVNlcnZpY2UucmV0cmlldmUoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXIoa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2UucmVtb3ZlKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyU2Vzc2lvbigpIHtcclxuICAgICAgICB0aGlzLnNlc3Npb25TdG9yYWdlU2VydmljZS5jbGVhcigpO1xyXG4gICAgfVxyXG59Il19
