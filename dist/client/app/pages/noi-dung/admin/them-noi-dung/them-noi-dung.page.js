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
var noidung_service_1 = require("../../../../components/noi-dung/shared/noidung.service");
var ThemNoiDungPage = /** @class */ (function () {
    function ThemNoiDungPage(router, service) {
        this.router = router;
        this.service = service;
    }
    ThemNoiDungPage.prototype.onEmitValue = function (value) {
        var _this = this;
        this.service.createNoiDung(value)
            .then(function (result) { return console.log("success " + result); })
            .catch(function (error) { return console.error('Error Khi Create Noi Dung', error); })
            .then(function () { return _this.onClose(); });
    };
    ThemNoiDungPage.prototype.onClose = function () {
        this.router.navigate(['/admin/quan-ly-noi-dung']);
    };
    ThemNoiDungPage = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'them-noi-dung-page',
            templateUrl: './them-noi-dung.page.html',
            styleUrls: ['./them-noi-dung.page.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, noidung_service_1.NoiDungService])
    ], ThemNoiDungPage);
    return ThemNoiDungPage;
}());
exports.ThemNoiDungPage = ThemNoiDungPage;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9ub2ktZHVuZy9hZG1pbi90aGVtLW5vaS1kdW5nL3RoZW0tbm9pLWR1bmcucGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUMxQywwQ0FBeUM7QUFFekMsMEZBQXdGO0FBUXhGO0lBRUkseUJBQW9CLE1BQWMsRUFBVSxPQUF1QjtRQUEvQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7SUFBSSxDQUFDO0lBRWhFLHFDQUFXLEdBQW5CLFVBQW9CLEtBQUs7UUFBekIsaUJBS0M7UUFKRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7YUFDNUIsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFXLE1BQVEsQ0FBQyxFQUFoQyxDQUFnQyxDQUFDO2FBQ2hELEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsMkJBQTJCLEVBQUUsS0FBSyxDQUFDLEVBQWpELENBQWlELENBQUM7YUFDakUsSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxFQUFFLEVBQWQsQ0FBYyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVPLGlDQUFPLEdBQWY7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBYlEsZUFBZTtRQU4zQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUMxQyxDQUFDO3lDQUc4QixlQUFNLEVBQW1CLGdDQUFjO09BRjFELGVBQWUsQ0FjM0I7SUFBRCxzQkFBQztDQWRELEFBY0MsSUFBQTtBQWRZLDBDQUFlIiwiZmlsZSI6ImFwcC9wYWdlcy9ub2ktZHVuZy9hZG1pbi90aGVtLW5vaS1kdW5nL3RoZW0tbm9pLWR1bmcucGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgTm9pRHVuZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL25vaS1kdW5nL3NoYXJlZC9ub2lkdW5nLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICd0aGVtLW5vaS1kdW5nLXBhZ2UnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RoZW0tbm9pLWR1bmcucGFnZS5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3RoZW0tbm9pLWR1bmcucGFnZS5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGhlbU5vaUR1bmdQYWdlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHNlcnZpY2U6IE5vaUR1bmdTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBwcml2YXRlIG9uRW1pdFZhbHVlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmNyZWF0ZU5vaUR1bmcodmFsdWUpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiBjb25zb2xlLmxvZyhgc3VjY2VzcyAke3Jlc3VsdH1gKSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIEtoaSBDcmVhdGUgTm9pIER1bmcnLCBlcnJvcikpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMub25DbG9zZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYWRtaW4vcXVhbi1seS1ub2ktZHVuZyddKTtcclxuICAgIH1cclxufSJdfQ==
