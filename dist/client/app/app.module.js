"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var admin_menu_component_1 = require("./components/menu/admin-menu/admin-menu.component");
var menu_component_1 = require("./components/menu/menu/menu.component");
var admin_login_component_1 = require("./components/login/admin-login/admin-login.component");
var dashboard_component_1 = require("./pages/dashboard/dashboard.component");
var manage_state_service_1 = require("./shared/manage-state.service");
var core_2 = require("angular2-cookie/core");
var auth_service_1 = require("./auth/auth.service");
var auth_guard_1 = require("./guards/auth.guard");
var quan_ly_noi_dung_page_1 = require("./pages/noi-dung/admin/quan-ly-noi-dung/quan-ly-noi-dung.page");
var them_noi_dung_page_1 = require("./pages/noi-dung/admin/them-noi-dung/them-noi-dung.page");
var sua_noi_dung_page_1 = require("./pages/noi-dung/admin/sua-noi-dung/sua-noi-dung.page");
var menu_page_1 = require("./pages/menu/menu.page");
//feature module
var noi_dung_module_1 = require("./components/noi-dung/noi-dung.module");
var hero_module_1 = require("./components/hero/hero.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                noi_dung_module_1.NoiDungModule,
                hero_module_1.HeroModule,
                app_routing_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                admin_menu_component_1.AdminMenuComponent,
                menu_component_1.MenuComponent,
                admin_login_component_1.AdminLoginComponent,
                dashboard_component_1.DashboardComponent,
                quan_ly_noi_dung_page_1.QuanLyNoiDungPage,
                them_noi_dung_page_1.ThemNoiDungPage,
                menu_page_1.MenuPage,
                sua_noi_dung_page_1.SuaNoiDungPage
            ],
            providers: [
                manage_state_service_1.ManageStateService,
                core_2.CookieService,
                auth_service_1.AuthService,
                auth_guard_1.AuthGuard
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDhEQUEwRDtBQUMxRCxzQ0FBMkM7QUFHM0MsaURBQStDO0FBQy9DLDZDQUFpRDtBQUNqRCwwRkFBdUY7QUFDdkYsd0VBQXNFO0FBQ3RFLDhGQUEyRjtBQUMzRiw2RUFBMkU7QUFFM0Usc0VBQW1FO0FBQ25FLDZDQUFxRDtBQUVyRCxvREFBa0Q7QUFDbEQsa0RBQWdEO0FBRWhELHVHQUFrRztBQUNsRyw4RkFBMEY7QUFDMUYsMkZBQXVGO0FBQ3ZGLG9EQUFrRDtBQUVsRCxnQkFBZ0I7QUFDaEIseUVBQXNFO0FBQ3RFLDZEQUEyRDtBQThCM0Q7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQTNCckIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLGdDQUFhO2dCQUNiLGlCQUFVO2dCQUNWLCtCQUFhO2dCQUNiLHdCQUFVO2dCQUNWLDhCQUFnQjthQUNqQjtZQUNELFlBQVksRUFBRTtnQkFDWiw0QkFBWTtnQkFDWix5Q0FBa0I7Z0JBQ2xCLDhCQUFhO2dCQUNiLDJDQUFtQjtnQkFDbkIsd0NBQWtCO2dCQUNsQix5Q0FBaUI7Z0JBQ2pCLG9DQUFlO2dCQUNmLG9CQUFRO2dCQUNSLGtDQUFjO2FBQ2Y7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QseUNBQWtCO2dCQUNsQixvQkFBYTtnQkFDYiwwQkFBVztnQkFDWCxzQkFBUzthQUNWO1lBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUMxQixDQUFDO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBMUIsQUFBMEIsSUFBQTtBQUFiLDhCQUFTIiwiZmlsZSI6ImFwcC9hcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAucm91dGluZyc7XHJcbmltcG9ydCB7IEFkbWluTWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tZW51L2FkbWluLW1lbnUvYWRtaW4tbWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21lbnUvbWVudS9tZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFkbWluTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4vYWRtaW4tbG9naW4vYWRtaW4tbG9naW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBNYW5hZ2VTdGF0ZVNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9tYW5hZ2Utc3RhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1jb29raWUvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tICcuL2d1YXJkcy9hdXRoLmd1YXJkJztcclxuXHJcbmltcG9ydCB7IFF1YW5MeU5vaUR1bmdQYWdlIH0gZnJvbSAnLi9wYWdlcy9ub2ktZHVuZy9hZG1pbi9xdWFuLWx5LW5vaS1kdW5nL3F1YW4tbHktbm9pLWR1bmcucGFnZSc7XHJcbmltcG9ydCB7IFRoZW1Ob2lEdW5nUGFnZSB9IGZyb20gJy4vcGFnZXMvbm9pLWR1bmcvYWRtaW4vdGhlbS1ub2ktZHVuZy90aGVtLW5vaS1kdW5nLnBhZ2UnO1xyXG5pbXBvcnQgeyBTdWFOb2lEdW5nUGFnZSB9IGZyb20gJy4vcGFnZXMvbm9pLWR1bmcvYWRtaW4vc3VhLW5vaS1kdW5nL3N1YS1ub2ktZHVuZy5wYWdlJztcclxuaW1wb3J0IHsgTWVudVBhZ2UgfSBmcm9tICcuL3BhZ2VzL21lbnUvbWVudS5wYWdlJztcclxuXHJcbi8vZmVhdHVyZSBtb2R1bGVcclxuaW1wb3J0IHsgTm9pRHVuZ01vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9ub2ktZHVuZy9ub2ktZHVuZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBIZXJvTW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2hlcm8vaGVyby5tb2R1bGUnO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQnJvd3Nlck1vZHVsZSxcclxuICAgIEh0dHBNb2R1bGUsXHJcbiAgICBOb2lEdW5nTW9kdWxlLFxyXG4gICAgSGVyb01vZHVsZSxcclxuICAgIEFwcFJvdXRpbmdNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQXBwQ29tcG9uZW50LFxyXG4gICAgQWRtaW5NZW51Q29tcG9uZW50LFxyXG4gICAgTWVudUNvbXBvbmVudCxcclxuICAgIEFkbWluTG9naW5Db21wb25lbnQsXHJcbiAgICBEYXNoYm9hcmRDb21wb25lbnQsXHJcbiAgICBRdWFuTHlOb2lEdW5nUGFnZSxcclxuICAgIFRoZW1Ob2lEdW5nUGFnZSxcclxuICAgIE1lbnVQYWdlLFxyXG4gICAgU3VhTm9pRHVuZ1BhZ2VcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgTWFuYWdlU3RhdGVTZXJ2aWNlLFxyXG4gICAgQ29va2llU2VydmljZSxcclxuICAgIEF1dGhTZXJ2aWNlLFxyXG4gICAgQXV0aEd1YXJkXHJcbiAgXSxcclxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiJdfQ==
