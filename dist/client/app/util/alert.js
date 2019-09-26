"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sweetalert2_1 = require("sweetalert2");
var Alert = /** @class */ (function () {
    function Alert() {
    }
    Alert.showDeleteAlertWithCancel = function (title, text) {
        return sweetalert2_1.default({
            title: title,
            text: text,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Không'
        });
    };
    return Alert;
}());
exports.Alert = Alert;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91dGlsL2FsZXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQThDO0FBRTlDO0lBQUE7SUFhQSxDQUFDO0lBWmlCLCtCQUF5QixHQUF2QyxVQUF3QyxLQUFhLEVBQUUsSUFBWTtRQUMvRCxPQUFPLHFCQUFJLENBQUM7WUFDUixLQUFLLEVBQUUsS0FBSztZQUNaLElBQUksRUFBRSxJQUFJO1lBQ1YsSUFBSSxFQUFFLFNBQVM7WUFDZixnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLGtCQUFrQixFQUFFLFNBQVM7WUFDN0IsaUJBQWlCLEVBQUUsTUFBTTtZQUN6QixpQkFBaUIsRUFBRSxLQUFLO1lBQ3hCLGdCQUFnQixFQUFFLE9BQU87U0FDNUIsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNMLFlBQUM7QUFBRCxDQWJBLEFBYUMsSUFBQTtBQWJZLHNCQUFLIiwiZmlsZSI6ImFwcC91dGlsL2FsZXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVmYXVsdCBhcyBzd2FsIH0gZnJvbSAnc3dlZXRhbGVydDInO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFsZXJ0IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgc2hvd0RlbGV0ZUFsZXJ0V2l0aENhbmNlbCh0aXRsZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gc3dhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgdGV4dDogdGV4dCxcclxuICAgICAgICAgICAgdHlwZTogJ3dhcm5pbmcnLFxyXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6ICcjZDMzJyxcclxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdYw7NhJyxcclxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0tow7RuZydcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59Il19
