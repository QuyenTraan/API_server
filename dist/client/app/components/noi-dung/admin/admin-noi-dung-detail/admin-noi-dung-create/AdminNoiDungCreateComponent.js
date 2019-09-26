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
var angular2_modal_1 = require("angular2-modal");
var noidung_service_1 = require("../../../shared/noidung.service");
var AdminNoiDungCreateComponent = /** @class */ (function () {
    function AdminNoiDungCreateComponent(noiDungService, dialog) {
        this.noiDungService = noiDungService;
        this.dialog = dialog;
    }
    AdminNoiDungCreateComponent.prototype.onEmitValue = function (value) {
        var _this = this;
        this.noiDungService.createNoiDung(value)
            .then(function (result) { return console.log("success " + result); })
            .catch(function (error) { return console.error('Error Khi Create Noi Dung', error); })
            .then(function () { return _this.onClose(false); });
    };
    AdminNoiDungCreateComponent.prototype.onClose = function (isExit) {
        this.dialog.close({ exit: isExit });
    };
    AdminNoiDungCreateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'admin-noi-dung-create',
            templateUrl: './admin-noi-dung-create.component.html',
            styleUrls: ['./admin-noi-dung-create.component.css']
        }),
        __metadata("design:paramtypes", [noidung_service_1.NoiDungService, angular2_modal_1.DialogRef])
    ], AdminNoiDungCreateComponent);
    return AdminNoiDungCreateComponent;
}());
exports.AdminNoiDungCreateComponent = AdminNoiDungCreateComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL25vaS1kdW5nL2FkbWluL2FkbWluLW5vaS1kdW5nLWRldGFpbC9hZG1pbi1ub2ktZHVuZy1jcmVhdGUvQWRtaW5Ob2lEdW5nQ3JlYXRlQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBQzFDLGlEQUF1RTtBQUN2RSxtRUFBaUU7QUFRakU7SUFDSSxxQ0FBb0IsY0FBOEIsRUFBUyxNQUErQjtRQUF0RSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUF5QjtJQUMxRixDQUFDO0lBQ08saURBQVcsR0FBbkIsVUFBb0IsS0FBSztRQUF6QixpQkFLQztRQUpHLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQzthQUNuQyxJQUFJLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQVcsTUFBUSxDQUFDLEVBQWhDLENBQWdDLENBQUM7YUFDaEQsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsRUFBRSxLQUFLLENBQUMsRUFBakQsQ0FBaUQsQ0FBQzthQUNqRSxJQUFJLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQW5CLENBQW1CLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ08sNkNBQU8sR0FBZixVQUFnQixNQUFlO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQVhRLDJCQUEyQjtRQU52QyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsV0FBVyxFQUFFLHdDQUF3QztZQUNyRCxTQUFTLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQztTQUN2RCxDQUFDO3lDQUVzQyxnQ0FBYyxFQUFpQiwwQkFBUztPQURuRSwyQkFBMkIsQ0FZdkM7SUFBRCxrQ0FBQztDQVpELEFBWUMsSUFBQTtBQVpZLGtFQUEyQiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9ub2ktZHVuZy9hZG1pbi9hZG1pbi1ub2ktZHVuZy1kZXRhaWwvYWRtaW4tbm9pLWR1bmctY3JlYXRlL0FkbWluTm9pRHVuZ0NyZWF0ZUNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEaWFsb2dSZWYsIE1vZGFsQ29tcG9uZW50LCBDbG9zZUd1YXJkIH0gZnJvbSAnYW5ndWxhcjItbW9kYWwnO1xyXG5pbXBvcnQgeyBOb2lEdW5nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9ub2lkdW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNb2RhbENvbnRleHQgfSBmcm9tICcuL2FkbWluLW5vaS1kdW5nLWNyZWF0ZS5jb21wb25lbnQnO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ2FkbWluLW5vaS1kdW5nLWNyZWF0ZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vYWRtaW4tbm9pLWR1bmctY3JlYXRlLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2FkbWluLW5vaS1kdW5nLWNyZWF0ZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFkbWluTm9pRHVuZ0NyZWF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIENsb3NlR3VhcmQsIE1vZGFsQ29tcG9uZW50PE1vZGFsQ29udGV4dD4ge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBub2lEdW5nU2VydmljZTogTm9pRHVuZ1NlcnZpY2UsIHB1YmxpYyBkaWFsb2c6IERpYWxvZ1JlZjxNb2RhbENvbnRleHQ+KSB7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIG9uRW1pdFZhbHVlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5ub2lEdW5nU2VydmljZS5jcmVhdGVOb2lEdW5nKHZhbHVlKVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2coYHN1Y2Nlc3MgJHtyZXN1bHR9YCkpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBLaGkgQ3JlYXRlIE5vaSBEdW5nJywgZXJyb3IpKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLm9uQ2xvc2UoZmFsc2UpKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgb25DbG9zZShpc0V4aXQ6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmRpYWxvZy5jbG9zZSh7IGV4aXQ6IGlzRXhpdCB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=
