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
var sweetalert2_1 = require("sweetalert2");
var angular2_modal_1 = require("angular2-modal");
var bootstrap_1 = require("angular2-modal/plugins/bootstrap");
var alert_1 = require("../../../../util/alert");
var manage_state_service_1 = require("../../../../shared/manage-state.service");
var noidung_service_1 = require("../../shared/noidung.service");
var _ = require("lodash");
var order_by_component_1 = require("../../shared/order-by/order-by.component");
var search_component_1 = require("../../shared/search/search.component");
var status_component_1 = require("../../shared/status/status.component");
var paging_component_1 = require("../../../../shared/paging/paging.component");
var AdminNoiDungCreateComponent_1 = require("../admin-noi-dung-detail/admin-noi-dung-create/AdminNoiDungCreateComponent");
var admin_noi_dung_edit_component_1 = require("../admin-noi-dung-detail/admin-noi-dung-edit/admin-noi-dung-edit.component");
var AdminNoiDungListComponent = /** @class */ (function () {
    function AdminNoiDungListComponent(noiDungService, manageStateService, modal, overlay, vcRef, router) {
        this.noiDungService = noiDungService;
        this.manageStateService = manageStateService;
        this.modal = modal;
        this.overlay = overlay;
        this.vcRef = vcRef;
        this.router = router;
        this._total = 0;
        this._checkedListID = [];
        this._keyValue = 'noi-dung-component';
        this._isLoaded = false;
        this._addOnComponents = [];
        overlay.defaultViewContainer = vcRef;
    }
    AdminNoiDungListComponent_1 = AdminNoiDungListComponent;
    AdminNoiDungListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._addOnComponents = [
            this._statusComponent,
            this._pagingComponent,
            this._searchComponent,
            this._orderComponent
        ];
        // bỏ comment để test loading
        // setTimeout(() => {
        //     this._data = this.getData().then((result) => {
        //         this._isLoaded = true;
        //         return result;
        //     });
        // }, 3000);
        this.loadState();
        this._data = this.getData().then(function (result) {
            _this._isLoaded = true;
            _this._total = result.length;
            return result.data;
        });
    };
    AdminNoiDungListComponent.prototype.openCreateModal = function () {
        var _this = this;
        this.modal.open(AdminNoiDungCreateComponent_1.AdminNoiDungCreateComponent, angular2_modal_1.overlayConfigFactory({}, bootstrap_1.BSModalContext))
            .then(function (value) {
            return value.result;
        })
            .then(function (result) {
            if (!result.exit) {
                _this.stateChange();
            }
        })
            .catch(function (error) { return console.log(error); });
    };
    AdminNoiDungListComponent.prototype.openCreate = function () {
        this.router.navigate(['admin/quan-ly-noi-dung/admin-tao-moi-noi-dung']);
    };
    AdminNoiDungListComponent.prototype.openEditModal = function (id) {
        var _this = this;
        this.modal.open(admin_noi_dung_edit_component_1.AdminNoiDungEditComponent, angular2_modal_1.overlayConfigFactory({ id: id }, bootstrap_1.BSModalContext))
            .then(function (value) { return value.result; })
            .then(function (result) {
            if (!result.exit) {
                _this.stateChange();
            }
        })
            .catch(function (error) { return console.log(error); });
    };
    AdminNoiDungListComponent.prototype.openEdit = function (id) {
        this.router.navigate(['admin/quan-ly-noi-dung/admin-sua-noi-dung', id]);
    };
    AdminNoiDungListComponent.prototype.deleteByChecked = function () {
        var _this = this;
        alert_1.Alert.showDeleteAlertWithCancel('Có chắc muốn xóa dữ liệu không?', 'Dữ liệu sẽ bị xóa vĩnh viễn không thể quay lại')
            .then(function () {
            var listId = _this._checkedListID;
            if (listId.length !== 0) {
                _this.noiDungService.deleteNoiDung(listId)
                    .then(function () {
                    _this.stateChange();
                    _this._checkedListID = [];
                    sweetalert2_1.default('Đã xóa', 'Dữ liệu được chọn đã xóa', 'success');
                });
            }
            else {
                sweetalert2_1.default('Bạn chưa chọn gì cả', 'Không có dữ liệu nào bị xóa', 'info');
            }
        });
    };
    AdminNoiDungListComponent.prototype.checkBoxChecked = function (checked, noidung) {
        if (checked) {
            this._checkedListID.push(noidung.noi_dung_id);
        }
        else {
            var index = this._checkedListID.indexOf(noidung.noi_dung_id);
            if (index !== -1) {
                this._checkedListID.splice(index, 1);
            }
        }
    };
    AdminNoiDungListComponent.prototype.identify = function (index, item) {
        return item.noi_dung_id;
    };
    AdminNoiDungListComponent.prototype.deleteByFilter = function () {
        var _this = this;
        alert_1.Alert.showDeleteAlertWithCancel('Có chắc muốn xóa dữ liệu không?', 'Dữ liệu sẽ bị xóa vĩnh viễn không thể quay lại')
            .then(function () {
            if (_this.isFiltering()) {
                _this.deleteRoutine(_this._data)
                    .catch(function (err) {
                    console.log(err);
                    console.log('done');
                    _this.stateChange();
                    sweetalert2_1.default('Đã xóa', 'Dữ liệu được chọn đã xóa', 'success');
                });
            }
            else {
                sweetalert2_1.default('Bạn chưa chọn gì cả', 'Không có dữ liệu nào bị xóa', 'info');
            }
        });
    };
    AdminNoiDungListComponent.prototype.isFiltering = function () {
        for (var i = 0; i < this._addOnComponents.length; i++) {
            if (!_.isEmpty(this._addOnComponents[i].getState().value)) {
                console.log(this._addOnComponents[i].getState().value);
                return true;
            }
        }
        return false;
    };
    AdminNoiDungListComponent.prototype.deleteRoutine = function (promise) {
        var _this = this;
        return promise.then(function (result) {
            if (result.length > 0) {
                console.log('run delete: ' + _this._currentPage);
                var ids = result.map(function (rs) { return rs.noi_dung_id; });
                return _this.noiDungService.deleteNoiDung(ids);
            }
            return Promise.reject('no more');
        }).then(function () {
            _this._pagingComponent.page = _this._currentPage + 1;
            return _this.deleteRoutine(_this.getData().then(function (result) { return result.data; }));
        });
    };
    AdminNoiDungListComponent.prototype.getData = function () {
        var _this = this;
        var body = {};
        this._addOnComponents.forEach(function (ac) {
            var state = ac.getState();
            if (state.value && state.name !== 'page') {
                body[state.name] = state.value;
            }
            if (state.name === 'page' && state.value) {
                _this._currentPage = state.value;
                _this.saveState();
            }
        });
        return this.noiDungService.searchNoiDung(body, this._currentPage, this._itemsPerPage);
    };
    AdminNoiDungListComponent.prototype.updatePerPage = function () {
        this.saveState();
        this.stateChange();
    };
    AdminNoiDungListComponent.prototype.saveState = function () {
        this.manageStateService.save(this._keyValue + ':perPage', this._itemsPerPage);
        this.manageStateService.save(this._keyValue + ':currentPage', this._currentPage);
    };
    AdminNoiDungListComponent.prototype.loadState = function () {
        this._itemsPerPage = this.manageStateService.load(this._keyValue + ':perPage') || 10;
        this._currentPage = this.manageStateService.load(this._keyValue + ':currentPage') || 1;
    };
    AdminNoiDungListComponent.prototype.stateChange = function () {
        var _this = this;
        this._data = this.getData().then(function (result) {
            _this._total = result.length;
            return result.data;
        });
    };
    var AdminNoiDungListComponent_1;
    __decorate([
        core_1.ViewChild(status_component_1.StatusComponent),
        __metadata("design:type", status_component_1.StatusComponent)
    ], AdminNoiDungListComponent.prototype, "_statusComponent", void 0);
    __decorate([
        core_1.ViewChild(paging_component_1.PagingComponent),
        __metadata("design:type", paging_component_1.PagingComponent)
    ], AdminNoiDungListComponent.prototype, "_pagingComponent", void 0);
    __decorate([
        core_1.ViewChild(search_component_1.SearchComponent),
        __metadata("design:type", search_component_1.SearchComponent)
    ], AdminNoiDungListComponent.prototype, "_searchComponent", void 0);
    __decorate([
        core_1.ViewChild(order_by_component_1.OrderbyComponent),
        __metadata("design:type", order_by_component_1.OrderbyComponent)
    ], AdminNoiDungListComponent.prototype, "_orderComponent", void 0);
    __decorate([
        core_1.ViewChild(AdminNoiDungListComponent_1),
        __metadata("design:type", AdminNoiDungListComponent)
    ], AdminNoiDungListComponent.prototype, "_noiDungListComponent", void 0);
    AdminNoiDungListComponent = AdminNoiDungListComponent_1 = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'noi-dung-list',
            templateUrl: './admin-noi-dung-list.component.html',
            styleUrls: ['./admin-noi-dung-list.component.css']
        }),
        __metadata("design:paramtypes", [noidung_service_1.NoiDungService,
            manage_state_service_1.ManageStateService,
            bootstrap_1.Modal,
            angular2_modal_1.Overlay,
            core_1.ViewContainerRef,
            router_1.Router])
    ], AdminNoiDungListComponent);
    return AdminNoiDungListComponent;
}());
exports.AdminNoiDungListComponent = AdminNoiDungListComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL25vaS1kdW5nL2FkbWluL2FkbWluLW5vaS1kdW5nLWxpc3QvYWRtaW4tbm9pLWR1bmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0Y7QUFDdEYsMENBQXlDO0FBQ3pDLDJDQUE4QztBQUM5QyxpREFBK0Q7QUFDL0QsOERBQXlFO0FBRXpFLGdEQUErQztBQUUvQyxnRkFBNkU7QUFDN0UsZ0VBQThEO0FBRTlELDBCQUE0QjtBQUU1QiwrRUFBNEU7QUFDNUUseUVBQXVFO0FBQ3ZFLHlFQUF1RTtBQUN2RSwrRUFBNkU7QUFJN0UsMEhBQXlIO0FBQ3pILDRIQUF1SDtBQVd2SDtJQWdCSSxtQ0FDWSxjQUE4QixFQUM5QixrQkFBc0MsRUFDdEMsS0FBWSxFQUNaLE9BQWdCLEVBQ2hCLEtBQXVCLEVBQ3ZCLE1BQWM7UUFMZCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQ1osWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBcEJsQixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLG1CQUFjLEdBQWUsRUFBRSxDQUFDO1FBR2hDLGNBQVMsR0FBRyxvQkFBb0IsQ0FBQztRQUNqQyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBT2xCLHFCQUFnQixHQUEyQixFQUFFLENBQUM7UUFTbEQsT0FBTyxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztJQUN6QyxDQUFDO2tDQXhCUSx5QkFBeUI7SUEwQmxDLDRDQUFRLEdBQVI7UUFBQSxpQkFxQkM7UUFwQkcsSUFBSSxDQUFDLGdCQUFnQixHQUFHO1lBQ3BCLElBQUksQ0FBQyxnQkFBZ0I7WUFDckIsSUFBSSxDQUFDLGdCQUFnQjtZQUNyQixJQUFJLENB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LFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsc0NBQXNDO1lBQ25ELFNBQVMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO1NBQ3JELENBQUM7eUNBa0I4QixnQ0FBYztZQUNWLHlDQUFrQjtZQUMvQixpQkFBSztZQUNILHdCQUFPO1lBQ1QsdUJBQWdCO1lBQ2YsZUFBTTtPQXRCakIseUJBQXlCLENBb01yQztJQUFELGdDQUFDO0NBcE1ELEFBb01DLElBQUE7QUFwTVksOERBQXlCIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL25vaS1kdW5nL2FkbWluL2FkbWluLW5vaS1kdW5nLWxpc3QvYWRtaW4tbm9pLWR1bmctbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIHN3YWwgfSBmcm9tICdzd2VldGFsZXJ0Mic7XHJcbmltcG9ydCB7IG92ZXJsYXlDb25maWdGYWN0b3J5LCBPdmVybGF5IH0gZnJvbSAnYW5ndWxhcjItbW9kYWwnO1xyXG5pbXBvcnQgeyBNb2RhbCwgQlNNb2RhbENvbnRleHQgfSBmcm9tICdhbmd1bGFyMi1tb2RhbC9wbHVnaW5zL2Jvb3RzdHJhcCc7XHJcblxyXG5pbXBvcnQgeyBBbGVydCB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvYWxlcnQnO1xyXG5cclxuaW1wb3J0IHsgTWFuYWdlU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL21hbmFnZS1zdGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTm9pRHVuZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvbm9pZHVuZy5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmltcG9ydCB7IE9yZGVyYnlDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zaGFyZWQvb3JkZXItYnkvb3JkZXItYnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlYXJjaC9zZWFyY2guY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3RhdHVzQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc2hhcmVkL3N0YXR1cy9zdGF0dXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnaW5nQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL3BhZ2luZy9wYWdpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9hZGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2xvYWRlci9sb2FkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSUFkZE9uQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2FkZC1vbi5pbnRlcmZhY2UnO1xyXG5cclxuaW1wb3J0IHsgQWRtaW5Ob2lEdW5nQ3JlYXRlQ29tcG9uZW50IH0gZnJvbSBcIi4uL2FkbWluLW5vaS1kdW5nLWRldGFpbC9hZG1pbi1ub2ktZHVuZy1jcmVhdGUvQWRtaW5Ob2lEdW5nQ3JlYXRlQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFkbWluTm9pRHVuZ0VkaXRDb21wb25lbnQgfSBmcm9tICcuLi9hZG1pbi1ub2ktZHVuZy1kZXRhaWwvYWRtaW4tbm9pLWR1bmctZWRpdC9hZG1pbi1ub2ktZHVuZy1lZGl0LmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBOb2lEdW5nIH0gZnJvbSAnLi4vLi4vc2hhcmVkL25vaWR1bmcubW9kZWwnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnbm9pLWR1bmctbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vYWRtaW4tbm9pLWR1bmctbGlzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9hZG1pbi1ub2ktZHVuZy1saXN0LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRtaW5Ob2lEdW5nTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwcml2YXRlIF9kYXRhOiBQcm9taXNlPEFycmF5PE5vaUR1bmc+PjtcclxuICAgIHByaXZhdGUgX3RvdGFsOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfY2hlY2tlZExpc3RJRDogQXJyYXk8YW55PiA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfaXRlbXNQZXJQYWdlOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9jdXJyZW50UGFnZTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfa2V5VmFsdWUgPSAnbm9pLWR1bmctY29tcG9uZW50JztcclxuICAgIHByaXZhdGUgX2lzTG9hZGVkID0gZmFsc2U7XHJcblxyXG4gICAgQFZpZXdDaGlsZChTdGF0dXNDb21wb25lbnQpIHByaXZhdGUgX3N0YXR1c0NvbXBvbmVudDogU3RhdHVzQ29tcG9uZW50O1xyXG4gICAgQFZpZXdDaGlsZChQYWdpbmdDb21wb25lbnQpIHByaXZhdGUgX3BhZ2luZ0NvbXBvbmVudDogUGFnaW5nQ29tcG9uZW50O1xyXG4gICAgQFZpZXdDaGlsZChTZWFyY2hDb21wb25lbnQpIHByaXZhdGUgX3NlYXJjaENvbXBvbmVudDogU2VhcmNoQ29tcG9uZW50O1xyXG4gICAgQFZpZXdDaGlsZChPcmRlcmJ5Q29tcG9uZW50KSBwcml2YXRlIF9vcmRlckNvbXBvbmVudDogT3JkZXJieUNvbXBvbmVudDtcclxuICAgIEBWaWV3Q2hpbGQoQWRtaW5Ob2lEdW5nTGlzdENvbXBvbmVudCkgcHJpdmF0ZSBfbm9pRHVuZ0xpc3RDb21wb25lbnQ6IEFkbWluTm9pRHVuZ0xpc3RDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIF9hZGRPbkNvbXBvbmVudHM6IEFycmF5PElBZGRPbkNvbXBvbmVudD4gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIG5vaUR1bmdTZXJ2aWNlOiBOb2lEdW5nU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIG1hbmFnZVN0YXRlU2VydmljZTogTWFuYWdlU3RhdGVTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgbW9kYWw6IE1vZGFsLFxyXG4gICAgICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcclxuICAgICAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICBvdmVybGF5LmRlZmF1bHRWaWV3Q29udGFpbmVyID0gdmNSZWY7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5fYWRkT25Db21wb25lbnRzID0gW1xyXG4gICAgICAgICAgICB0aGlzLl9zdGF0dXNDb21wb25lbnQsXHJcbiAgICAgICAgICAgIHRoaXMuX3BhZ2luZ0NvbXBvbmVudCxcclxuICAgICAgICAgICAgdGhpcy5fc2VhcmNoQ29tcG9uZW50LFxyXG4gICAgICAgICAgICB0aGlzLl9vcmRlckNvbXBvbmVudFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgLy8gYuG7jyBjb21tZW50IMSR4buDIHRlc3QgbG9hZGluZ1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLl9kYXRhID0gdGhpcy5nZXREYXRhKCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9pc0xvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAvLyB9LCAzMDAwKTtcclxuICAgICAgICB0aGlzLmxvYWRTdGF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLl9kYXRhID0gdGhpcy5nZXREYXRhKCkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9pc0xvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuX3RvdGFsID0gcmVzdWx0Lmxlbmd0aDtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb3BlbkNyZWF0ZU1vZGFsKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwub3BlbihBZG1pbk5vaUR1bmdDcmVhdGVDb21wb25lbnQsIG92ZXJsYXlDb25maWdGYWN0b3J5KHt9LCBCU01vZGFsQ29udGV4dCkpXHJcbiAgICAgICAgICAgIC50aGVuKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5yZXN1bHQ7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5leGl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZUNoYW5nZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb3BlbkNyZWF0ZSgpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2FkbWluL3F1YW4tbHktbm9pLWR1bmcvYWRtaW4tdGFvLW1vaS1ub2ktZHVuZyddKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9wZW5FZGl0TW9kYWwoaWQpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLm9wZW4oQWRtaW5Ob2lEdW5nRWRpdENvbXBvbmVudCwgb3ZlcmxheUNvbmZpZ0ZhY3RvcnkoeyBpZDogaWQgfSwgQlNNb2RhbENvbnRleHQpKVxyXG4gICAgICAgICAgICAudGhlbih2YWx1ZSA9PiB2YWx1ZS5yZXN1bHQpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5leGl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZUNoYW5nZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb3BlbkVkaXQoaWQpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ2FkbWluL3F1YW4tbHktbm9pLWR1bmcvYWRtaW4tc3VhLW5vaS1kdW5nJywgaWRdKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlbGV0ZUJ5Q2hlY2tlZCgpIHtcclxuICAgICAgICBBbGVydC5zaG93RGVsZXRlQWxlcnRXaXRoQ2FuY2VsKFxyXG4gICAgICAgICAgICAnQ8OzIGNo4bqvYyBtdeG7kW4geMOzYSBk4buvIGxp4buHdSBraMO0bmc/JyxcclxuICAgICAgICAgICAgJ0Thu68gbGnhu4d1IHPhur0gYuG7iyB4w7NhIHbEqW5oIHZp4buFbiBraMO0bmcgdGjhu4MgcXVheSBs4bqhaScpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBsaXN0SWQgPSB0aGlzLl9jaGVja2VkTGlzdElEO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxpc3RJZC5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vaUR1bmdTZXJ2aWNlLmRlbGV0ZU5vaUR1bmcobGlzdElkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlQ2hhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGVja2VkTGlzdElEID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FsKCfEkMOjIHjDs2EnLCAnROG7ryBsaeG7h3UgxJHGsOG7o2MgY2jhu41uIMSRw6MgeMOzYScsICdzdWNjZXNzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3YWwoJ0LhuqFuIGNoxrBhIGNo4buNbiBnw6wgY+G6oycsICdLaMO0bmcgY8OzIGThu68gbGnhu4d1IG7DoG8gYuG7iyB4w7NhJywgJ2luZm8nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja0JveENoZWNrZWQoY2hlY2tlZDogYm9vbGVhbiwgbm9pZHVuZzogTm9pRHVuZykge1xyXG4gICAgICAgIGlmIChjaGVja2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrZWRMaXN0SUQucHVzaChub2lkdW5nLm5vaV9kdW5nX2lkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLl9jaGVja2VkTGlzdElELmluZGV4T2Yobm9pZHVuZy5ub2lfZHVuZ19pZCk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrZWRMaXN0SUQuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlkZW50aWZ5KGluZGV4LCBpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0ubm9pX2R1bmdfaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkZWxldGVCeUZpbHRlcigpIHtcclxuICAgICAgICBBbGVydC5zaG93RGVsZXRlQWxlcnRXaXRoQ2FuY2VsKFxyXG4gICAgICAgICAgICAnQ8OzIGNo4bqvYyBtdeG7kW4geMOzYSBk4buvIGxp4buHdSBraMO0bmc/JyxcclxuICAgICAgICAgICAgJ0Thu68gbGnhu4d1IHPhur0gYuG7iyB4w7NhIHbEqW5oIHZp4buFbiBraMO0bmcgdGjhu4MgcXVheSBs4bqhaScpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRmlsdGVyaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVJvdXRpbmUodGhpcy5fZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZG9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZUNoYW5nZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dhbCgnxJDDoyB4w7NhJywgJ0Thu68gbGnhu4d1IMSRxrDhu6NjIGNo4buNbiDEkcOjIHjDs2EnLCAnc3VjY2VzcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dhbCgnQuG6oW4gY2jGsGEgY2jhu41uIGfDrCBj4bqjJywgJ0tow7RuZyBjw7MgZOG7ryBsaeG7h3UgbsOgbyBi4buLIHjDs2EnLCAnaW5mbycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNGaWx0ZXJpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9hZGRPbkNvbXBvbmVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKCFfLmlzRW1wdHkodGhpcy5fYWRkT25Db21wb25lbnRzW2ldLmdldFN0YXRlKCkudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9hZGRPbkNvbXBvbmVudHNbaV0uZ2V0U3RhdGUoKS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkZWxldGVSb3V0aW5lKHByb21pc2U6IFByb21pc2U8QXJyYXk8Tm9pRHVuZz4+KTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3J1biBkZWxldGU6ICcgKyB0aGlzLl9jdXJyZW50UGFnZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaWRzID0gcmVzdWx0Lm1hcChycyA9PiBycy5ub2lfZHVuZ19pZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ub2lEdW5nU2VydmljZS5kZWxldGVOb2lEdW5nKGlkcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdubyBtb3JlJyk7XHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BhZ2luZ0NvbXBvbmVudC5wYWdlID0gdGhpcy5fY3VycmVudFBhZ2UgKyAxO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWxldGVSb3V0aW5lKHRoaXMuZ2V0RGF0YSgpLnRoZW4ocmVzdWx0ID0+IHJlc3VsdC5kYXRhKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXREYXRhKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IGJvZHk6IGFueSA9IHt9O1xyXG4gICAgICAgIHRoaXMuX2FkZE9uQ29tcG9uZW50cy5mb3JFYWNoKGFjID0+IHtcclxuICAgICAgICAgICAgbGV0IHN0YXRlID0gYWMuZ2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLnZhbHVlICYmIHN0YXRlLm5hbWUgIT09ICdwYWdlJykge1xyXG4gICAgICAgICAgICAgICAgYm9keVtzdGF0ZS5uYW1lXSA9IHN0YXRlLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5uYW1lID09PSAncGFnZScgJiYgc3RhdGUudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRQYWdlID0gc3RhdGUudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVTdGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLm5vaUR1bmdTZXJ2aWNlLnNlYXJjaE5vaUR1bmcoYm9keSwgdGhpcy5fY3VycmVudFBhZ2UsIHRoaXMuX2l0ZW1zUGVyUGFnZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlUGVyUGFnZSgpIHtcclxuICAgICAgICB0aGlzLnNhdmVTdGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuc3RhdGVDaGFuZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNhdmVTdGF0ZSgpIHtcclxuICAgICAgICB0aGlzLm1hbmFnZVN0YXRlU2VydmljZS5zYXZlKHRoaXMuX2tleVZhbHVlICsgJzpwZXJQYWdlJywgdGhpcy5faXRlbXNQZXJQYWdlKTtcclxuICAgICAgICB0aGlzLm1hbmFnZVN0YXRlU2VydmljZS5zYXZlKHRoaXMuX2tleVZhbHVlICsgJzpjdXJyZW50UGFnZScsIHRoaXMuX2N1cnJlbnRQYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvYWRTdGF0ZSgpIHtcclxuICAgICAgICB0aGlzLl9pdGVtc1BlclBhZ2UgPSB0aGlzLm1hbmFnZVN0YXRlU2VydmljZS5sb2FkKHRoaXMuX2tleVZhbHVlICsgJzpwZXJQYWdlJykgfHwgMTA7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFBhZ2UgPSB0aGlzLm1hbmFnZVN0YXRlU2VydmljZS5sb2FkKHRoaXMuX2tleVZhbHVlICsgJzpjdXJyZW50UGFnZScpIHx8IDE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0ZUNoYW5nZSgpIHtcclxuICAgICAgICB0aGlzLl9kYXRhID0gdGhpcy5nZXREYXRhKCkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl90b3RhbCA9IHJlc3VsdC5sZW5ndGg7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuZGF0YTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==
