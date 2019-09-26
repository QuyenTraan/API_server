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
var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.admin_page = [
            { routerLink: '/noi-dung/noi-dung-detail', name: 'Noi dung detail' },
            { routerLink: '/hero/hero-detail', name: 'Hero detail' }
        ];
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'menu',
            templateUrl: './menu.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL21lbnUvbWVudS9tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFrRDtBQU9sRDtJQU1JO1FBTEEsZUFBVSxHQUFnRDtZQUN0RCxFQUFFLFVBQVUsRUFBRSwyQkFBMkIsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7WUFDcEUsRUFBRSxVQUFVLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtTQUMzRCxDQUFDO0lBRWMsQ0FBQztJQUVqQixnQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQVZRLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsTUFBTTtZQUNoQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7O09BQ1csYUFBYSxDQVd6QjtJQUFELG9CQUFDO0NBWEQsQUFXQyxJQUFBO0FBWFksc0NBQWEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvbWVudS9tZW51L21lbnUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnbWVudScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vbWVudS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgYWRtaW5fcGFnZTogQXJyYXk8eyByb3V0ZXJMaW5rOiBzdHJpbmcsIG5hbWU6IHN0cmluZyB9PiA9IFtcclxuICAgICAgICB7IHJvdXRlckxpbms6ICcvbm9pLWR1bmcvbm9pLWR1bmctZGV0YWlsJywgbmFtZTogJ05vaSBkdW5nIGRldGFpbCcgfSxcclxuICAgICAgICB7IHJvdXRlckxpbms6ICcvaGVyby9oZXJvLWRldGFpbCcsIG5hbWU6ICdIZXJvIGRldGFpbCcgfVxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG5cclxuICAgIH1cclxufSJdfQ==
