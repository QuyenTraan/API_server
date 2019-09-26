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
var forms_1 = require("@angular/forms");
var Select2InputComponent = /** @class */ (function () {
    function Select2InputComponent() {
        this.propagateChange = function (_) { };
    }
    Select2InputComponent_1 = Select2InputComponent;
    Object.defineProperty(Select2InputComponent.prototype, "selectedValue", {
        // get data() {
        //     return this._data;
        // }
        // set data(value) {
        //     this._data = value;
        // }
        get: function () {
            return this._selectedValue;
        },
        set: function (value) {
            this._selectedValue = value;
            this.propagateChange(this._selectedValue);
        },
        enumerable: true,
        configurable: true
    });
    Select2InputComponent.prototype.ngOnInit = function () {
        this._options = {
            multiple: true,
            closeOnSelect: false,
            allowClear: true,
            placeholder: 'Chọn giá trị'
        };
        this._data = ['aaaaa', 'bbbbb', 'ccccc', 'ddddd'];
    };
    Select2InputComponent.prototype.changed = function (event) {
        this.selectedValue = event.value;
    };
    Select2InputComponent.prototype.writeValue = function (value) {
        if (value) {
            this.selectedValue = value;
        }
    };
    Select2InputComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    Select2InputComponent.prototype.registerOnTouched = function (fn) {
    };
    var Select2InputComponent_1;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], Select2InputComponent.prototype, "_data", void 0);
    Select2InputComponent = Select2InputComponent_1 = __decorate([
        core_1.Component({
            selector: 'select2-input',
            template: '<select2 [data]="_data" [options]="_options" [width]="300" (valueChanged)="changed($event)"></select2>',
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return Select2InputComponent_1; }),
                    multi: true
                }
            ]
        })
    ], Select2InputComponent);
    return Select2InputComponent;
}());
exports.Select2InputComponent = Select2InputComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VsZWN0Mi1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBcUU7QUFDckUsd0NBQXlFO0FBZXpFO0lBWEE7UUFnQlksb0JBQWUsR0FBRyxVQUFDLENBQU0sSUFBTyxDQUFDLENBQUM7SUFpRDlDLENBQUM7OEJBdERZLHFCQUFxQjtJQWdCOUIsc0JBQUksZ0RBQWE7UUFSakIsZUFBZTtRQUNmLHlCQUF5QjtRQUN6QixJQUFJO1FBRUosb0JBQW9CO1FBQ3BCLDBCQUEwQjtRQUMxQixJQUFJO2FBRUo7WUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDL0IsQ0FBQzthQUVELFVBQWtCLEtBQUs7WUFDbkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDOUMsQ0FBQzs7O09BTEE7SUFRRCx3Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNaLFFBQVEsRUFBRSxJQUFJO1lBQ2QsYUFBYSxFQUFFLEtBQUs7WUFDcEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsV0FBVyxFQUFFLGNBQWM7U0FDOUIsQ0FBQTtRQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsdUNBQU8sR0FBUCxVQUFRLEtBQUs7UUFDVCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDckMsQ0FBQztJQUVELDBDQUFVLEdBQVYsVUFBVyxLQUFLO1FBQ1osSUFBSSxLQUFLLEVBQUU7WUFDUCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM5QjtJQUNMLENBQUM7SUFFRCxnREFBZ0IsR0FBaEIsVUFBaUIsRUFBRTtRQUNmLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxpREFBaUIsR0FBakIsVUFBa0IsRUFBRTtJQUVwQixDQUFDOztJQWpERDtRQURDLFlBQUssRUFBRTtrQ0FDTyxLQUFLO3dEQUFNO0lBSmpCLHFCQUFxQjtRQVhqQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLHdHQUF3RztZQUNsSCxTQUFTLEVBQUU7Z0JBQ1A7b0JBQ0ksT0FBTyxFQUFFLHlCQUFpQjtvQkFDMUIsV0FBVyxFQUFFLGlCQUFVLENBQUMsY0FBTSxPQUFBLHVCQUFxQixFQUFyQixDQUFxQixDQUFDO29CQUNwRCxLQUFLLEVBQUUsSUFBSTtpQkFDZDthQUNKO1NBQ0osQ0FBQztPQUNXLHFCQUFxQixDQXNEakM7SUFBRCw0QkFBQztDQXRERCxBQXNEQyxJQUFBO0FBdERZLHNEQUFxQiIsImZpbGUiOiJhcHAvc2hhcmVkL3NlbGVjdDItaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IFNlbGVjdDJPcHRpb25EYXRhIH0gZnJvbSAnbmcyLXNlbGVjdDInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NlbGVjdDItaW5wdXQnLFxyXG4gICAgdGVtcGxhdGU6ICc8c2VsZWN0MiBbZGF0YV09XCJfZGF0YVwiIFtvcHRpb25zXT1cIl9vcHRpb25zXCIgW3dpZHRoXT1cIjMwMFwiICh2YWx1ZUNoYW5nZWQpPVwiY2hhbmdlZCgkZXZlbnQpXCI+PC9zZWxlY3QyPicsXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTZWxlY3QySW5wdXRDb21wb25lbnQpLFxyXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbGVjdDJJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gICAgcHJpdmF0ZSBfb3B0aW9uczogU2VsZWN0Mk9wdGlvbnM7XHJcbiAgICBwcml2YXRlIF9zZWxlY3RlZFZhbHVlO1xyXG4gICAgQElucHV0KClcclxuICAgIHByaXZhdGUgX2RhdGE6IEFycmF5PGFueT47XHJcbiAgICBwcml2YXRlIHByb3BhZ2F0ZUNoYW5nZSA9IChfOiBhbnkpID0+IHsgfTtcclxuXHJcblxyXG4gICAgLy8gZ2V0IGRhdGEoKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gc2V0IGRhdGEodmFsdWUpIHtcclxuICAgIC8vICAgICB0aGlzLl9kYXRhID0gdmFsdWU7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgZ2V0IHNlbGVjdGVkVmFsdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkVmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHNlbGVjdGVkVmFsdWUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9zZWxlY3RlZFZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy5fc2VsZWN0ZWRWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIG11bHRpcGxlOiB0cnVlLFxyXG4gICAgICAgICAgICBjbG9zZU9uU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICAgICAgYWxsb3dDbGVhcjogdHJ1ZSxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdDaOG7jW4gZ2nDoSB0cuG7iydcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2RhdGEgPSBbJ2FhYWFhJywgJ2JiYmJiJywgJ2NjY2NjJywgJ2RkZGRkJ107XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlZChldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IGV2ZW50LnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHdyaXRlVmFsdWUodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm4pIHtcclxuICAgICAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuKSB7XHJcblxyXG4gICAgfVxyXG59Il19
