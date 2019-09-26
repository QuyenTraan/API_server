"use strict";
/**
 * created by hong duc 30/12/2016
 */
Object.defineProperty(exports, "__esModule", { value: true });
var winston = require("winston");
var LogUtil = /** @class */ (function () {
    function LogUtil() {
    }
    LogUtil.error = function (message) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        winston.error(message, { error: params });
    };
    LogUtil.logger = new (winston.Logger)({
        transports: [
            new (winston.transports.Console)(),
        ]
    });
    return LogUtil;
}());
exports.LogUtil = LogUtil;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvbG9nLXV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHOztBQUVILGlDQUFvQztBQUVwQztJQUFBO0lBVUEsQ0FBQztJQUhpQixhQUFLLEdBQW5CLFVBQW9CLE9BQWU7UUFBRSxnQkFBUzthQUFULFVBQVMsRUFBVCxxQkFBUyxFQUFULElBQVM7WUFBVCwrQkFBUzs7UUFDMUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBUmMsY0FBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsVUFBVSxFQUFFO1lBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUU7U0FDckM7S0FDSixDQUFDLENBQUM7SUFLUCxjQUFDO0NBVkQsQUFVQyxJQUFBO0FBVlksMEJBQU8iLCJmaWxlIjoidXRpbC9sb2ctdXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBjcmVhdGVkIGJ5IGhvbmcgZHVjIDMwLzEyLzIwMTZcclxuICovXHJcblxyXG5pbXBvcnQgd2luc3RvbiA9IHJlcXVpcmUoJ3dpbnN0b24nKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dVdGlsIHtcclxuICAgIHByaXZhdGUgc3RhdGljIGxvZ2dlciA9IG5ldyAod2luc3Rvbi5Mb2dnZXIpKHtcclxuICAgICAgICB0cmFuc3BvcnRzOiBbXHJcbiAgICAgICAgICAgIG5ldyAod2luc3Rvbi50cmFuc3BvcnRzLkNvbnNvbGUpKCksXHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBlcnJvcihtZXNzYWdlOiBzdHJpbmcsIC4uLnBhcmFtcykge1xyXG4gICAgICAgIHdpbnN0b24uZXJyb3IobWVzc2FnZSwgeyBlcnJvcjogcGFyYW1zIH0pO1xyXG4gICAgfVxyXG59Il19
