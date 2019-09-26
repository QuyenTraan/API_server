"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_module_1 = require("../../shared/shared.module");
var admin_hero_detail_component_1 = require("./admin/admin-hero-detail/admin-hero-detail.component");
var admin_hero_list_component_1 = require("./admin/admin-hero-list/admin-hero-list.component");
var client_hero_detail_component_1 = require("./client/client-hero-detail/client-hero-detail.component");
var dashboard_hero_component_1 = require("./admin/dashboard-hero/dashboard-hero.component");
var HeroModule = /** @class */ (function () {
    function HeroModule() {
    }
    HeroModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule],
            declarations: [
                admin_hero_detail_component_1.AdminHeroDetailComponent,
                admin_hero_list_component_1.AdminHeroListComponent,
                client_hero_detail_component_1.ClientHeroDetailComponent,
                dashboard_hero_component_1.DashboardHeroComponent
            ],
            exports: [
                dashboard_hero_component_1.DashboardHeroComponent,
                admin_hero_detail_component_1.AdminHeroDetailComponent,
                admin_hero_list_component_1.AdminHeroListComponent,
                client_hero_detail_component_1.ClientHeroDetailComponent
            ]
        })
    ], HeroModule);
    return HeroModule;
}());
exports.HeroModule = HeroModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hlcm8vaGVyby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsNERBQTBEO0FBRTFELHFHQUFpRztBQUNqRywrRkFBMkY7QUFDM0YseUdBQXFHO0FBQ3JHLDRGQUF5RjtBQWlCekY7SUFBQTtJQUVBLENBQUM7SUFGWSxVQUFVO1FBZnRCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDdkIsWUFBWSxFQUFFO2dCQUNWLHNEQUF3QjtnQkFDeEIsa0RBQXNCO2dCQUN0Qix3REFBeUI7Z0JBQ3pCLGlEQUFzQjthQUN6QjtZQUNELE9BQU8sRUFBRTtnQkFDTCxpREFBc0I7Z0JBQ3RCLHNEQUF3QjtnQkFDeEIsa0RBQXNCO2dCQUN0Qix3REFBeUI7YUFDNUI7U0FDSixDQUFDO09BQ1csVUFBVSxDQUV0QjtJQUFELGlCQUFDO0NBRkQsQUFFQyxJQUFBO0FBRlksZ0NBQVUiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvaGVyby9oZXJvLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IEFkbWluSGVyb0RldGFpbENvbXBvbmVudCB9IGZyb20gJy4vYWRtaW4vYWRtaW4taGVyby1kZXRhaWwvYWRtaW4taGVyby1kZXRhaWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWRtaW5IZXJvTGlzdENvbXBvbmVudCB9IGZyb20gJy4vYWRtaW4vYWRtaW4taGVyby1saXN0L2FkbWluLWhlcm8tbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbGllbnRIZXJvRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9jbGllbnQvY2xpZW50LWhlcm8tZGV0YWlsL2NsaWVudC1oZXJvLWRldGFpbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRIZXJvQ29tcG9uZW50IH0gZnJvbSAnLi9hZG1pbi9kYXNoYm9hcmQtaGVyby9kYXNoYm9hcmQtaGVyby5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtTaGFyZWRNb2R1bGVdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQWRtaW5IZXJvRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgICAgIEFkbWluSGVyb0xpc3RDb21wb25lbnQsXHJcbiAgICAgICAgQ2xpZW50SGVyb0RldGFpbENvbXBvbmVudCxcclxuICAgICAgICBEYXNoYm9hcmRIZXJvQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIERhc2hib2FyZEhlcm9Db21wb25lbnQsXHJcbiAgICAgICAgQWRtaW5IZXJvRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgICAgIEFkbWluSGVyb0xpc3RDb21wb25lbnQsXHJcbiAgICAgICAgQ2xpZW50SGVyb0RldGFpbENvbXBvbmVudFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVyb01vZHVsZSB7XHJcblxyXG59Il19
