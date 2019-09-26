"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var ng2_pagination_1 = require("ng2-pagination");
var ng_spin_kit_1 = require("ng-spin-kit");
var angular2_modal_1 = require("angular2-modal");
var bootstrap_1 = require("angular2-modal/plugins/bootstrap");
var ng2_select2_1 = require("ng2-select2");
var loader_component_1 = require("./loader/loader.component");
var paging_component_1 = require("./paging/paging.component");
var select2_input_component_1 = require("./select2-input.component");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                ng2_pagination_1.Ng2PaginationModule,
                ng_spin_kit_1.NgSpinKitModule,
                angular2_modal_1.ModalModule.forRoot(),
                bootstrap_1.BootstrapModalModule,
                ng2_select2_1.Select2Module
            ],
            declarations: [loader_component_1.LoaderComponent, paging_component_1.PagingComponent, select2_input_component_1.Select2InputComponent],
            exports: [
                loader_component_1.LoaderComponent,
                paging_component_1.PagingComponent,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                common_1.CommonModule,
                ng2_pagination_1.Ng2PaginationModule,
                select2_input_component_1.Select2InputComponent
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0Msd0NBQWtFO0FBRWxFLGlEQUFxRDtBQUNyRCwyQ0FBOEM7QUFDOUMsaURBQTZDO0FBQzdDLDhEQUF3RTtBQUN4RSwyQ0FBNEM7QUFJNUMsOERBQTREO0FBQzVELDhEQUE0RDtBQUM1RCxxRUFBa0U7QUFzQmxFO0lBQUE7SUFFQSxDQUFDO0lBRlksWUFBWTtRQXBCeEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHFCQUFZO2dCQUNaLG9DQUFtQjtnQkFDbkIsNkJBQWU7Z0JBQ2YsNEJBQVcsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3JCLGdDQUFvQjtnQkFDcEIsMkJBQWE7YUFDaEI7WUFDRCxZQUFZLEVBQUUsQ0FBQyxrQ0FBZSxFQUFFLGtDQUFlLEVBQUUsK0NBQXFCLENBQUM7WUFDdkUsT0FBTyxFQUFFO2dCQUNMLGtDQUFlO2dCQUNmLGtDQUFlO2dCQUNmLDJCQUFtQjtnQkFDbkIsbUJBQVc7Z0JBQ1gscUJBQVk7Z0JBQ1osb0NBQW1CO2dCQUNuQiwrQ0FBcUI7YUFDeEI7U0FDSixDQUFDO09BQ1csWUFBWSxDQUV4QjtJQUFELG1CQUFDO0NBRkQsQUFFQyxJQUFBO0FBRlksb0NBQVkiLCJmaWxlIjoiYXBwL3NoYXJlZC9zaGFyZWQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSwgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBOZzJQYWdpbmF0aW9uTW9kdWxlIH0gZnJvbSAnbmcyLXBhZ2luYXRpb24nO1xyXG5pbXBvcnQgeyBOZ1NwaW5LaXRNb2R1bGUgfSBmcm9tICduZy1zcGluLWtpdCc7XHJcbmltcG9ydCB7IE1vZGFsTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItbW9kYWwnO1xyXG5pbXBvcnQgeyBCb290c3RyYXBNb2RhbE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLW1vZGFsL3BsdWdpbnMvYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgU2VsZWN0Mk1vZHVsZSB9IGZyb20gJ25nMi1zZWxlY3QyJztcclxuXHJcblxyXG5cclxuaW1wb3J0IHsgTG9hZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2luZ0NvbXBvbmVudCB9IGZyb20gJy4vcGFnaW5nL3BhZ2luZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZWxlY3QySW5wdXRDb21wb25lbnQgfSBmcm9tICcuL3NlbGVjdDItaW5wdXQuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIE5nMlBhZ2luYXRpb25Nb2R1bGUsXHJcbiAgICAgICAgTmdTcGluS2l0TW9kdWxlLFxyXG4gICAgICAgIE1vZGFsTW9kdWxlLmZvclJvb3QoKSxcclxuICAgICAgICBCb290c3RyYXBNb2RhbE1vZHVsZSxcclxuICAgICAgICBTZWxlY3QyTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbTG9hZGVyQ29tcG9uZW50LCBQYWdpbmdDb21wb25lbnQsIFNlbGVjdDJJbnB1dENvbXBvbmVudF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgTG9hZGVyQ29tcG9uZW50LFxyXG4gICAgICAgIFBhZ2luZ0NvbXBvbmVudCxcclxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBOZzJQYWdpbmF0aW9uTW9kdWxlLFxyXG4gICAgICAgIFNlbGVjdDJJbnB1dENvbXBvbmVudFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHtcclxuXHJcbn0iXX0=
