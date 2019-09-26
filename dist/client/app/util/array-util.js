"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var ArrayUtil = /** @class */ (function () {
    function ArrayUtil() {
    }
    ArrayUtil.inArray = function (array, search) {
        return _.some(array, function (value, index, collection) {
            if (value === search) {
                return true;
            }
            return false;
        });
    };
    return ArrayUtil;
}());
exports.ArrayUtil = ArrayUtil;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91dGlsL2FycmF5LXV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQkFBNEI7QUFFNUI7SUFBQTtJQVNBLENBQUM7SUFSaUIsaUJBQU8sR0FBckIsVUFBc0IsS0FBSyxFQUFFLE1BQU07UUFDL0IsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVTtZQUMxQyxJQUFJLEtBQUssS0FBSyxNQUFNLEVBQUU7Z0JBQ2xCLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDTCxnQkFBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksOEJBQVMiLCJmaWxlIjoiYXBwL3V0aWwvYXJyYXktdXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcnJheVV0aWwge1xyXG4gICAgcHVibGljIHN0YXRpYyBpbkFycmF5KGFycmF5LCBzZWFyY2gpIHtcclxuICAgICAgICByZXR1cm4gXy5zb21lKGFycmF5LCAodmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gc2VhcmNoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSJdfQ==
