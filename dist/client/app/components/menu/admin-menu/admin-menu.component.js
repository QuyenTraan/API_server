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
var AdminMenuComponent = /** @class */ (function () {
    function AdminMenuComponent() {
        this.admin_page = [
            { routerLink: 'admin-noi-dung/admin-noi-dung-list', name: 'Admin Noi Dung List' },
            { routerLink: 'admin-noi-dung/admin-noi-dung-edit', name: 'Admin Noi Dung Edit' },
            { routerLink: 'admin-hero/admin-hero-detail', name: 'Admin Hero Detail' },
            { routerLink: 'admin-hero/admin-hero-list', name: 'Admin Hero List' }
        ];
    }
    AdminMenuComponent.prototype.ngOnInit = function () {
    };
    AdminMenuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'admin-menu',
            templateUrl: './admin-menu.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], AdminMenuComponent);
    return AdminMenuComponent;
}());
exports.AdminMenuComponent = AdminMenuComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL21lbnUvYWRtaW4tbWVudS9hZG1pbi1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFrRDtBQU9sRDtJQVFJO1FBUEEsZUFBVSxHQUFnRDtZQUN0RCxFQUFFLFVBQVUsRUFBRSxvQ0FBb0MsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUU7WUFDakYsRUFBRSxVQUFVLEVBQUUsb0NBQW9DLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFO1lBQ2pGLEVBQUUsVUFBVSxFQUFFLDhCQUE4QixFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRTtZQUN6RSxFQUFFLFVBQVUsRUFBRSw0QkFBNEIsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7U0FDeEUsQ0FBQztJQUVjLENBQUM7SUFFakIscUNBQVEsR0FBUjtJQUVBLENBQUM7SUFaUSxrQkFBa0I7UUFMOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsNkJBQTZCO1NBQzdDLENBQUM7O09BQ1csa0JBQWtCLENBYTlCO0lBQUQseUJBQUM7Q0FiRCxBQWFDLElBQUE7QUFiWSxnREFBa0IiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvbWVudS9hZG1pbi1tZW51L2FkbWluLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnYWRtaW4tbWVudScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vYWRtaW4tbWVudS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFkbWluTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBhZG1pbl9wYWdlOiBBcnJheTx7IHJvdXRlckxpbms6IHN0cmluZywgbmFtZTogc3RyaW5nIH0+ID0gW1xyXG4gICAgICAgIHsgcm91dGVyTGluazogJ2FkbWluLW5vaS1kdW5nL2FkbWluLW5vaS1kdW5nLWxpc3QnLCBuYW1lOiAnQWRtaW4gTm9pIER1bmcgTGlzdCcgfSxcclxuICAgICAgICB7IHJvdXRlckxpbms6ICdhZG1pbi1ub2ktZHVuZy9hZG1pbi1ub2ktZHVuZy1lZGl0JywgbmFtZTogJ0FkbWluIE5vaSBEdW5nIEVkaXQnIH0sXHJcbiAgICAgICAgeyByb3V0ZXJMaW5rOiAnYWRtaW4taGVyby9hZG1pbi1oZXJvLWRldGFpbCcsIG5hbWU6ICdBZG1pbiBIZXJvIERldGFpbCcgfSxcclxuICAgICAgICB7IHJvdXRlckxpbms6ICdhZG1pbi1oZXJvL2FkbWluLWhlcm8tbGlzdCcsIG5hbWU6ICdBZG1pbiBIZXJvIExpc3QnIH1cclxuICAgIF07XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICB9XHJcbn0iXX0=
