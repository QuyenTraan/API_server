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
var PagingComponent = /** @class */ (function () {
    function PagingComponent() {
        this.changePage = new core_1.EventEmitter();
    }
    PagingComponent.prototype.pageChange = function (page) {
        this._page = page;
        this.changePage.emit(page);
    };
    Object.defineProperty(PagingComponent.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (value) {
            this._page = value;
        },
        enumerable: true,
        configurable: true
    });
    PagingComponent.prototype.getState = function () {
        return { name: 'page', value: this._page };
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PagingComponent.prototype, "changePage", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PagingComponent.prototype, "page", null);
    PagingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'paging',
            templateUrl: './paging.component.html',
            styleUrls: ['./paging.component.css']
        })
    ], PagingComponent);
    return PagingComponent;
}());
exports.PagingComponent = PagingComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvcGFnaW5nL3BhZ2luZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0U7QUFVdEU7SUFOQTtRQU9jLGVBQVUsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQW9COUMsQ0FBQztJQWpCVyxvQ0FBVSxHQUFsQixVQUFtQixJQUFJO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxzQkFBVyxpQ0FBSTthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7YUFHRCxVQUFnQixLQUFLO1lBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUM7OztPQUxBO0lBT0Qsa0NBQVEsR0FBUjtRQUNJLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQW5CUztRQUFULGFBQU0sRUFBRTs7dURBQWlDO0lBYTFDO1FBREMsWUFBSyxFQUFFOzs7K0NBR1A7SUFoQlEsZUFBZTtRQU4zQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDeEMsQ0FBQztPQUNXLGVBQWUsQ0FxQjNCO0lBQUQsc0JBQUM7Q0FyQkQsQUFxQkMsSUFBQTtBQXJCWSwwQ0FBZSIsImZpbGUiOiJhcHAvc2hhcmVkL3BhZ2luZy9wYWdpbmcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5cclxuaW1wb3J0IHsgSUFkZE9uQ29tcG9uZW50IH0gZnJvbSAnLi4vYWRkLW9uLmludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ3BhZ2luZycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5nLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3BhZ2luZy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2luZ0NvbXBvbmVudCBpbXBsZW1lbnRzIElBZGRPbkNvbXBvbmVudCB7XHJcbiAgICBAT3V0cHV0KCkgY2hhbmdlUGFnZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIHByaXZhdGUgX3BhZ2U7XHJcblxyXG4gICAgcHJpdmF0ZSBwYWdlQ2hhbmdlKHBhZ2UpIHtcclxuICAgICAgICB0aGlzLl9wYWdlID0gcGFnZTtcclxuICAgICAgICB0aGlzLmNoYW5nZVBhZ2UuZW1pdChwYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHBhZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyBzZXQgcGFnZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3BhZ2UgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4geyBuYW1lOiAncGFnZScsIHZhbHVlOiB0aGlzLl9wYWdlIH07XHJcbiAgICB9XHJcbn0iXX0=
