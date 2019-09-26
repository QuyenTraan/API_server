"use strict";
/**
 * ĐÂY LÀ NHỮNG GIÁ TRỊ MẶC ĐỊNH DÙNG CHUNG TRONG CẢ HỆ THỐNG
 * KHÔNG ĐƯỢC THAY ĐỔI NẾU KHÔNG ĐƯỢC PHÉP
 */
Object.defineProperty(exports, "__esModule", { value: true });
var VARIABLES;
(function (VARIABLES) {
    var ErrorMessage = /** @class */ (function () {
        function ErrorMessage() {
        }
        ErrorMessage.MISSING_PARAM = 'thiếu tham số';
        ErrorMessage.NO_DATA = 'không tồn tại dữ liệu';
        ErrorMessage.NEED_COLUMN_IN = function (col_name, type, in_where) {
            var messages = [];
            for (var i = 0; i < col_name.length; i++) {
                messages.push("c\u1EA7n " + col_name[i] + " ki\u1EC3u " + type[i]);
            }
            var message = messages.join(',');
            return message + " trong " + in_where;
        };
        ErrorMessage.NO_DATA_WITH_ID = function (id) {
            return "kh\u00F4ng c\u00F3 d\u1EEF li\u1EC7u t\u1ED3n t\u1EA1i v\u1EDBi id " + id;
        };
        return ErrorMessage;
    }());
    VARIABLES.ErrorMessage = ErrorMessage;
    var ValidatorMessage = /** @class */ (function () {
        function ValidatorMessage() {
        }
        ValidatorMessage.IS_INT = 'phải là kiểu int';
        ValidatorMessage.IS_STRING = 'phải là kiểu string';
        ValidatorMessage.IS_FLOAT = 'phải là số thập phân';
        ValidatorMessage.IS_BOOLEAN = 'phải là kiểu boolean';
        ValidatorMessage.IS_DATE = 'giá trị phải thể hiện đúng giá trị thời gian';
        ValidatorMessage.IS_ARRAY = 'giá trị phải là mảng';
        ValidatorMessage.IS_IN_STANDARD_FORMAT = 'giá trị phải đúng theo format ten_cot+0(hoặc 1)[,ten_cot+0(hoặc 1)]';
        ValidatorMessage.IS_IN_RANGE_OF_VALUE = 'phải là 1 trong các giá trị';
        return ValidatorMessage;
    }());
    VARIABLES.ValidatorMessage = ValidatorMessage;
})(VARIABLES = exports.VARIABLES || (exports.VARIABLES = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvdmFyaWFibGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7O0dBR0c7O0FBRUgsSUFBaUIsU0FBUyxDQTJCekI7QUEzQkQsV0FBaUIsU0FBUztJQUN0QjtRQUFBO1FBY0EsQ0FBQztRQWJtQiwwQkFBYSxHQUFHLGVBQWUsQ0FBQztRQUNoQyxvQkFBTyxHQUFHLHVCQUF1QixDQUFDO1FBQ2xDLDJCQUFjLEdBQUcsVUFBVSxRQUF1QixFQUFFLElBQW1CLEVBQUUsUUFBZ0I7WUFDckcsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN0QyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxtQkFBUyxJQUFJLENBQUMsQ0FBQyxDQUFHLENBQUMsQ0FBQzthQUN2RDtZQUNELElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakMsT0FBVSxPQUFPLGVBQVUsUUFBVSxDQUFDO1FBQzFDLENBQUMsQ0FBQTtRQUNlLDRCQUFlLEdBQUcsVUFBVSxFQUFFO1lBQzFDLE9BQU8sd0VBQW1DLEVBQUksQ0FBQztRQUNuRCxDQUFDLENBQUE7UUFDTCxtQkFBQztLQWRELEFBY0MsSUFBQTtJQWRZLHNCQUFZLGVBY3hCLENBQUE7SUFFRDtRQUFBO1FBU0EsQ0FBQztRQVJtQix1QkFBTSxHQUFHLGtCQUFrQixDQUFDO1FBQzVCLDBCQUFTLEdBQUcscUJBQXFCLENBQUM7UUFDbEMseUJBQVEsR0FBRyxzQkFBc0IsQ0FBQztRQUNsQywyQkFBVSxHQUFHLHNCQUFzQixDQUFDO1FBQ3BDLHdCQUFPLEdBQUcsOENBQThDLENBQUM7UUFDekQseUJBQVEsR0FBRyxzQkFBc0IsQ0FBQztRQUNsQyxzQ0FBcUIsR0FBRyxxRUFBcUUsQ0FBQztRQUM5RixxQ0FBb0IsR0FBRyw2QkFBNkIsQ0FBQztRQUN6RSx1QkFBQztLQVRELEFBU0MsSUFBQTtJQVRZLDBCQUFnQixtQkFTNUIsQ0FBQTtBQUNMLENBQUMsRUEzQmdCLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBMkJ6QiIsImZpbGUiOiJ1dGlsL3ZhcmlhYmxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDEkMOCWSBMw4AgTkjhu65ORyBHScOBIFRS4buKIE3hurZDIMSQ4buKTkggRMOZTkcgQ0hVTkcgVFJPTkcgQ+G6oiBI4buGIFRI4buQTkdcclxuICogS0jDlE5HIMSQxq/hu6JDIFRIQVkgxJDhu5RJIE7hur5VIEtIw5RORyDEkMav4buiQyBQSMOJUFxyXG4gKi9cclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgVkFSSUFCTEVTIHtcclxuICAgIGV4cG9ydCBjbGFzcyBFcnJvck1lc3NhZ2Uge1xyXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBNSVNTSU5HX1BBUkFNID0gJ3RoaeG6v3UgdGhhbSBz4buRJztcclxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgTk9fREFUQSA9ICdraMO0bmcgdOG7k24gdOG6oWkgZOG7ryBsaeG7h3UnO1xyXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBORUVEX0NPTFVNTl9JTiA9IGZ1bmN0aW9uIChjb2xfbmFtZTogQXJyYXk8c3RyaW5nPiwgdHlwZTogQXJyYXk8c3RyaW5nPiwgaW5fd2hlcmU6IHN0cmluZykge1xyXG4gICAgICAgICAgICBsZXQgbWVzc2FnZXMgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xfbmFtZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXMucHVzaChgY+G6p24gJHtjb2xfbmFtZVtpXX0ga2nhu4N1ICR7dHlwZVtpXX1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IG1lc3NhZ2VzLmpvaW4oJywnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGAke21lc3NhZ2V9IHRyb25nICR7aW5fd2hlcmV9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IE5PX0RBVEFfV0lUSF9JRCA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYGtow7RuZyBjw7MgZOG7ryBsaeG7h3UgdOG7k24gdOG6oWkgduG7m2kgaWQgJHtpZH1gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVmFsaWRhdG9yTWVzc2FnZSB7XHJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IElTX0lOVCA9ICdwaOG6o2kgbMOgIGtp4buDdSBpbnQnO1xyXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBJU19TVFJJTkcgPSAncGjhuqNpIGzDoCBraeG7g3Ugc3RyaW5nJztcclxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgSVNfRkxPQVQgPSAncGjhuqNpIGzDoCBz4buRIHRo4bqtcCBwaMOibic7XHJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IElTX0JPT0xFQU4gPSAncGjhuqNpIGzDoCBraeG7g3UgYm9vbGVhbic7XHJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IElTX0RBVEUgPSAnZ2nDoSB0cuG7iyBwaOG6o2kgdGjhu4MgaGnhu4duIMSRw7puZyBnacOhIHRy4buLIHRo4budaSBnaWFuJztcclxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgSVNfQVJSQVkgPSAnZ2nDoSB0cuG7iyBwaOG6o2kgbMOgIG3huqNuZyc7XHJcbiAgICAgICAgc3RhdGljIHJlYWRvbmx5IElTX0lOX1NUQU5EQVJEX0ZPUk1BVCA9ICdnacOhIHRy4buLIHBo4bqjaSDEkcO6bmcgdGhlbyBmb3JtYXQgdGVuX2NvdCswKGhv4bq3YyAxKVssdGVuX2NvdCswKGhv4bq3YyAxKV0nO1xyXG4gICAgICAgIHN0YXRpYyByZWFkb25seSBJU19JTl9SQU5HRV9PRl9WQUxVRSA9ICdwaOG6o2kgbMOgIDEgdHJvbmcgY8OhYyBnacOhIHRy4buLJztcclxuICAgIH1cclxufVxyXG5cclxuIl19
