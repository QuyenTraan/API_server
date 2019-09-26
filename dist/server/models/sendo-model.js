"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_model_1 = require("./base-model");
var SenDo = /** @class */ (function (_super) {
    __extends(SenDo, _super);
    function SenDo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SenDo;
}(base_model_1.ModelBase));
exports.SenDo = SenDo;
var SenDoCurrentStatusEnum = /** @class */ (function () {
    function SenDoCurrentStatusEnum() {
    }
    Object.defineProperty(SenDoCurrentStatusEnum, "values", {
        get: function () {
            return [this.ACTIVE, this.DELETE, this.PENDING];
        },
        enumerable: true,
        configurable: true
    });
    SenDoCurrentStatusEnum.ACTIVE = 'active';
    SenDoCurrentStatusEnum.DELETE = 'delete';
    SenDoCurrentStatusEnum.PENDING = 'pending';
    return SenDoCurrentStatusEnum;
}());
exports.SenDoCurrentStatusEnum = SenDoCurrentStatusEnum;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9zZW5kby1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBeUM7QUFDekM7SUFBMkIseUJBQVM7SUFBcEM7O0lBT0EsQ0FBQztJQUFELFlBQUM7QUFBRCxDQVBBLEFBT0MsQ0FQMEIsc0JBQVMsR0FPbkM7QUFQWSxzQkFBSztBQVNsQjtJQUFBO0lBT0EsQ0FBQztJQUhHLHNCQUFXLGdDQUFNO2FBQWpCO1lBQ0ksT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7SUFMZSw2QkFBTSxHQUFHLFFBQVEsQ0FBQztJQUNsQiw2QkFBTSxHQUFHLFFBQVEsQ0FBQztJQUNsQiw4QkFBTyxHQUFHLFNBQVMsQ0FBQztJQUl4Qyw2QkFBQztDQVBELEFBT0MsSUFBQTtBQVBZLHdEQUFzQiIsImZpbGUiOiJtb2RlbHMvc2VuZG8tbW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RlbEJhc2UgfSBmcm9tICcuL2Jhc2UtbW9kZWwnO1xyXG5leHBvcnQgY2xhc3MgU2VuRG8gZXh0ZW5kcyBNb2RlbEJhc2Uge1xyXG4gICAgdXNlcl9pZDogbnVtYmVyO1xyXG4gICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgbm9pX2R1bmc6IGFueTtcclxuICAgIHRpZXVfZGU6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlbkRvQ3VycmVudFN0YXR1c0VudW0ge1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IEFDVElWRSA9ICdhY3RpdmUnO1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IERFTEVURSA9ICdkZWxldGUnO1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IFBFTkRJTkcgPSAncGVuZGluZyc7XHJcbiAgICBzdGF0aWMgZ2V0IHZhbHVlcygpIHtcclxuICAgICAgICByZXR1cm4gW3RoaXMuQUNUSVZFLCB0aGlzLkRFTEVURSwgdGhpcy5QRU5ESU5HXTtcclxuICAgIH1cclxufSJdfQ==
