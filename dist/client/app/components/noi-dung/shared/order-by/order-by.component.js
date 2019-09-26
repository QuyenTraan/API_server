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
var OrderbyComponent = /** @class */ (function () {
    function OrderbyComponent(manageStateService) {
        this.manageStateService = manageStateService;
        this.valueUpdated = new core_1.EventEmitter();
        this._keySave = 'order-by';
        this.loadState();
    }
    OrderbyComponent.prototype.ngOnInit = function () {
        this.data = [
            { id: 'ID', text: 'ID', children: [{ id: 'noi_dung_id+0', text: 'ID tang dan' }, { id: 'noi_dung_id+1', text: 'ID giam dan' }] }
        ];
        this._options = {
            multiple: true,
            closeOnSelect: false,
            allowClear: true,
            placeholder: 'sap xep theo'
        };
    };
    OrderbyComponent.prototype.getState = function () {
        return { name: 'order', value: this._orderValue };
    };
    OrderbyComponent.prototype.saveState = function () {
        this.manageStateService.save(this._keySave, { value: this._orderValue, default: this._defaultValue });
    };
    OrderbyComponent.prototype.loadState = function () {
        var state = this.manageStateService.load(this._keySave);
        if (state) {
            this._orderValue = state.value;
            this._defaultValue = state.default;
        }
    };
    OrderbyComponent.prototype.changed = function (e) {
        var order = e.value.join(',');
        this._orderValue = order;
        this._defaultValue = e.value;
        this.saveState();
        this.valueUpdated.emit(order);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], OrderbyComponent.prototype, "valueUpdated", void 0);
    OrderbyComponent = __decorate([
        core_1.Component({
            selector: 'order-by',
            template: '<select2 [value]="_defaultValue" [data]="data" [options]="_options" [width]="300" (valueChanged)="changed($event)"></select2>'
        }),
        __metadata("design:paramtypes", [manage_state_service_1.ManageStateService])
    ], OrderbyComponent);
    return OrderbyComponent;
}());
exports.OrderbyComponent = OrderbyComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL25vaS1kdW5nL3NoYXJlZC9vcmRlci1ieS9vcmRlci1ieS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBK0U7QUFJL0UsZ0ZBQTZFO0FBTTdFO0lBUUksMEJBQW9CLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBTmhELGlCQUFZLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFJcEMsYUFBUSxHQUFHLFVBQVUsQ0FBQztRQUcxQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHO1lBQ1IsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxDQUFDLEVBQUU7U0FDbkksQ0FBQTtRQUVELElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDWixRQUFRLEVBQUUsSUFBSTtZQUNkLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFdBQVcsRUFBRSxjQUFjO1NBQzlCLENBQUE7SUFDTCxDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUNJLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdEQsQ0FBQztJQUVPLG9DQUFTLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQzFHLENBQUM7SUFFTyxvQ0FBUyxHQUFqQjtRQUNJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELElBQUksS0FBSyxFQUFFO1lBQ1AsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUN0QztJQUVMLENBQUM7SUFFTyxrQ0FBTyxHQUFmLFVBQWdCLENBQUM7UUFDYixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUE5Q1M7UUFBVCxhQUFNLEVBQUU7OzBEQUFtQztJQUZuQyxnQkFBZ0I7UUFKNUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSwrSEFBK0g7U0FDNUksQ0FBQzt5Q0FTMEMseUNBQWtCO09BUmpELGdCQUFnQixDQW1ENUI7SUFBRCx1QkFBQztDQW5ERCxBQW1EQyxJQUFBO0FBbkRZLDRDQUFnQiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9ub2ktZHVuZy9zaGFyZWQvb3JkZXItYnkvb3JkZXItYnkuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU2VsZWN0Mk9wdGlvbkRhdGEgfSBmcm9tICduZzItc2VsZWN0Mic7XHJcbmltcG9ydCB7IElBZGRPbkNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9hZGQtb24uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgTWFuYWdlU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL21hbmFnZS1zdGF0ZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdvcmRlci1ieScsXHJcbiAgICB0ZW1wbGF0ZTogJzxzZWxlY3QyIFt2YWx1ZV09XCJfZGVmYXVsdFZhbHVlXCIgW2RhdGFdPVwiZGF0YVwiIFtvcHRpb25zXT1cIl9vcHRpb25zXCIgW3dpZHRoXT1cIjMwMFwiICh2YWx1ZUNoYW5nZWQpPVwiY2hhbmdlZCgkZXZlbnQpXCI+PC9zZWxlY3QyPidcclxufSlcclxuZXhwb3J0IGNsYXNzIE9yZGVyYnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIElBZGRPbkNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIGRhdGE6IEFycmF5PFNlbGVjdDJPcHRpb25EYXRhPjtcclxuICAgIEBPdXRwdXQoKSB2YWx1ZVVwZGF0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBwcml2YXRlIF9vcHRpb25zOiBTZWxlY3QyT3B0aW9ucztcclxuICAgIHByaXZhdGUgX29yZGVyVmFsdWU7XHJcbiAgICBwcml2YXRlIF9kZWZhdWx0VmFsdWU7XHJcbiAgICBwcml2YXRlIF9rZXlTYXZlID0gJ29yZGVyLWJ5JztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hbmFnZVN0YXRlU2VydmljZTogTWFuYWdlU3RhdGVTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBbXHJcbiAgICAgICAgICAgIHsgaWQ6ICdJRCcsIHRleHQ6ICdJRCcsIGNoaWxkcmVuOiBbeyBpZDogJ25vaV9kdW5nX2lkKzAnLCB0ZXh0OiAnSUQgdGFuZyBkYW4nIH0sIHsgaWQ6ICdub2lfZHVuZ19pZCsxJywgdGV4dDogJ0lEIGdpYW0gZGFuJyB9XSB9XHJcbiAgICAgICAgXVxyXG5cclxuICAgICAgICB0aGlzLl9vcHRpb25zID0ge1xyXG4gICAgICAgICAgICBtdWx0aXBsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2xvc2VPblNlbGVjdDogZmFsc2UsXHJcbiAgICAgICAgICAgIGFsbG93Q2xlYXI6IHRydWUsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnc2FwIHhlcCB0aGVvJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRTdGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4geyBuYW1lOiAnb3JkZXInLCB2YWx1ZTogdGhpcy5fb3JkZXJWYWx1ZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2F2ZVN0YXRlKCkge1xyXG4gICAgICAgIHRoaXMubWFuYWdlU3RhdGVTZXJ2aWNlLnNhdmUodGhpcy5fa2V5U2F2ZSwgeyB2YWx1ZTogdGhpcy5fb3JkZXJWYWx1ZSwgZGVmYXVsdDogdGhpcy5fZGVmYXVsdFZhbHVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZFN0YXRlKCkge1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMubWFuYWdlU3RhdGVTZXJ2aWNlLmxvYWQodGhpcy5fa2V5U2F2ZSk7XHJcbiAgICAgICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29yZGVyVmFsdWUgPSBzdGF0ZS52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5fZGVmYXVsdFZhbHVlID0gc3RhdGUuZGVmYXVsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hhbmdlZChlKSB7XHJcbiAgICAgICAgbGV0IG9yZGVyID0gZS52YWx1ZS5qb2luKCcsJyk7XHJcbiAgICAgICAgdGhpcy5fb3JkZXJWYWx1ZSA9IG9yZGVyO1xyXG4gICAgICAgIHRoaXMuX2RlZmF1bHRWYWx1ZSA9IGUudmFsdWU7XHJcbiAgICAgICAgdGhpcy5zYXZlU3RhdGUoKTtcclxuICAgICAgICB0aGlzLnZhbHVlVXBkYXRlZC5lbWl0KG9yZGVyKTtcclxuICAgIH1cclxuXHJcblxyXG59Il19
