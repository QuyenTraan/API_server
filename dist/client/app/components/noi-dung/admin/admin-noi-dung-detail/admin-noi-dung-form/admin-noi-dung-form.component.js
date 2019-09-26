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
var keycode_util_1 = require("../../../../../util/keycode-util");
var number_format_util_1 = require("../../../../../util/number-format-util");
var noidung_model_1 = require("../../../shared/noidung.model");
var AdminNoiDungFormComponent = /** @class */ (function () {
    function AdminNoiDungFormComponent(fb) {
        this.fb = fb;
        this.defaultValue = new noidung_model_1.NoiDung();
        this.emitValue = new core_1.EventEmitter();
        this.close = new core_1.EventEmitter();
        //giá trị cho select box bên view
        this._current_status = noidung_model_1.CURRENT_STATUS_VALUE;
        this._data = ['active', 'pending'];
        this._options = {
            multiple: true,
            closeOnSelect: false,
            allowClear: true,
            placeholder: 'Chọn giá trị'
        };
        // chứa error message cho view
        this._formErrors = {
            'noi_dung_id': '',
            'tieu_de': '',
            'current_status': '',
            'value_boolean': '',
            'value_int': '',
            'value_time': '',
            'value_decimal': '',
            'noi_dung': '',
            'select2Select': '',
            'editor': ''
        };
        // từ điển error message khi validate
        this._validationMessages = {
            'noi_dung_id': {
                'required': 'Cần phải có ID.'
            },
            'tieu_de': {
                'required': 'Cần phải có tiêu đề.',
                'maxlength': 'Tiêu đề phải không được dài quá 50 chữ.',
                'minlength': 'Tiêu đề phải có ít nhất 4 chữ.'
            },
            'current_status': {
                'required': 'Cần phải có current_status.'
            },
            'value_boolean': {
                'required': 'Cần phải có value_boolean.'
            },
            'value_int': {
                'required': 'Cần phải có value_int.'
            },
            'value_time': {
                'required': 'Cần phải có value_time.'
            },
            'value_decimal': {
                'required': 'Cần phải có value_decimal.'
            },
            'noi_dung': {
                'required': 'Cần phải có noi_dung.'
            },
            'select2Select': {
                'required': 'Cần phải có select2Select.'
            },
            'editor': {
                'required': 'Cần phải có nội dung trong editor'
            }
        };
    }
    AdminNoiDungFormComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    AdminNoiDungFormComponent.prototype.ngOnChanges = function () {
        if (this.model) {
            this._noiDungForm.patchValue({
                noi_dung_id: this.model.noi_dung_id,
                tieu_de: this.model.tieu_de,
                current_status: this.model.current_status,
                noi_dung_content_big: '<p><strong>hello world in bold</strong></p>'
            });
            this.onValueChanged();
        }
    };
    AdminNoiDungFormComponent.prototype.onValueChanged = function (data) {
        this.validation();
    };
    AdminNoiDungFormComponent.prototype.validation = function () {
        if (!this._noiDungForm) {
            return;
        }
        var form = this._noiDungForm;
        for (var field in this._formErrors) {
            this._formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var message = this._validationMessages[field];
                for (var key in control.errors) {
                    this._formErrors[field] += message[key] + ' ';
                }
            }
        }
    };
    AdminNoiDungFormComponent.prototype.createForm = function () {
        var _this = this;
        this._noiDungForm = this.fb.group({
            noi_dung_id: [this.defaultValue.noi_dung_id || ''],
            tieu_de: [this.defaultValue.tieu_de || '', [forms_1.Validators.required, forms_1.Validators.maxLength(50), forms_1.Validators.minLength(4)]],
            current_status: [this.defaultValue.current_status || '', forms_1.Validators.required],
            value_boolean: [false],
            value_int: ['', forms_1.Validators.required],
            value_time: ['', forms_1.Validators.required],
            value_decimal: ['', forms_1.Validators.required],
            noi_dung_content: ['', forms_1.Validators.required],
            tag_text: ['', forms_1.Validators.required],
            noi_dung_content_big: ['', forms_1.Validators.required],
            checkbox1: [false, forms_1.Validators.required],
            checkbox2: [false, forms_1.Validators.required],
            checkbox3: [false, forms_1.Validators.required]
        });
        this._noiDungForm.valueChanges.subscribe(function (data) {
            _this.onValueChanged(data);
        });
        this.onValueChanged();
    };
    AdminNoiDungFormComponent.prototype.onKeyDown = function (ev) {
        if (keycode_util_1.KeyCodeUtil.isSpecialKey(ev)) {
            return;
        }
        else {
            // Check if number key or backspace key
            if (keycode_util_1.KeyCodeUtil.isNumberKey(ev)) {
                var value = this._noiDungForm.get('value_decimal').value;
                console.log(value.length);
                value = number_format_util_1.NumberFormatUtil.numFormat(value);
                this._noiDungForm.patchValue({ 'value_decimal': value });
            }
            else {
                ev.preventDefault();
                return false;
            }
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", noidung_model_1.NoiDung)
    ], AdminNoiDungFormComponent.prototype, "model", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", noidung_model_1.NoiDung)
    ], AdminNoiDungFormComponent.prototype, "defaultValue", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AdminNoiDungFormComponent.prototype, "emitValue", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AdminNoiDungFormComponent.prototype, "close", void 0);
    AdminNoiDungFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'admin-noi-dung-form',
            templateUrl: './admin-noi-dung-form.component.html',
            styleUrls: ['./admin-noi-dung-form.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], AdminNoiDungFormComponent);
    return AdminNoiDungFormComponent;
}());
exports.AdminNoiDungFormComponent = AdminNoiDungFormComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL25vaS1kdW5nL2FkbWluL2FkbWluLW5vaS1kdW5nLWRldGFpbC9hZG1pbi1ub2ktZHVuZy1mb3JtL2FkbWluLW5vaS1kdW5nLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBGO0FBQzFGLHdDQUFvRTtBQUdwRSxpRUFBK0Q7QUFDL0QsNkVBQTBFO0FBRTFFLCtEQUE4RTtBQVE5RTtJQW9FSSxtQ0FBb0IsRUFBZTtRQUFmLE9BQUUsR0FBRixFQUFFLENBQWE7UUFqRTFCLGlCQUFZLEdBQVksSUFBSSx1QkFBTyxFQUFFLENBQUM7UUFDckMsY0FBUyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQy9CLFVBQUssR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUNyQyxpQ0FBaUM7UUFDekIsb0JBQWUsR0FBRyxvQ0FBb0IsQ0FBQztRQUUvQyxVQUFLLEdBQUcsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDOUIsYUFBUSxHQUFHO1lBQ1AsUUFBUSxFQUFFLElBQUk7WUFDZCxhQUFhLEVBQUUsS0FBSztZQUNwQixVQUFVLEVBQUUsSUFBSTtZQUNoQixXQUFXLEVBQUUsY0FBYztTQUM5QixDQUFBO1FBR0QsOEJBQThCO1FBQ3RCLGdCQUFXLEdBQUc7WUFDbEIsYUFBYSxFQUFFLEVBQUU7WUFDakIsU0FBUyxFQUFFLEVBQUU7WUFDYixnQkFBZ0IsRUFBRSxFQUFFO1lBQ3BCLGVBQWUsRUFBRSxFQUFFO1lBQ25CLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsZUFBZSxFQUFFLEVBQUU7WUFDbkIsVUFBVSxFQUFFLEVBQUU7WUFDZCxlQUFlLEVBQUUsRUFBRTtZQUNuQixRQUFRLEVBQUUsRUFBRTtTQUNmLENBQUM7UUFFRixxQ0FBcUM7UUFDN0Isd0JBQW1CLEdBQUc7WUFDMUIsYUFBYSxFQUFFO2dCQUNYLFVBQVUsRUFBRSxp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QUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDekQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzFCLEtBQUssR0FBRyxxQ0FBZ0IsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7YUFDNUQ7aUJBQU07Z0JBQ0gsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNwQixPQUFPLEtBQUssQ0FBQzthQUNoQjtTQUNKO0lBQ0wsQ0FBQztJQWpKUTtRQUFSLFlBQUssRUFBRTtrQ0FBUSx1QkFBTzs0REFBQztJQUNmO1FBQVIsWUFBSyxFQUFFO2tDQUFlLHVCQUFPO21FQUFpQjtJQUNyQztRQUFULGFBQU0sRUFBRTs7Z0VBQWdDO0lBQy9CO1FBQVQsYUFBTSxFQUFFOzs0REFBNEI7SUFMNUIseUJBQXlCO1FBTnJDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixXQUFXLEVBQUUsc0NBQXNDO1lBQ25ELFNBQVMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO1NBQ3JELENBQUM7eUNBcUUwQixtQkFBVztPQXBFMUIseUJBQXlCLENBcUpyQztJQUFELGdDQUFDO0NBckpELEFBcUpDLElBQUE7QUFySlksOERBQXlCIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL25vaS1kdW5nL2FkbWluL2FkbWluLW5vaS1kdW5nLWRldGFpbC9hZG1pbi1ub2ktZHVuZy1mb3JtL2FkbWluLW5vaS1kdW5nLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkNoYW5nZXMsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmltcG9ydCB7IEtleUNvZGVVdGlsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbC9rZXljb2RlLXV0aWwnO1xyXG5pbXBvcnQgeyBOdW1iZXJGb3JtYXRVdGlsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbC9udW1iZXItZm9ybWF0LXV0aWwnO1xyXG5cclxuaW1wb3J0IHsgTm9pRHVuZywgQ1VSUkVOVF9TVEFUVVNfVkFMVUUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbm9pZHVuZy5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ2FkbWluLW5vaS1kdW5nLWZvcm0nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FkbWluLW5vaS1kdW5nLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vYWRtaW4tbm9pLWR1bmctZm9ybS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFkbWluTm9pRHVuZ0Zvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XHJcbiAgICBwcml2YXRlIF9ub2lEdW5nRm9ybTogRm9ybUdyb3VwO1xyXG4gICAgQElucHV0KCkgbW9kZWw6IE5vaUR1bmc7XHJcbiAgICBASW5wdXQoKSBkZWZhdWx0VmFsdWU6IE5vaUR1bmcgPSBuZXcgTm9pRHVuZygpO1xyXG4gICAgQE91dHB1dCgpIGVtaXRWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIC8vZ2nDoSB0cuG7iyBjaG8gc2VsZWN0IGJveCBiw6puIHZpZXdcclxuICAgIHByaXZhdGUgX2N1cnJlbnRfc3RhdHVzID0gQ1VSUkVOVF9TVEFUVVNfVkFMVUU7XHJcblxyXG4gICAgX2RhdGEgPSBbJ2FjdGl2ZScsICdwZW5kaW5nJ107XHJcbiAgICBfb3B0aW9ucyA9IHtcclxuICAgICAgICBtdWx0aXBsZTogdHJ1ZSxcclxuICAgICAgICBjbG9zZU9uU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICBhbGxvd0NsZWFyOiB0cnVlLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnQ2jhu41uIGdpw6EgdHLhu4snXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIGNo4bupYSBlcnJvciBtZXNzYWdlIGNobyB2aWV3XHJcbiAgICBwcml2YXRlIF9mb3JtRXJyb3JzID0ge1xyXG4gICAgICAgICdub2lfZHVuZ19pZCc6ICcnLFxyXG4gICAgICAgICd0aWV1X2RlJzogJycsXHJcbiAgICAgICAgJ2N1cnJlbnRfc3RhdHVzJzogJycsXHJcbiAgICAgICAgJ3ZhbHVlX2Jvb2xlYW4nOiAnJyxcclxuICAgICAgICAndmFsdWVfaW50JzogJycsXHJcbiAgICAgICAgJ3ZhbHVlX3RpbWUnOiAnJyxcclxuICAgICAgICAndmFsdWVfZGVjaW1hbCc6ICcnLFxyXG4gICAgICAgICdub2lfZHVuZyc6ICcnLFxyXG4gICAgICAgICdzZWxlY3QyU2VsZWN0JzogJycsXHJcbiAgICAgICAgJ2VkaXRvcic6ICcnXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHThu6sgxJFp4buDbiBlcnJvciBtZXNzYWdlIGtoaSB2YWxpZGF0ZVxyXG4gICAgcHJpdmF0ZSBfdmFsaWRhdGlvbk1lc3NhZ2VzID0ge1xyXG4gICAgICAgICdub2lfZHVuZ19pZCc6IHtcclxuICAgICAgICAgICAgJ3JlcXVpcmVkJzogJ0PhuqduIHBo4bqjaSBjw7MgSUQuJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3RpZXVfZGUnOiB7XHJcbiAgICAgICAgICAgICdyZXF1aXJlZCc6ICdD4bqnbiBwaOG6o2kgY8OzIHRpw6p1IMSR4buBLicsXHJcbiAgICAgICAgICAgICdtYXhsZW5ndGgnOiAnVGnDqnUgxJHhu4EgcGjhuqNpIGtow7RuZyDEkcaw4bujYyBkw6BpIHF1w6EgNTAgY2jhu68uJyxcclxuICAgICAgICAgICAgJ21pbmxlbmd0aCc6ICdUacOqdSDEkeG7gSBwaOG6o2kgY8OzIMOtdCBuaOG6pXQgNCBjaOG7ry4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnY3VycmVudF9zdGF0dXMnOiB7XHJcbiAgICAgICAgICAgICdyZXF1aXJlZCc6ICdD4bqnbiBwaOG6o2kgY8OzIGN1cnJlbnRfc3RhdHVzLidcclxuICAgICAgICB9LFxyXG4gICAgICAgICd2YWx1ZV9ib29sZWFuJzoge1xyXG4gICAgICAgICAgICAncmVxdWlyZWQnOiAnQ+G6p24gcGjhuqNpIGPDsyB2YWx1ZV9ib29sZWFuLidcclxuICAgICAgICB9LFxyXG4gICAgICAgICd2YWx1ZV9pbnQnOiB7XHJcbiAgICAgICAgICAgICdyZXF1aXJlZCc6ICdD4bqnbiBwaOG6o2kgY8OzIHZhbHVlX2ludC4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICAndmFsdWVfdGltZSc6IHtcclxuICAgICAgICAgICAgJ3JlcXVpcmVkJzogJ0PhuqduIHBo4bqjaSBjw7MgdmFsdWVfdGltZS4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICAndmFsdWVfZGVjaW1hbCc6IHtcclxuICAgICAgICAgICAgJ3JlcXVpcmVkJzogJ0PhuqduIHBo4bqjaSBjw7MgdmFsdWVfZGVjaW1hbC4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnbm9pX2R1bmcnOiB7XHJcbiAgICAgICAgICAgICdyZXF1aXJlZCc6ICdD4bqnbiBwaOG6o2kgY8OzIG5vaV9kdW5nLidcclxuICAgICAgICB9LFxyXG4gICAgICAgICdzZWxlY3QyU2VsZWN0Jzoge1xyXG4gICAgICAgICAgICAncmVxdWlyZWQnOiAnQ+G6p24gcGjhuqNpIGPDsyBzZWxlY3QyU2VsZWN0LidcclxuICAgICAgICB9LFxyXG4gICAgICAgICdlZGl0b3InOiB7XHJcbiAgICAgICAgICAgICdyZXF1aXJlZCc6ICdD4bqnbiBwaOG6o2kgY8OzIG7hu5lpIGR1bmcgdHJvbmcgZWRpdG9yJ1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcygpIHtcclxuICAgICAgICBpZiAodGhpcy5tb2RlbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9ub2lEdW5nRm9ybS5wYXRjaFZhbHVlKHtcclxuICAgICAgICAgICAgICAgIG5vaV9kdW5nX2lkOiB0aGlzLm1vZGVsLm5vaV9kdW5nX2lkLFxyXG4gICAgICAgICAgICAgICAgdGlldV9kZTogdGhpcy5tb2RlbC50aWV1X2RlLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudF9zdGF0dXM6IHRoaXMubW9kZWwuY3VycmVudF9zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICBub2lfZHVuZ19jb250ZW50X2JpZzogJzxwPjxzdHJvbmc+aGVsbG8gd29ybGQgaW4gYm9sZDwvc3Ryb25nPjwvcD4nXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLm9uVmFsdWVDaGFuZ2VkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25WYWx1ZUNoYW5nZWQoZGF0YT86IGFueSkge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdmFsaWRhdGlvbigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX25vaUR1bmdGb3JtKSB7IHJldHVybjsgfVxyXG4gICAgICAgIGxldCBmb3JtID0gdGhpcy5fbm9pRHVuZ0Zvcm07XHJcblxyXG4gICAgICAgIGZvciAobGV0IGZpZWxkIGluIHRoaXMuX2Zvcm1FcnJvcnMpIHtcclxuICAgICAgICAgICAgdGhpcy5fZm9ybUVycm9yc1tmaWVsZF0gPSAnJztcclxuICAgICAgICAgICAgbGV0IGNvbnRyb2wgPSBmb3JtLmdldChmaWVsZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29udHJvbCAmJiBjb250cm9sLmRpcnR5ICYmICFjb250cm9sLnZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IHRoaXMuX3ZhbGlkYXRpb25NZXNzYWdlc1tmaWVsZF07XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gY29udHJvbC5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mb3JtRXJyb3JzW2ZpZWxkXSArPSBtZXNzYWdlW2tleV0gKyAnICc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVGb3JtKCkge1xyXG4gICAgICAgIHRoaXMuX25vaUR1bmdGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAgICAgIG5vaV9kdW5nX2lkOiBbdGhpcy5kZWZhdWx0VmFsdWUubm9pX2R1bmdfaWQgfHwgJyddLFxyXG4gICAgICAgICAgICB0aWV1X2RlOiBbdGhpcy5kZWZhdWx0VmFsdWUudGlldV9kZSB8fCAnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDUwKSwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNCldXSxcclxuICAgICAgICAgICAgY3VycmVudF9zdGF0dXM6IFt0aGlzLmRlZmF1bHRWYWx1ZS5jdXJyZW50X3N0YXR1cyB8fCAnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIHZhbHVlX2Jvb2xlYW46IFtmYWxzZV0sXHJcbiAgICAgICAgICAgIHZhbHVlX2ludDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgdmFsdWVfdGltZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgdmFsdWVfZGVjaW1hbDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgbm9pX2R1bmdfY29udGVudDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgdGFnX3RleHQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIG5vaV9kdW5nX2NvbnRlbnRfYmlnOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBjaGVja2JveDE6IFtmYWxzZSwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIGNoZWNrYm94MjogW2ZhbHNlLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgY2hlY2tib3gzOiBbZmFsc2UsIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX25vaUR1bmdGb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25WYWx1ZUNoYW5nZWQoZGF0YSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5vblZhbHVlQ2hhbmdlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25LZXlEb3duKGV2KSB7XHJcbiAgICAgICAgaWYgKEtleUNvZGVVdGlsLmlzU3BlY2lhbEtleShldikpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIG51bWJlciBrZXkgb3IgYmFja3NwYWNlIGtleVxyXG4gICAgICAgICAgICBpZiAoS2V5Q29kZVV0aWwuaXNOdW1iZXJLZXkoZXYpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLl9ub2lEdW5nRm9ybS5nZXQoJ3ZhbHVlX2RlY2ltYWwnKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE51bWJlckZvcm1hdFV0aWwubnVtRm9ybWF0KHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX25vaUR1bmdGb3JtLnBhdGNoVmFsdWUoeyAndmFsdWVfZGVjaW1hbCc6IHZhbHVlIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXX0=
