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
var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
        this._color = 'red';
        this._isRunning = true;
        this._delay = 0;
    }
    Object.defineProperty(LoaderComponent.prototype, "color", {
        set: function (color) {
            this._color = color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoaderComponent.prototype, "isRunning", {
        set: function (isRunning) {
            this._isRunning = isRunning;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoaderComponent.prototype, "delay", {
        set: function (delay) {
            this._delay = delay;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LoaderComponent.prototype, "color", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LoaderComponent.prototype, "isRunning", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LoaderComponent.prototype, "delay", null);
    LoaderComponent = __decorate([
        core_1.Component({
            selector: 'loader',
            template: '<sk-chasing-dots [color]="_color" [isRunning]="_isRunning" [delay]="_delay"></sk-chasing-dots>'
        })
    ], LoaderComponent);
    return LoaderComponent;
}());
exports.LoaderComponent = LoaderComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbG9hZGVyL2xvYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBaUQ7QUFNakQ7SUFKQTtRQUtZLFdBQU0sR0FBVyxLQUFLLENBQUM7UUFDdkIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixXQUFNLEdBQUcsQ0FBQyxDQUFDO0lBY3ZCLENBQUM7SUFaWSxzQkFBSSxrQ0FBSzthQUFULFVBQVUsS0FBSztZQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUVRLHNCQUFJLHNDQUFTO2FBQWIsVUFBYyxTQUFTO1lBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQ2hDLENBQUM7OztPQUFBO0lBRVEsc0JBQUksa0NBQUs7YUFBVCxVQUFVLEtBQUs7WUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFWUTtRQUFSLFlBQUssRUFBRTs7O2dEQUVQO0lBRVE7UUFBUixZQUFLLEVBQUU7OztvREFFUDtJQUVRO1FBQVIsWUFBSyxFQUFFOzs7Z0RBRVA7SUFmUSxlQUFlO1FBSjNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsZ0dBQWdHO1NBQzdHLENBQUM7T0FDVyxlQUFlLENBaUIzQjtJQUFELHNCQUFDO0NBakJELEFBaUJDLElBQUE7QUFqQlksMENBQWUiLCJmaWxlIjoiYXBwL3NoYXJlZC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsb2FkZXInLFxyXG4gICAgdGVtcGxhdGU6ICc8c2stY2hhc2luZy1kb3RzIFtjb2xvcl09XCJfY29sb3JcIiBbaXNSdW5uaW5nXT1cIl9pc1J1bm5pbmdcIiBbZGVsYXldPVwiX2RlbGF5XCI+PC9zay1jaGFzaW5nLWRvdHM+J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9hZGVyQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgX2NvbG9yOiBzdHJpbmcgPSAncmVkJztcclxuICAgIHByaXZhdGUgX2lzUnVubmluZzogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIF9kZWxheSA9IDA7XHJcblxyXG4gICAgQElucHV0KCkgc2V0IGNvbG9yKGNvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5fY29sb3IgPSBjb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKSBzZXQgaXNSdW5uaW5nKGlzUnVubmluZykge1xyXG4gICAgICAgIHRoaXMuX2lzUnVubmluZyA9IGlzUnVubmluZztcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKSBzZXQgZGVsYXkoZGVsYXkpIHtcclxuICAgICAgICB0aGlzLl9kZWxheSA9IGRlbGF5O1xyXG4gICAgfVxyXG5cclxufSJdfQ==
