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
var TinTuc = /** @class */ (function (_super) {
    __extends(TinTuc, _super);
    function TinTuc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TinTuc;
}(base_model_1.ModelBase));
exports.TinTuc = TinTuc;
var TinTucCurrentStatusEnum = /** @class */ (function () {
    function TinTucCurrentStatusEnum() {
    }
    Object.defineProperty(TinTucCurrentStatusEnum, "values", {
        get: function () {
            return [this.ACTIVE, this.DELETE, this.PENDING];
        },
        enumerable: true,
        configurable: true
    });
    TinTucCurrentStatusEnum.ACTIVE = 'active';
    TinTucCurrentStatusEnum.DELETE = 'delete';
    TinTucCurrentStatusEnum.PENDING = 'pending';
    return TinTucCurrentStatusEnum;
}());
exports.TinTucCurrentStatusEnum = TinTucCurrentStatusEnum;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy90aW50dWMtbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXlDO0FBQ3pDO0lBQTRCLDBCQUFTO0lBQXJDOztJQU9BLENBQUM7SUFBRCxhQUFDO0FBQUQsQ0FQQSxBQU9DLENBUDJCLHNCQUFTLEdBT3BDO0FBUFksd0JBQU07QUFTbkI7SUFBQTtJQU9BLENBQUM7SUFIRyxzQkFBVyxpQ0FBTTthQUFqQjtZQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BELENBQUM7OztPQUFBO0lBTGUsOEJBQU0sR0FBRyxRQUFRLENBQUM7SUFDbEIsOEJBQU0sR0FBRyxRQUFRLENBQUM7SUFDbEIsK0JBQU8sR0FBRyxTQUFTLENBQUM7SUFJeEMsOEJBQUM7Q0FQRCxBQU9DLElBQUE7QUFQWSwwREFBdUIiLCJmaWxlIjoibW9kZWxzL3RpbnR1Yy1tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZGVsQmFzZSB9IGZyb20gJy4vYmFzZS1tb2RlbCc7XHJcbmV4cG9ydCBjbGFzcyBUaW5UdWMgZXh0ZW5kcyBNb2RlbEJhc2Uge1xyXG4gICAgdXNlcl9pZDogbnVtYmVyO1xyXG4gICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgbm9pX2R1bmc6IGFueTtcclxuICAgIHRpZXVfZGU6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRpblR1Y0N1cnJlbnRTdGF0dXNFbnVtIHtcclxuICAgIHN0YXRpYyByZWFkb25seSBBQ1RJVkUgPSAnYWN0aXZlJztcclxuICAgIHN0YXRpYyByZWFkb25seSBERUxFVEUgPSAnZGVsZXRlJztcclxuICAgIHN0YXRpYyByZWFkb25seSBQRU5ESU5HID0gJ3BlbmRpbmcnO1xyXG4gICAgc3RhdGljIGdldCB2YWx1ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLkFDVElWRSwgdGhpcy5ERUxFVEUsIHRoaXMuUEVORElOR107XHJcbiAgICB9XHJcbn0iXX0=
