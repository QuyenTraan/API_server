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
var auth_service_1 = require("../../../auth/auth.service");
var AdminLoginComponent = /** @class */ (function () {
    function AdminLoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.setMessage();
    }
    AdminLoginComponent.prototype.setMessage = function () {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    };
    AdminLoginComponent.prototype.login = function () {
        var _this = this;
        this.message = 'Trying to log in ...';
        this.authService.login().subscribe(function () {
            _this.setMessage();
            if (_this.authService.isLoggedIn) {
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                var redirect = _this.authService.redirectUrl ? _this.authService.redirectUrl : '/admin';
                // Redirect the user
                _this.router.navigate([redirect]);
            }
        });
    };
    AdminLoginComponent.prototype.logout = function () {
        this.authService.logout();
        this.setMessage();
    };
    AdminLoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'admin-login',
            templateUrl: './admin-login.component.html'
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
    ], AdminLoginComponent);
    return AdminLoginComponent;
}());
exports.AdminLoginComponent = AdminLoginComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2xvZ2luL2FkbWluLWxvZ2luL2FkbWluLWxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUMxQywwQ0FBeUM7QUFDekMsMkRBQXlEO0FBT3pEO0lBRUksNkJBQW9CLFdBQXdCLEVBQVUsTUFBYztRQUFoRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDaEUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDRCx3Q0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBQ0QsbUNBQUssR0FBTDtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQztRQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUMvQixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxLQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRTtnQkFDN0IsNkNBQTZDO2dCQUM3QywrQ0FBK0M7Z0JBQy9DLElBQUksUUFBUSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO2dCQUN0RixvQkFBb0I7Z0JBQ3BCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzthQUNwQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELG9DQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBeEJRLG1CQUFtQjtRQUwvQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSw4QkFBOEI7U0FDOUMsQ0FBQzt5Q0FHbUMsMEJBQVcsRUFBa0IsZUFBTTtPQUYzRCxtQkFBbUIsQ0F5Qi9CO0lBQUQsMEJBQUM7Q0F6QkQsQUF5QkMsSUFBQTtBQXpCWSxrREFBbUIiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvbG9naW4vYWRtaW4tbG9naW4vYWRtaW4tbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9hdXRoLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdhZG1pbi1sb2dpbicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vYWRtaW4tbG9naW4uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZG1pbkxvZ2luQ29tcG9uZW50IHtcclxuICAgIG1lc3NhZ2U6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5zZXRNZXNzYWdlKCk7XHJcbiAgICB9XHJcbiAgICBzZXRNZXNzYWdlKCkge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9ICdMb2dnZWQgJyArICh0aGlzLmF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4gPyAnaW4nIDogJ291dCcpO1xyXG4gICAgfVxyXG4gICAgbG9naW4oKSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gJ1RyeWluZyB0byBsb2cgaW4gLi4uJztcclxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4pIHtcclxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgcmVkaXJlY3QgVVJMIGZyb20gb3VyIGF1dGggc2VydmljZVxyXG4gICAgICAgICAgICAgICAgLy8gSWYgbm8gcmVkaXJlY3QgaGFzIGJlZW4gc2V0LCB1c2UgdGhlIGRlZmF1bHRcclxuICAgICAgICAgICAgICAgIGxldCByZWRpcmVjdCA9IHRoaXMuYXV0aFNlcnZpY2UucmVkaXJlY3RVcmwgPyB0aGlzLmF1dGhTZXJ2aWNlLnJlZGlyZWN0VXJsIDogJy9hZG1pbic7XHJcbiAgICAgICAgICAgICAgICAvLyBSZWRpcmVjdCB0aGUgdXNlclxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3JlZGlyZWN0XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGxvZ291dCgpIHtcclxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgICAgIHRoaXMuc2V0TWVzc2FnZSgpO1xyXG4gICAgfVxyXG59Il19
