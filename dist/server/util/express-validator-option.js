"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validator = require("validator");
/**
 * đây là nơi khai báo chung của cái module express-validator
 * errorFormatter  và customValidators là dùng chung cho tất cả
 */
exports.options = {
    errorFormatter: function (param, msg, value) {
        var namespace = param.split('.'), root = namespace.shift(), formParam = root;
        while (namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param: formParam,
            msg: msg,
            value: value
        };
    },
    customValidators: {
        /**
         * @author Hồng đức 17/1/2017
         * dùng để kiểm {value} có phải là mảng không
         * {options} có {isInt} khi đặt true thì sẽ kiểm tra mọi phần tử trong mảng có phải kiểu int không
         * {isString} khi đặt true sẽ kiểm tra mọi phần tử trong mảng có phải kiểu string không
         */
        isArray: function (value, options) {
            if (Array.isArray(value)) {
                if (!options) {
                    return true;
                }
                else {
                    if (options.isInt) {
                        return value.every(function (elm) {
                            return validator.isInt(elm);
                        });
                    }
                    if (options.isString) {
                        return value.every(function (elm) {
                            return typeof elm === 'string';
                        });
                    }
                    return true;
                }
            }
            else {
                return false;
            }
        },
        /**
         * @author Hồng đức 17/1/2017
         * dùng để kiểm tra {value} có phải là kiểu string không
         */
        isString: function (value) {
            return typeof value === 'string';
        },
        /**
         * @author hồng đức 17/1/2017
         * dùng để kiểm tra value có format đúng theo standard ko
         */
        isInStandardFormat: function (value) {
            if (value.length < 0 || !(new RegExp(/^(\w+\+[0||1])(,\w+\+[0||1])*$/g).test(value))) {
                return false;
            }
            else {
                return true;
            }
        },
        /**
         * @author hồng đức 06/2/2017
         * dùng kiểm tra nó có thuộc giá trị trong khoảng nào ko
         *
         * @param {any} option có range là mảng chứa khoảng giá trị
         * @param {any} value là giá trị để xét
         */
        isInRangeOfValue: function (value, options) {
            return options.range.indexOf(value) !== -1;
        }
    }
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvZXhwcmVzcy12YWxpZGF0b3Itb3B0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXdDO0FBQ3hDOzs7R0FHRztBQUNVLFFBQUEsT0FBTyxHQUFHO0lBQ25CLGNBQWMsRUFBRSxVQUFVLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSztRQUN2QyxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUMxQixJQUFJLEdBQUcsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUN4QixTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXZCLE9BQU8sU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUNyQixTQUFTLElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxHQUFHLENBQUM7U0FDOUM7UUFDRCxPQUFPO1lBQ0gsS0FBSyxFQUFFLFNBQVM7WUFDaEIsR0FBRyxFQUFFLEdBQUc7WUFDUixLQUFLLEVBQUUsS0FBSztTQUNmLENBQUM7SUFDTixDQUFDO0lBQ0QsZ0JBQWdCLEVBQUU7UUFDZDs7Ozs7V0FLRztRQUNILE9BQU8sRUFBRSxVQUFVLEtBQWlCLEVBQUUsT0FBUTtZQUMxQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ1YsT0FBTyxJQUFJLENBQUM7aUJBQ2Y7cUJBQU07b0JBQ0gsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO3dCQUNmLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFBLEdBQUc7NEJBQ2xCLE9BQU8sU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDaEMsQ0FBQyxDQUFDLENBQUM7cUJBQ047b0JBRUQsSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFO3dCQUNsQixPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHOzRCQUNsQixPQUFPLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQzt3QkFDbkMsQ0FBQyxDQUFDLENBQUM7cUJBQ047b0JBRUQsT0FBTyxJQUFJLENBQUM7aUJBQ2Y7YUFDSjtpQkFBTTtnQkFDSCxPQUFPLEtBQUssQ0FBQzthQUNoQjtRQUVMLENBQUM7UUFDRDs7O1dBR0c7UUFDSCxRQUFRLEVBQUUsVUFBVSxLQUFLO1lBQ3JCLE9BQU8sT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDO1FBQ3JDLENBQUM7UUFDRDs7O1dBR0c7UUFDSCxrQkFBa0IsRUFBRSxVQUFVLEtBQWE7WUFDdkMsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDbEYsT0FBTyxLQUFLLENBQUM7YUFDaEI7aUJBQU07Z0JBQ0gsT0FBTyxJQUFJLENBQUM7YUFDZjtRQUNMLENBQUM7UUFDRDs7Ozs7O1dBTUc7UUFDSCxnQkFBZ0IsRUFBRSxVQUFVLEtBQUssRUFBRSxPQUFPO1lBQ3RDLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDL0MsQ0FBQztLQUNKO0NBQ0osQ0FBQyIsImZpbGUiOiJ1dGlsL2V4cHJlc3MtdmFsaWRhdG9yLW9wdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB2YWxpZGF0b3IgPSByZXF1aXJlKCd2YWxpZGF0b3InKTtcclxuLyoqXHJcbiAqIMSRw6J5IGzDoCBuxqFpIGtoYWkgYsOhbyBjaHVuZyBj4bunYSBjw6FpIG1vZHVsZSBleHByZXNzLXZhbGlkYXRvclxyXG4gKiBlcnJvckZvcm1hdHRlciAgdsOgIGN1c3RvbVZhbGlkYXRvcnMgbMOgIGTDuW5nIGNodW5nIGNobyB04bqldCBj4bqjXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIGVycm9yRm9ybWF0dGVyOiBmdW5jdGlvbiAocGFyYW0sIG1zZywgdmFsdWUpIHtcclxuICAgICAgICB2YXIgbmFtZXNwYWNlID0gcGFyYW0uc3BsaXQoJy4nKVxyXG4gICAgICAgICAgICAsIHJvb3QgPSBuYW1lc3BhY2Uuc2hpZnQoKVxyXG4gICAgICAgICAgICAsIGZvcm1QYXJhbSA9IHJvb3Q7XHJcblxyXG4gICAgICAgIHdoaWxlIChuYW1lc3BhY2UubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGZvcm1QYXJhbSArPSAnWycgKyBuYW1lc3BhY2Uuc2hpZnQoKSArICddJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcGFyYW06IGZvcm1QYXJhbSxcclxuICAgICAgICAgICAgbXNnOiBtc2csXHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY3VzdG9tVmFsaWRhdG9yczoge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBhdXRob3IgSOG7k25nIMSR4bupYyAxNy8xLzIwMTdcclxuICAgICAgICAgKiBkw7luZyDEkeG7gyBraeG7g20ge3ZhbHVlfSBjw7MgcGjhuqNpIGzDoCBt4bqjbmcga2jDtG5nXHJcbiAgICAgICAgICoge29wdGlvbnN9IGPDsyB7aXNJbnR9IGtoaSDEkeG6t3QgdHJ1ZSB0aMOsIHPhur0ga2nhu4NtIHRyYSBt4buNaSBwaOG6p24gdOG7rSB0cm9uZyBt4bqjbmcgY8OzIHBo4bqjaSBraeG7g3UgaW50IGtow7RuZ1xyXG4gICAgICAgICAqIHtpc1N0cmluZ30ga2hpIMSR4bq3dCB0cnVlIHPhur0ga2nhu4NtIHRyYSBt4buNaSBwaOG6p24gdOG7rSB0cm9uZyBt4bqjbmcgY8OzIHBo4bqjaSBraeG7g3Ugc3RyaW5nIGtow7RuZ1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlzQXJyYXk6IGZ1bmN0aW9uICh2YWx1ZTogQXJyYXk8YW55Piwgb3B0aW9ucz8pIHtcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuaXNJbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGVsbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdG9yLmlzSW50KGVsbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuaXNTdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGVsbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIGVsbSA9PT0gJ3N0cmluZyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAYXV0aG9yIEjhu5NuZyDEkeG7qWMgMTcvMS8yMDE3XHJcbiAgICAgICAgICogZMO5bmcgxJHhu4Mga2nhu4NtIHRyYSB7dmFsdWV9IGPDsyBwaOG6o2kgbMOgIGtp4buDdSBzdHJpbmcga2jDtG5nXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaXNTdHJpbmc6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBhdXRob3IgaOG7k25nIMSR4bupYyAxNy8xLzIwMTdcclxuICAgICAgICAgKiBkw7luZyDEkeG7gyBraeG7g20gdHJhIHZhbHVlIGPDsyBmb3JtYXQgxJHDum5nIHRoZW8gc3RhbmRhcmQga29cclxuICAgICAgICAgKi9cclxuICAgICAgICBpc0luU3RhbmRhcmRGb3JtYXQ6IGZ1bmN0aW9uICh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPCAwIHx8ICEobmV3IFJlZ0V4cCgvXihcXHcrXFwrWzB8fDFdKSgsXFx3K1xcK1swfHwxXSkqJC9nKS50ZXN0KHZhbHVlKSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAYXV0aG9yIGjhu5NuZyDEkeG7qWMgMDYvMi8yMDE3XHJcbiAgICAgICAgICogZMO5bmcga2nhu4NtIHRyYSBuw7MgY8OzIHRodeG7mWMgZ2nDoSB0cuG7iyB0cm9uZyBraG/huqNuZyBuw6BvIGtvXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHthbnl9IG9wdGlvbiBjw7MgcmFuZ2UgbMOgIG3huqNuZyBjaOG7qWEga2hv4bqjbmcgZ2nDoSB0cuG7i1xyXG4gICAgICAgICAqIEBwYXJhbSB7YW55fSB2YWx1ZSBsw6AgZ2nDoSB0cuG7iyDEkeG7gyB4w6l0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaXNJblJhbmdlT2ZWYWx1ZTogZnVuY3Rpb24gKHZhbHVlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLnJhbmdlLmluZGV4T2YodmFsdWUpICE9PSAtMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07Il19
