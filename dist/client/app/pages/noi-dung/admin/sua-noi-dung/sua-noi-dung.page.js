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
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/first");
var SuaNoiDungPage = /** @class */ (function () {
    function SuaNoiDungPage(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    SuaNoiDungPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.first().toPromise()
            .then(function (params) { return _this.service.getNoiDungByID(params['id']); })
            .then(function (result) { return _this._noiDung = result.data; })
            .catch(function (error) { return console.error('Error khi get noi dung', error); });
    };
    SuaNoiDungPage.prototype.onEmitValue = function (value) {
        var _this = this;
        this.service.updateNoiDung(value)
            .then(function (result) { return console.log("success " + result); })
            .catch(function (error) { return console.error('error khi update', error); })
            .then(function () { return _this.onClose(); });
    };
    SuaNoiDungPage.prototype.onClose = function () {
        this.router.navigate(['/admin/quan-ly-noi-dung']);
    };
    SuaNoiDungPage = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sua-noi-dung-page',
            templateUrl: './sua-noi-dung.page.html',
            styleUrls: ['./sua-noi-dung.page.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, noidung_service_1.NoiDungService])
    ], SuaNoiDungPage);
    return SuaNoiDungPage;
}());
exports.SuaNoiDungPage = SuaNoiDungPage;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9ub2ktZHVuZy9hZG1pbi9zdWEtbm9pLWR1bmcvc3VhLW5vaS1kdW5nLnBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQWlFO0FBQ2pFLDBGQUF3RjtBQUV4Rix1Q0FBcUM7QUFDckMsbUNBQWlDO0FBUWpDO0lBRUksd0JBQW9CLEtBQXFCLEVBQVUsTUFBYyxFQUFVLE9BQXVCO1FBQTlFLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWdCO0lBQUksQ0FBQztJQUV2RyxpQ0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxTQUFTLEVBQUU7YUFDaEMsSUFBSSxDQUFDLFVBQUMsTUFBYyxJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQXpDLENBQXlDLENBQUM7YUFDbkUsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxFQUEzQixDQUEyQixDQUFDO2FBQzNDLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLEVBQTlDLENBQThDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBR08sb0NBQVcsR0FBbkIsVUFBb0IsS0FBSztRQUF6QixpQkFLQztRQUpHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQzthQUM1QixJQUFJLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQVcsTUFBUSxDQUFDLEVBQWhDLENBQWdDLENBQUM7YUFDaEQsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsRUFBeEMsQ0FBd0MsQ0FBQzthQUN4RCxJQUFJLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLEVBQUUsRUFBZCxDQUFjLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU8sZ0NBQU8sR0FBZjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFyQlEsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN6QyxDQUFDO3lDQUc2Qix1QkFBYyxFQUFrQixlQUFNLEVBQW1CLGdDQUFjO09BRnpGLGNBQWMsQ0FzQjFCO0lBQUQscUJBQUM7Q0F0QkQsQUFzQkMsSUFBQTtBQXRCWSx3Q0FBYyIsImZpbGUiOiJhcHAvcGFnZXMvbm9pLWR1bmcvYWRtaW4vc3VhLW5vaS1kdW5nL3N1YS1ub2ktZHVuZy5wYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTm9pRHVuZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL25vaS1kdW5nL3NoYXJlZC9ub2lkdW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOb2lEdW5nIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9ub2ktZHVuZy9zaGFyZWQvbm9pZHVuZy5tb2RlbCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maXJzdCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ3N1YS1ub2ktZHVuZy1wYWdlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9zdWEtbm9pLWR1bmcucGFnZS5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3N1YS1ub2ktZHVuZy5wYWdlLmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWFOb2lEdW5nUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwcml2YXRlIF9ub2lEdW5nOiBOb2lEdW5nO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc2VydmljZTogTm9pRHVuZ1NlcnZpY2UpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucm91dGUucGFyYW1zLmZpcnN0KCkudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKHBhcmFtczogUGFyYW1zKSA9PiB0aGlzLnNlcnZpY2UuZ2V0Tm9pRHVuZ0J5SUQocGFyYW1zWydpZCddKSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHRoaXMuX25vaUR1bmcgPSByZXN1bHQuZGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGtoaSBnZXQgbm9pIGR1bmcnLCBlcnJvcikpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIG9uRW1pdFZhbHVlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnVwZGF0ZU5vaUR1bmcodmFsdWUpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiBjb25zb2xlLmxvZyhgc3VjY2VzcyAke3Jlc3VsdH1gKSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ2Vycm9yIGtoaSB1cGRhdGUnLCBlcnJvcikpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMub25DbG9zZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYWRtaW4vcXVhbi1seS1ub2ktZHVuZyddKTtcclxuICAgIH1cclxufSJdfQ==
