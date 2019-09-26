"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//shared module
var shared_module_1 = require("../../shared/shared.module");
// third party module
var ng2_select2_1 = require("ng2-select2");
var ng2_webstorage_1 = require("ng2-webstorage");
var ngx_quill_1 = require("ngx-quill");
var noidung_service_1 = require("./shared/noidung.service");
var admin_noi_dung_list_component_1 = require("./admin/admin-noi-dung-list/admin-noi-dung-list.component");
var admin_noi_dung_form_component_1 = require("./admin/admin-noi-dung-detail/admin-noi-dung-form/admin-noi-dung-form.component");
var admin_noi_dung_edit_component_1 = require("./admin/admin-noi-dung-detail/admin-noi-dung-edit/admin-noi-dung-edit.component");
var AdminNoiDungCreateComponent_1 = require("./admin/admin-noi-dung-detail/admin-noi-dung-create/AdminNoiDungCreateComponent");
var client_noi_dung_detail_component_1 = require("./client/client-noi-dung-detail/client-noi-dung-detail.component");
var dashboard_noi_dung_moi_component_1 = require("./admin/dashboard-noi-dung-moi/dashboard-noi-dung-moi.component");
var order_by_component_1 = require("./shared/order-by/order-by.component");
var search_component_1 = require("./shared/search/search.component");
var status_component_1 = require("./shared/status/status.component");
var NoiDungModule = /** @class */ (function () {
    function NoiDungModule() {
    }
    NoiDungModule = __decorate([
        core_1.NgModule({
            imports: [
                ng2_select2_1.Select2Module,
                ng2_webstorage_1.Ng2Webstorage,
                shared_module_1.SharedModule,
                ngx_quill_1.QuillModule
            ],
            declarations: [
                admin_noi_dung_list_component_1.AdminNoiDungListComponent,
                admin_noi_dung_form_component_1.AdminNoiDungFormComponent,
                client_noi_dung_detail_component_1.ClientNoiDungDetail,
                order_by_component_1.OrderbyComponent,
                search_component_1.SearchComponent,
                status_component_1.StatusComponent,
                dashboard_noi_dung_moi_component_1.DashboardNoiDungMoi,
                admin_noi_dung_edit_component_1.AdminNoiDungEditComponent,
                AdminNoiDungCreateComponent_1.AdminNoiDungCreateComponent
            ],
            providers: [noidung_service_1.NoiDungService],
            exports: [
                admin_noi_dung_list_component_1.AdminNoiDungListComponent,
                admin_noi_dung_form_component_1.AdminNoiDungFormComponent,
                client_noi_dung_detail_component_1.ClientNoiDungDetail,
                order_by_component_1.OrderbyComponent,
                search_component_1.SearchComponent,
                status_component_1.StatusComponent,
                dashboard_noi_dung_moi_component_1.DashboardNoiDungMoi,
                admin_noi_dung_edit_component_1.AdminNoiDungEditComponent,
                AdminNoiDungCreateComponent_1.AdminNoiDungCreateComponent
            ],
            entryComponents: [AdminNoiDungCreateComponent_1.AdminNoiDungCreateComponent, admin_noi_dung_edit_component_1.AdminNoiDungEditComponent]
        })
    ], NoiDungModule);
    return NoiDungModule;
}());
exports.NoiDungModule = NoiDungModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL25vaS1kdW5nL25vaS1kdW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUV6QyxlQUFlO0FBQ2YsNERBQTBEO0FBRTFELHFCQUFxQjtBQUNyQiwyQ0FBNEM7QUFDNUMsaURBQStDO0FBQy9DLHVDQUF3QztBQUV4Qyw0REFBMEQ7QUFHMUQsMkdBQXNHO0FBQ3RHLGlJQUE0SDtBQUM1SCxpSUFBNEg7QUFDNUgsK0hBQThIO0FBQzlILHFIQUF1RztBQUN2RyxvSEFBc0c7QUFDdEcsMkVBQXdFO0FBQ3hFLHFFQUFtRTtBQUNuRSxxRUFBbUU7QUFtQ25FO0lBQUE7SUFDQSxDQUFDO0lBRFksYUFBYTtRQWhDekIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLDJCQUFhO2dCQUNiLDhCQUFhO2dCQUNiLDRCQUFZO2dCQUNaLHVCQUFXO2FBQ2Q7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YseURBQXlCO2dCQUN6Qix5REFBeUI7Z0JBQ3pCLHNEQUFtQjtnQkFDbkIscUNBQWdCO2dCQUNoQixrQ0FBZTtnQkFDZixrQ0FBZTtnQkFDZixzREFBbUI7Z0JBQ25CLHlEQUF5QjtnQkFDekIseURBQTJCO2FBQzlCO1lBQ0QsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztZQUMzQixPQUFPLEVBQUU7Z0JBQ0wseURBQXlCO2dCQUN6Qix5REFBeUI7Z0JBQ3pCLHNEQUFtQjtnQkFDbkIscUNBQWdCO2dCQUNoQixrQ0FBZTtnQkFDZixrQ0FBZTtnQkFDZixzREFBbUI7Z0JBQ25CLHlEQUF5QjtnQkFDekIseURBQTJCO2FBQzlCO1lBQ0QsZUFBZSxFQUFFLENBQUMseURBQTJCLEVBQUUseURBQXlCLENBQUM7U0FDNUUsQ0FBQztPQUNXLGFBQWEsQ0FDekI7SUFBRCxvQkFBQztDQURELEFBQ0MsSUFBQTtBQURZLHNDQUFhIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL25vaS1kdW5nL25vaS1kdW5nLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vL3NoYXJlZCBtb2R1bGVcclxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xyXG5cclxuLy8gdGhpcmQgcGFydHkgbW9kdWxlXHJcbmltcG9ydCB7IFNlbGVjdDJNb2R1bGUgfSBmcm9tICduZzItc2VsZWN0Mic7XHJcbmltcG9ydCB7IE5nMldlYnN0b3JhZ2UgfSBmcm9tICduZzItd2Vic3RvcmFnZSc7XHJcbmltcG9ydCB7IFF1aWxsTW9kdWxlIH0gZnJvbSAnbmd4LXF1aWxsJztcclxuXHJcbmltcG9ydCB7IE5vaUR1bmdTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvbm9pZHVuZy5zZXJ2aWNlJztcclxuXHJcblxyXG5pbXBvcnQgeyBBZG1pbk5vaUR1bmdMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9hZG1pbi9hZG1pbi1ub2ktZHVuZy1saXN0L2FkbWluLW5vaS1kdW5nLWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWRtaW5Ob2lEdW5nRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vYWRtaW4vYWRtaW4tbm9pLWR1bmctZGV0YWlsL2FkbWluLW5vaS1kdW5nLWZvcm0vYWRtaW4tbm9pLWR1bmctZm9ybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBZG1pbk5vaUR1bmdFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi9hZG1pbi9hZG1pbi1ub2ktZHVuZy1kZXRhaWwvYWRtaW4tbm9pLWR1bmctZWRpdC9hZG1pbi1ub2ktZHVuZy1lZGl0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFkbWluTm9pRHVuZ0NyZWF0ZUNvbXBvbmVudCB9IGZyb20gXCIuL2FkbWluL2FkbWluLW5vaS1kdW5nLWRldGFpbC9hZG1pbi1ub2ktZHVuZy1jcmVhdGUvQWRtaW5Ob2lEdW5nQ3JlYXRlQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENsaWVudE5vaUR1bmdEZXRhaWwgfSBmcm9tICcuL2NsaWVudC9jbGllbnQtbm9pLWR1bmctZGV0YWlsL2NsaWVudC1ub2ktZHVuZy1kZXRhaWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGFzaGJvYXJkTm9pRHVuZ01vaSB9IGZyb20gJy4vYWRtaW4vZGFzaGJvYXJkLW5vaS1kdW5nLW1vaS9kYXNoYm9hcmQtbm9pLWR1bmctbW9pLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE9yZGVyYnlDb21wb25lbnQgfSBmcm9tICcuL3NoYXJlZC9vcmRlci1ieS9vcmRlci1ieS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL3NoYXJlZC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN0YXR1c0NvbXBvbmVudCB9IGZyb20gJy4vc2hhcmVkL3N0YXR1cy9zdGF0dXMuY29tcG9uZW50JztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIFNlbGVjdDJNb2R1bGUsXHJcbiAgICAgICAgTmcyV2Vic3RvcmFnZSxcclxuICAgICAgICBTaGFyZWRNb2R1bGUsXHJcbiAgICAgICAgUXVpbGxNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBZG1pbk5vaUR1bmdMaXN0Q29tcG9uZW50LFxyXG4gICAgICAgIEFkbWluTm9pRHVuZ0Zvcm1Db21wb25lbnQsXHJcbiAgICAgICAgQ2xpZW50Tm9pRHVuZ0RldGFpbCxcclxuICAgICAgICBPcmRlcmJ5Q29tcG9uZW50LFxyXG4gICAgICAgIFNlYXJjaENvbXBvbmVudCxcclxuICAgICAgICBTdGF0dXNDb21wb25lbnQsXHJcbiAgICAgICAgRGFzaGJvYXJkTm9pRHVuZ01vaSxcclxuICAgICAgICBBZG1pbk5vaUR1bmdFZGl0Q29tcG9uZW50LFxyXG4gICAgICAgIEFkbWluTm9pRHVuZ0NyZWF0ZUNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW05vaUR1bmdTZXJ2aWNlXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBBZG1pbk5vaUR1bmdMaXN0Q29tcG9uZW50LFxyXG4gICAgICAgIEFkbWluTm9pRHVuZ0Zvcm1Db21wb25lbnQsXHJcbiAgICAgICAgQ2xpZW50Tm9pRHVuZ0RldGFpbCxcclxuICAgICAgICBPcmRlcmJ5Q29tcG9uZW50LFxyXG4gICAgICAgIFNlYXJjaENvbXBvbmVudCxcclxuICAgICAgICBTdGF0dXNDb21wb25lbnQsXHJcbiAgICAgICAgRGFzaGJvYXJkTm9pRHVuZ01vaSxcclxuICAgICAgICBBZG1pbk5vaUR1bmdFZGl0Q29tcG9uZW50LFxyXG4gICAgICAgIEFkbWluTm9pRHVuZ0NyZWF0ZUNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGVudHJ5Q29tcG9uZW50czogW0FkbWluTm9pRHVuZ0NyZWF0ZUNvbXBvbmVudCwgQWRtaW5Ob2lEdW5nRWRpdENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5vaUR1bmdNb2R1bGUge1xyXG59Il19
