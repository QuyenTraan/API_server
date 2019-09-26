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
var manage_state_service_1 = require("../../../../shared/manage-state.service");
var StatusComponent = /** @class */ (function () {
    function StatusComponent(manageStateService) {
        this.manageStateService = manageStateService;
        this.valueUpdated = new core_1.EventEmitter();
        this._keyValue = 'status';
        this.loadState();
    }
    StatusComponent.prototype.ngOnInit = function () {
        this._options = {
            multiple: true,
            closeOnSelect: false,
            allowClear: true,
            placeholder: 'trang thai'
        };
        this._data = ['active', 'pending', 'delete'];
    };
    StatusComponent.prototype.getState = function () {
        return { name: 'current_status', value: this._statusValue };
    };
    StatusComponent.prototype.changed = function (e) {
        if (this._statusValue === e.value) {
            return;
        }
        this._statusValue = e.value;
        this.saveState();
        this.valueUpdated.emit(e.value);
    };
    StatusComponent.prototype.saveState = function () {
        this.manageStateService.save(this._keyValue, this._statusValue);
    };
    StatusComponent.prototype.loadState = function () {
        this._statusValue = this.manageStateService.load(this._keyValue);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], StatusComponent.prototype, "valueUpdated", void 0);
    StatusComponent = __decorate([
        core_1.Component({
            selector: 'status',
            template: '<select2 [value]="_statusValue" [data]="_data" [options]="_options" [width]="300" (valueChanged)="changed($event)"></select2>'
        }),
        __metadata("design:paramtypes", [manage_state_service_1.ManageStateService])
    ], StatusComponent);
    return StatusComponent;
}());
exports.StatusComponent = StatusComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL25vaS1kdW5nL3NoYXJlZC9zdGF0dXMvc3RhdHVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUErRTtBQUsvRSxnRkFBNkU7QUFNN0U7SUFPSSx5QkFBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFMaEQsaUJBQVksR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUdwQyxjQUFTLEdBQUcsUUFBUSxDQUFDO1FBR3pCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDWixRQUFRLEVBQUUsSUFBSTtZQUNkLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFdBQVcsRUFBRSxZQUFZO1NBQzVCLENBQUE7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRU0sa0NBQVEsR0FBZjtRQUNJLE9BQU8sRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNoRSxDQUFDO0lBRU8saUNBQU8sR0FBZixVQUFnQixDQUFDO1FBQ2IsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDL0IsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVPLG1DQUFTLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRU8sbUNBQVMsR0FBakI7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUF0Q1M7UUFBVCxhQUFNLEVBQUU7O3lEQUFtQztJQUZuQyxlQUFlO1FBSjNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsK0hBQStIO1NBQzVJLENBQUM7eUNBUTBDLHlDQUFrQjtPQVBqRCxlQUFlLENBMkMzQjtJQUFELHNCQUFDO0NBM0NELEFBMkNDLElBQUE7QUEzQ1ksMENBQWUiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvbm9pLWR1bmcvc2hhcmVkL3N0YXR1cy9zdGF0dXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU2VsZWN0Mk9wdGlvbkRhdGEgfSBmcm9tICduZzItc2VsZWN0Mic7XHJcblxyXG5pbXBvcnQgeyBJQWRkT25Db21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvYWRkLW9uLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IE1hbmFnZVN0YXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9tYW5hZ2Utc3RhdGUuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc3RhdHVzJyxcclxuICAgIHRlbXBsYXRlOiAnPHNlbGVjdDIgW3ZhbHVlXT1cIl9zdGF0dXNWYWx1ZVwiIFtkYXRhXT1cIl9kYXRhXCIgW29wdGlvbnNdPVwiX29wdGlvbnNcIiBbd2lkdGhdPVwiMzAwXCIgKHZhbHVlQ2hhbmdlZCk9XCJjaGFuZ2VkKCRldmVudClcIj48L3NlbGVjdDI+J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU3RhdHVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBJQWRkT25Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfZGF0YTogQXJyYXk8YW55PjtcclxuICAgIEBPdXRwdXQoKSB2YWx1ZVVwZGF0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBwcml2YXRlIF9vcHRpb25zOiBTZWxlY3QyT3B0aW9ucztcclxuICAgIHByaXZhdGUgX3N0YXR1c1ZhbHVlO1xyXG4gICAgcHJpdmF0ZSBfa2V5VmFsdWUgPSAnc3RhdHVzJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hbmFnZVN0YXRlU2VydmljZTogTWFuYWdlU3RhdGVTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9vcHRpb25zID0ge1xyXG4gICAgICAgICAgICBtdWx0aXBsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2xvc2VPblNlbGVjdDogZmFsc2UsXHJcbiAgICAgICAgICAgIGFsbG93Q2xlYXI6IHRydWUsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAndHJhbmcgdGhhaSdcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IFsnYWN0aXZlJywgJ3BlbmRpbmcnLCAnZGVsZXRlJ107XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFN0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiB7IG5hbWU6ICdjdXJyZW50X3N0YXR1cycsIHZhbHVlOiB0aGlzLl9zdGF0dXNWYWx1ZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hhbmdlZChlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXR1c1ZhbHVlID09PSBlLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc3RhdHVzVmFsdWUgPSBlLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2F2ZVN0YXRlKCk7XHJcbiAgICAgICAgdGhpcy52YWx1ZVVwZGF0ZWQuZW1pdChlLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNhdmVTdGF0ZSgpIHtcclxuICAgICAgICB0aGlzLm1hbmFnZVN0YXRlU2VydmljZS5zYXZlKHRoaXMuX2tleVZhbHVlLCB0aGlzLl9zdGF0dXNWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkU3RhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhdHVzVmFsdWUgPSB0aGlzLm1hbmFnZVN0YXRlU2VydmljZS5sb2FkKHRoaXMuX2tleVZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG59Il19
