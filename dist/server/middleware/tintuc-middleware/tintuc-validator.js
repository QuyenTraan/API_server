"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tintuc_schema_1 = require("./tintuc-schema");
/**
 * Middleware dùng cho validate toàn bộ TinTuc api
 */
var TinTucValidator = /** @class */ (function () {
    function TinTucValidator() {
        var _this = this;
        this._schema = new tintuc_schema_1.TinTucSchema();
        this.validate = function (req, res, next) {
            req.check(_this._schema.schema);
            req.getValidationResult().then(function (result) {
                if (result.isEmpty()) {
                    next();
                }
                else {
                    res.status(400).json(result.array());
                }
            });
        };
    }
    return TinTucValidator;
}());
exports.default = TinTucValidator;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmUvdGludHVjLW1pZGRsZXdhcmUvdGludHVjLXZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGlEQUErQztBQUUvQzs7R0FFRztBQUNIO0lBQUE7UUFBQSxpQkFhQztRQVpXLFlBQU8sR0FBRyxJQUFJLDRCQUFZLEVBQUUsQ0FBQztRQUNyQyxhQUFRLEdBQUcsVUFBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7WUFDL0UsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQy9CLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07Z0JBQ2pDLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFO29CQUNsQixJQUFJLEVBQUUsQ0FBQztpQkFDVjtxQkFBTTtvQkFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztpQkFDeEM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUVQLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFBRCxzQkFBQztBQUFELENBYkEsQUFhQyxJQUFBIiwiZmlsZSI6Im1pZGRsZXdhcmUvdGludHVjLW1pZGRsZXdhcmUvdGludHVjLXZhbGlkYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xyXG5pbXBvcnQgeyBUaW5UdWNTY2hlbWEgfSBmcm9tICcuL3RpbnR1Yy1zY2hlbWEnO1xyXG5cclxuLyoqXHJcbiAqIE1pZGRsZXdhcmUgZMO5bmcgY2hvIHZhbGlkYXRlIHRvw6BuIGLhu5kgVGluVHVjIGFwaVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGluVHVjVmFsaWRhdG9yIHtcclxuICAgIHByaXZhdGUgX3NjaGVtYSA9IG5ldyBUaW5UdWNTY2hlbWEoKTtcclxuICAgIHZhbGlkYXRlID0gKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbiAgICAgICAgcmVxLmNoZWNrKHRoaXMuX3NjaGVtYS5zY2hlbWEpO1xyXG4gICAgICAgIHJlcS5nZXRWYWxpZGF0aW9uUmVzdWx0KCkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmlzRW1wdHkoKSkge1xyXG4gICAgICAgICAgICAgICAgbmV4dCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24ocmVzdWx0LmFycmF5KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG59Il19
