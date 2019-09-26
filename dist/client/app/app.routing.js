"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var menu_component_1 = require("./components/menu/menu/menu.component");
var auth_guard_1 = require("./guards/auth.guard");
var admin_login_component_1 = require("./components/login/admin-login/admin-login.component");
var dashboard_component_1 = require("./pages/dashboard/dashboard.component");
var client_hero_detail_component_1 = require("./components/hero/client/client-hero-detail/client-hero-detail.component");
var admin_noi_dung_list_component_1 = require("./components/noi-dung/admin/admin-noi-dung-list/admin-noi-dung-list.component");
var client_noi_dung_detail_component_1 = require("./components/noi-dung/client/client-noi-dung-detail/client-noi-dung-detail.component");
var quan_ly_noi_dung_page_1 = require("./pages/noi-dung/admin/quan-ly-noi-dung/quan-ly-noi-dung.page");
var them_noi_dung_page_1 = require("./pages/noi-dung/admin/them-noi-dung/them-noi-dung.page");
var menu_page_1 = require("./pages/menu/menu.page");
var sua_noi_dung_page_1 = require("./pages/noi-dung/admin/sua-noi-dung/sua-noi-dung.page");
var appRoutes = [
    {
        // client path
        path: '', component: menu_component_1.MenuComponent, children: [
            {
                path: 'noi-dung', children: [
                    { path: '', redirectTo: 'noi-dung-detail', pathMatch: 'full' },
                    { path: 'noi-dung-detail', component: client_noi_dung_detail_component_1.ClientNoiDungDetail }
                ]
            },
            {
                path: 'hero', children: [
                    { path: '', redirectTo: 'hero-detail', pathMatch: 'full' },
                    { path: 'hero-detail', component: client_hero_detail_component_1.ClientHeroDetailComponent }
                ]
            }
        ]
    },
    {
        //admin path
        path: 'admin', canActivate: [auth_guard_1.AuthGuard], children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: menu_page_1.MenuPage },
            {
                path: 'quan-ly-noi-dung', component: quan_ly_noi_dung_page_1.QuanLyNoiDungPage, children: [
                    { path: '', redirectTo: 'admin-noi-dung-list', pathMatch: 'full' },
                    { path: 'admin-noi-dung-list', component: admin_noi_dung_list_component_1.AdminNoiDungListComponent },
                    { path: 'admin-tao-moi-noi-dung', component: them_noi_dung_page_1.ThemNoiDungPage },
                    { path: 'admin-sua-noi-dung/:id', component: sua_noi_dung_page_1.SuaNoiDungPage }
                ]
            },
            // {
            //   path: 'quan-ly-hero', children: [
            //     { path: '', redirectTo: 'admin-hero-list', pathMatch: 'full' },
            //     { path: 'admin-hero-list', component: AdminHeroListComponent },
            //     { path: 'admin-hero-detail', component: AdminHeroDetailComponent }
            //   ]
            // },
            { path: 'dashboard', component: dashboard_component_1.DashboardComponent }
        ]
    },
    {
        path: 'admin/login', component: admin_login_component_1.AdminLoginComponent
    }
    // otherwise redirect to error --- cai nay tao mot page error roi them sau
    //{ path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(appRoutes, { useHash: false })],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QywwQ0FBdUQ7QUFHdkQsd0VBQXNFO0FBQ3RFLGtEQUFnRDtBQUNoRCw4RkFBMkY7QUFDM0YsNkVBQTJFO0FBSTNFLHlIQUFxSDtBQUVySCwrSEFBMEg7QUFJMUgseUlBQTJIO0FBRTNILHVHQUFrRztBQUNsRyw4RkFBMEY7QUFDMUYsb0RBQWtEO0FBQ2xELDJGQUF1RjtBQUV2RixJQUFNLFNBQVMsR0FBVztJQUN4QjtRQUNFLGNBQWM7UUFDZCxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFLFFBQVEsRUFBRTtZQUM1QztnQkFDRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRTtvQkFDMUIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO29CQUM5RCxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsc0RBQW1CLEVBQUU7aUJBQzVEO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRTtvQkFDdEIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtvQkFDMUQsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSx3REFBeUIsRUFBRTtpQkFDOUQ7YUFDRjtTQUNGO0tBQ0Y7SUFDRDtRQUNFLFlBQVk7UUFDWixJQUFJLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxDQUFDLHNCQUFTLENBQUMsRUFBRSxRQUFRLEVBQUU7WUFDakQsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtZQUNuRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLG9CQUFRLEVBQUU7WUFDckM7Z0JBQ0UsSUFBSSxFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRSx5Q0FBaUIsRUFBRSxRQUFRLEVBQUU7b0JBQ2hFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUscUJBQXFCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtvQkFDbEUsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUUsU0FBUyxFQUFFLHlEQUF5QixFQUFFO29CQUNyRSxFQUFFLElBQUksRUFBRSx3QkFBd0IsRUFBRSxTQUFTLEVBQUUsb0NBQWUsRUFBRTtvQkFDOUQsRUFBRSxJQUFJLEVBQUUsd0JBQXdCLEVBQUUsU0FBUyxFQUFFLGtDQUFjLEVBQUU7aUJBQzlEO2FBQ0Y7WUFDRCxJQUFJO1lBQ0osc0NBQXNDO1lBQ3RDLHNFQUFzRTtZQUN0RSxzRUFBc0U7WUFDdEUseUVBQXlFO1lBQ3pFLE1BQU07WUFDTixLQUFLO1lBQ0wsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBRTtTQUNyRDtLQUNGO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSwyQ0FBbUI7S0FDcEQ7SUFDRCwwRUFBMEU7SUFDMUUsZ0NBQWdDO0NBQ2pDLENBQUM7QUFNRjtJQUFBO0lBQ0EsQ0FBQztJQURZLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUM5RCxPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO1NBQ3hCLENBQUM7T0FDVyxnQkFBZ0IsQ0FDNUI7SUFBRCx1QkFBQztDQURELEFBQ0MsSUFBQTtBQURZLDRDQUFnQiIsImZpbGUiOiJhcHAvYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBBZG1pbk1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbWVudS9hZG1pbi1tZW51L2FkbWluLW1lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tZW51L21lbnUvbWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tICcuL2d1YXJkcy9hdXRoLmd1YXJkJztcclxuaW1wb3J0IHsgQWRtaW5Mb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi9hZG1pbi1sb2dpbi9hZG1pbi1sb2dpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IEFkbWluSGVyb0xpc3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVyby9hZG1pbi9hZG1pbi1oZXJvLWxpc3QvYWRtaW4taGVyby1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFkbWluSGVyb0RldGFpbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9oZXJvL2FkbWluL2FkbWluLWhlcm8tZGV0YWlsL2FkbWluLWhlcm8tZGV0YWlsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENsaWVudEhlcm9EZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVyby9jbGllbnQvY2xpZW50LWhlcm8tZGV0YWlsL2NsaWVudC1oZXJvLWRldGFpbC5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgQWRtaW5Ob2lEdW5nTGlzdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ub2ktZHVuZy9hZG1pbi9hZG1pbi1ub2ktZHVuZy1saXN0L2FkbWluLW5vaS1kdW5nLWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWRtaW5Ob2lEdW5nRWRpdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ub2ktZHVuZy9hZG1pbi9hZG1pbi1ub2ktZHVuZy1kZXRhaWwvYWRtaW4tbm9pLWR1bmctZWRpdC9hZG1pbi1ub2ktZHVuZy1lZGl0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFkbWluTm9pRHVuZ0NyZWF0ZUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbm9pLWR1bmcvYWRtaW4vYWRtaW4tbm9pLWR1bmctZGV0YWlsL2FkbWluLW5vaS1kdW5nLWNyZWF0ZS9BZG1pbk5vaUR1bmdDcmVhdGVDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGFzaGJvYXJkTm9pRHVuZ01vaSB9IGZyb20gJy4vY29tcG9uZW50cy9ub2ktZHVuZy9hZG1pbi9kYXNoYm9hcmQtbm9pLWR1bmctbW9pL2Rhc2hib2FyZC1ub2ktZHVuZy1tb2kuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2xpZW50Tm9pRHVuZ0RldGFpbCB9IGZyb20gJy4vY29tcG9uZW50cy9ub2ktZHVuZy9jbGllbnQvY2xpZW50LW5vaS1kdW5nLWRldGFpbC9jbGllbnQtbm9pLWR1bmctZGV0YWlsLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBRdWFuTHlOb2lEdW5nUGFnZSB9IGZyb20gJy4vcGFnZXMvbm9pLWR1bmcvYWRtaW4vcXVhbi1seS1ub2ktZHVuZy9xdWFuLWx5LW5vaS1kdW5nLnBhZ2UnO1xyXG5pbXBvcnQgeyBUaGVtTm9pRHVuZ1BhZ2UgfSBmcm9tICcuL3BhZ2VzL25vaS1kdW5nL2FkbWluL3RoZW0tbm9pLWR1bmcvdGhlbS1ub2ktZHVuZy5wYWdlJztcclxuaW1wb3J0IHsgTWVudVBhZ2UgfSBmcm9tICcuL3BhZ2VzL21lbnUvbWVudS5wYWdlJztcclxuaW1wb3J0IHsgU3VhTm9pRHVuZ1BhZ2UgfSBmcm9tICcuL3BhZ2VzL25vaS1kdW5nL2FkbWluL3N1YS1ub2ktZHVuZy9zdWEtbm9pLWR1bmcucGFnZSc7XHJcblxyXG5jb25zdCBhcHBSb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICAvLyBjbGllbnQgcGF0aFxyXG4gICAgcGF0aDogJycsIGNvbXBvbmVudDogTWVudUNvbXBvbmVudCwgY2hpbGRyZW46IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdub2ktZHVuZycsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnbm9pLWR1bmctZGV0YWlsJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuICAgICAgICAgIHsgcGF0aDogJ25vaS1kdW5nLWRldGFpbCcsIGNvbXBvbmVudDogQ2xpZW50Tm9pRHVuZ0RldGFpbCB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2hlcm8nLCBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJ2hlcm8tZGV0YWlsJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuICAgICAgICAgIHsgcGF0aDogJ2hlcm8tZGV0YWlsJywgY29tcG9uZW50OiBDbGllbnRIZXJvRGV0YWlsQ29tcG9uZW50IH1cclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIC8vYWRtaW4gcGF0aFxyXG4gICAgcGF0aDogJ2FkbWluJywgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdLCBjaGlsZHJlbjogW1xyXG4gICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnbWVudScsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXHJcbiAgICAgIHsgcGF0aDogJ21lbnUnLCBjb21wb25lbnQ6IE1lbnVQYWdlIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAncXVhbi1seS1ub2ktZHVuZycsIGNvbXBvbmVudDogUXVhbkx5Tm9pRHVuZ1BhZ2UsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnYWRtaW4tbm9pLWR1bmctbGlzdCcsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXHJcbiAgICAgICAgICB7IHBhdGg6ICdhZG1pbi1ub2ktZHVuZy1saXN0JywgY29tcG9uZW50OiBBZG1pbk5vaUR1bmdMaXN0Q29tcG9uZW50IH0sXHJcbiAgICAgICAgICB7IHBhdGg6ICdhZG1pbi10YW8tbW9pLW5vaS1kdW5nJywgY29tcG9uZW50OiBUaGVtTm9pRHVuZ1BhZ2UgfSxcclxuICAgICAgICAgIHsgcGF0aDogJ2FkbWluLXN1YS1ub2ktZHVuZy86aWQnLCBjb21wb25lbnQ6IFN1YU5vaUR1bmdQYWdlIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIHtcclxuICAgICAgLy8gICBwYXRoOiAncXVhbi1seS1oZXJvJywgY2hpbGRyZW46IFtcclxuICAgICAgLy8gICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdhZG1pbi1oZXJvLWxpc3QnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG4gICAgICAvLyAgICAgeyBwYXRoOiAnYWRtaW4taGVyby1saXN0JywgY29tcG9uZW50OiBBZG1pbkhlcm9MaXN0Q29tcG9uZW50IH0sXHJcbiAgICAgIC8vICAgICB7IHBhdGg6ICdhZG1pbi1oZXJvLWRldGFpbCcsIGNvbXBvbmVudDogQWRtaW5IZXJvRGV0YWlsQ29tcG9uZW50IH1cclxuICAgICAgLy8gICBdXHJcbiAgICAgIC8vIH0sXHJcbiAgICAgIHsgcGF0aDogJ2Rhc2hib2FyZCcsIGNvbXBvbmVudDogRGFzaGJvYXJkQ29tcG9uZW50IH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdhZG1pbi9sb2dpbicsIGNvbXBvbmVudDogQWRtaW5Mb2dpbkNvbXBvbmVudFxyXG4gIH1cclxuICAvLyBvdGhlcndpc2UgcmVkaXJlY3QgdG8gZXJyb3IgLS0tIGNhaSBuYXkgdGFvIG1vdCBwYWdlIGVycm9yIHJvaSB0aGVtIHNhdVxyXG4gIC8veyBwYXRoOiAnKionLCByZWRpcmVjdFRvOiAnJyB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yUm9vdChhcHBSb3V0ZXMsIHsgdXNlSGFzaDogZmFsc2UgfSldLFxyXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHtcclxufSJdfQ==
