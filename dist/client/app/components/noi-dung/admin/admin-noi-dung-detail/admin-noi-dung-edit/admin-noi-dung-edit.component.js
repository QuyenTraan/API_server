"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var bootstrap_1 = require("angular2-modal/plugins/bootstrap");
var noidung_service_1 = require("../../../shared/noidung.service");
var ModalContext = /** @class */ (function (_super) {
    __extends(ModalContext, _super);
    function ModalContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ModalContext;
}(bootstrap_1.BSModalContext));
exports.ModalContext = ModalContext;
var AdminNoiDungEditComponent = /** @class */ (function () {
    function AdminNoiDungEditComponent(noiDungService, dialog) {
        this.noiDungService = noiDungService;
        this.dialog = dialog;
    }
    AdminNoiDungEditComponent.prototype.ngOnInit = function () {
        this.getNoiDungById(this.dialog.context.id);
    };
    AdminNoiDungEditComponent.prototype.getNoiDungById = function (id) {
        var _this = this;
        this.noiDungService.getNoiDungByID(id)
            .then(function (result) {
            _this._noiDung = result.data;
        });
    };
    AdminNoiDungEditComponent.prototype.onEmitValue = function (value) {
        var _this = this;
        this.noiDungService.updateNoiDung(value)
            .then(function (result) { return console.log("success " + result); })
            .catch(function (error) { return console.error('error khi update', error); })
            .then(function () { return _this.onClose(false); });
    };
    AdminNoiDungEditComponent.prototype.onClose = function (isExit) {
        this.dialog.close({ exit: isExit });
    };
    AdminNoiDungEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'admin-noi-dung-edit',
            templateUrl: './admin-noi-dung-edit.component.html'
        }),
        __metadata("design:paramtypes", [noidung_service_1.NoiDungService,
            angular2_modal_1.DialogRef])
    ], AdminNoiDungEditComponent);
    return AdminNoiDungEditComponent;
}());
exports.AdminNoiDungEditComponent = AdminNoiDungEditComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL25vaS1kdW5nL2FkbWluL2FkbWluLW5vaS1kdW5nLWRldGFpbC9hZG1pbi1ub2ktZHVuZy1lZGl0L2FkbWluLW5vaS1kdW5nLWVkaXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUFrRDtBQUNsRCxpREFBdUU7QUFDdkUsOERBQWtFO0FBRWxFLG1FQUFpRTtBQUdqRTtJQUFrQyxnQ0FBYztJQUFoRDs7SUFFQSxDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGaUMsMEJBQWMsR0FFL0M7QUFGWSxvQ0FBWTtBQVN6QjtJQUdJLG1DQUFvQixjQUE4QixFQUN2QyxNQUErQjtRQUR0QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDdkMsV0FBTSxHQUFOLE1BQU0sQ0FBeUI7SUFDMUMsQ0FBQztJQUVELDRDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTyxrREFBYyxHQUF0QixVQUF1QixFQUFFO1FBQXpCLGlCQUtDO1FBSkcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO2FBQ2pDLElBQUksQ0FBQyxVQUFBLE1BQU07WUFDUixLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRU8sK0NBQVcsR0FBbkIsVUFBb0IsS0FBSztRQUF6QixpQkFLQztRQUpHLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQzthQUNuQyxJQUFJLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQVcsTUFBUSxDQUFDLEVBQWhDLENBQWdDLENBQUM7YUFDaEQsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsRUFBeEMsQ0FBd0MsQ0FBQzthQUN4RCxJQUFJLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQW5CLENBQW1CLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU8sMkNBQU8sR0FBZixVQUFnQixNQUFlO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQTNCUSx5QkFBeUI7UUFMckMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFdBQVcsRUFBRSxzQ0FBc0M7U0FDdEQsQ0FBQzt5Q0FJc0MsZ0NBQWM7WUFDL0IsMEJBQVM7T0FKbkIseUJBQXlCLENBNEJyQztJQUFELGdDQUFDO0NBNUJELEFBNEJDLElBQUE7QUE1QlksOERBQXlCIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL25vaS1kdW5nL2FkbWluL2FkbWluLW5vaS1kdW5nLWRldGFpbC9hZG1pbi1ub2ktZHVuZy1lZGl0L2FkbWluLW5vaS1kdW5nLWVkaXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGlhbG9nUmVmLCBNb2RhbENvbXBvbmVudCwgQ2xvc2VHdWFyZCB9IGZyb20gJ2FuZ3VsYXIyLW1vZGFsJztcclxuaW1wb3J0IHsgQlNNb2RhbENvbnRleHQgfSBmcm9tICdhbmd1bGFyMi1tb2RhbC9wbHVnaW5zL2Jvb3RzdHJhcCc7XHJcblxyXG5pbXBvcnQgeyBOb2lEdW5nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9ub2lkdW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOb2lEdW5nIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL25vaWR1bmcubW9kZWwnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vZGFsQ29udGV4dCBleHRlbmRzIEJTTW9kYWxDb250ZXh0IHtcclxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ2FkbWluLW5vaS1kdW5nLWVkaXQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FkbWluLW5vaS1kdW5nLWVkaXQuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZG1pbk5vaUR1bmdFZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDbG9zZUd1YXJkLCBNb2RhbENvbXBvbmVudDxNb2RhbENvbnRleHQ+IHtcclxuICAgIHByaXZhdGUgX25vaUR1bmc6IE5vaUR1bmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBub2lEdW5nU2VydmljZTogTm9pRHVuZ1NlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGRpYWxvZzogRGlhbG9nUmVmPE1vZGFsQ29udGV4dD4pIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmdldE5vaUR1bmdCeUlkKHRoaXMuZGlhbG9nLmNvbnRleHQuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Tm9pRHVuZ0J5SWQoaWQpIHtcclxuICAgICAgICB0aGlzLm5vaUR1bmdTZXJ2aWNlLmdldE5vaUR1bmdCeUlEKGlkKVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbm9pRHVuZyA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uRW1pdFZhbHVlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5ub2lEdW5nU2VydmljZS51cGRhdGVOb2lEdW5nKHZhbHVlKVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2coYHN1Y2Nlc3MgJHtyZXN1bHR9YCkpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdlcnJvciBraGkgdXBkYXRlJywgZXJyb3IpKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLm9uQ2xvc2UoZmFsc2UpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ2xvc2UoaXNFeGl0OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2cuY2xvc2UoeyBleGl0OiBpc0V4aXQgfSk7XHJcbiAgICB9XHJcbn0iXX0=
