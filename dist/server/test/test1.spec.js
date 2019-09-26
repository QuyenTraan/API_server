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
/**
 * created by hong duc 2/1/2017
 */
var alsatian_1 = require("alsatian");
var test_base_1 = require("./test.base");
var Test1 = /** @class */ (function (_super) {
    __extends(Test1, _super);
    function Test1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Test1.prototype.testGet = function () {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.request.get('/user')
                .expect(200)
                .expect({ name: 'duc' })
                .end(function (err) {
                _this.handleEnd(rej, res, err);
            });
        });
    };
    Test1.prototype.testPost = function () {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.request.post('/user')
                .set('Content-Type', 'application/json')
                .send({ name: 'duc' })
                .expect(200)
                .expect({ name: 'duc' })
                .end(function (err) {
                _this.handleEnd(rej, res, err);
            });
        });
    };
    Test1.prototype.testPostQuery = function () {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.request.post('/userName')
                .query({ name: 'duc' })
                .expect(200)
                .expect('duc')
                .end(function (err) {
                _this.handleEnd(rej, res, err);
            });
        });
    };
    __decorate([
        alsatian_1.AsyncTest('test get'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Test1.prototype, "testGet", null);
    __decorate([
        alsatian_1.AsyncTest('test post json'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Test1.prototype, "testPost", null);
    __decorate([
        alsatian_1.AsyncTest('test post query'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Test1.prototype, "testPostQuery", null);
    Test1 = __decorate([
        alsatian_1.TestFixture('test demo')
    ], Test1);
    return Test1;
}(test_base_1.TestBase));
exports.Test1 = Test1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvdGVzdDEuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNILHFDQUFnRTtBQUNoRSx5Q0FBdUM7QUFHdkM7SUFBMkIseUJBQVE7SUFBbkM7O0lBMENBLENBQUM7SUF2Q1UsdUJBQU8sR0FBZDtRQURBLGlCQVVDO1FBUkcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLEdBQUcsRUFBRSxHQUFHO1lBQ3hCLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztpQkFDcEIsTUFBTSxDQUFDLEdBQUcsQ0FBQztpQkFDWCxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7aUJBQ3ZCLEdBQUcsQ0FBQyxVQUFBLEdBQUc7Z0JBQ0osS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBR00sd0JBQVEsR0FBZjtRQURBLGlCQVlDO1FBVkcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLEdBQUcsRUFBRSxHQUFHO1lBQ3hCLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztpQkFDckIsR0FBRyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQztpQkFDdkMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO2lCQUNyQixNQUFNLENBQUMsR0FBRyxDQUFDO2lCQUNYLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztpQkFDdkIsR0FBRyxDQUFDLFVBQUEsR0FBRztnQkFDSixLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFHTSw2QkFBYSxHQUFwQjtRQURBLGlCQVdDO1FBVEcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLEdBQUcsRUFBRSxHQUFHO1lBQ3hCLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztpQkFDekIsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO2lCQUN0QixNQUFNLENBQUMsR0FBRyxDQUFDO2lCQUNYLE1BQU0sQ0FBQyxLQUFLLENBQUM7aUJBQ2IsR0FBRyxDQUFDLFVBQUEsR0FBRztnQkFDSixLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFwQ0Q7UUFEQyxvQkFBUyxDQUFDLFVBQVUsQ0FBQzs7Ozt3Q0FVckI7SUFHRDtRQURDLG9CQUFTLENBQUMsZ0JBQWdCLENBQUM7Ozs7eUNBWTNCO0lBR0Q7UUFEQyxvQkFBUyxDQUFDLGlCQUFpQixDQUFDOzs7OzhDQVc1QjtJQXZDUSxLQUFLO1FBRGpCLHNCQUFXLENBQUMsV0FBVyxDQUFDO09BQ1osS0FBSyxDQTBDakI7SUFBRCxZQUFDO0NBMUNELEFBMENDLENBMUMwQixvQkFBUSxHQTBDbEM7QUExQ1ksc0JBQUsiLCJmaWxlIjoidGVzdC90ZXN0MS5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIGNyZWF0ZWQgYnkgaG9uZyBkdWMgMi8xLzIwMTdcclxuICovXHJcbmltcG9ydCB7IEFzeW5jVGVzdCwgVGVzdCwgRXhwZWN0LCBUZXN0Rml4dHVyZSB9IGZyb20gJ2Fsc2F0aWFuJztcclxuaW1wb3J0IHsgVGVzdEJhc2UgfSBmcm9tICcuL3Rlc3QuYmFzZSc7XHJcblxyXG5AVGVzdEZpeHR1cmUoJ3Rlc3QgZGVtbycpXHJcbmV4cG9ydCBjbGFzcyBUZXN0MSBleHRlbmRzIFRlc3RCYXNlIHtcclxuXHJcbiAgICBAQXN5bmNUZXN0KCd0ZXN0IGdldCcpXHJcbiAgICBwdWJsaWMgdGVzdEdldCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdC5nZXQoJy91c2VyJylcclxuICAgICAgICAgICAgICAgIC5leHBlY3QoMjAwKVxyXG4gICAgICAgICAgICAgICAgLmV4cGVjdCh7IG5hbWU6ICdkdWMnIH0pXHJcbiAgICAgICAgICAgICAgICAuZW5kKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFbmQocmVqLCByZXMsIGVycik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBAQXN5bmNUZXN0KCd0ZXN0IHBvc3QganNvbicpXHJcbiAgICBwdWJsaWMgdGVzdFBvc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3QucG9zdCgnL3VzZXInKVxyXG4gICAgICAgICAgICAgICAgLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKVxyXG4gICAgICAgICAgICAgICAgLnNlbmQoeyBuYW1lOiAnZHVjJyB9KVxyXG4gICAgICAgICAgICAgICAgLmV4cGVjdCgyMDApXHJcbiAgICAgICAgICAgICAgICAuZXhwZWN0KHsgbmFtZTogJ2R1YycgfSlcclxuICAgICAgICAgICAgICAgIC5lbmQoZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVuZChyZWosIHJlcywgZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIEBBc3luY1Rlc3QoJ3Rlc3QgcG9zdCBxdWVyeScpXHJcbiAgICBwdWJsaWMgdGVzdFBvc3RRdWVyeSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdC5wb3N0KCcvdXNlck5hbWUnKVxyXG4gICAgICAgICAgICAgICAgLnF1ZXJ5KHsgbmFtZTogJ2R1YycgfSlcclxuICAgICAgICAgICAgICAgIC5leHBlY3QoMjAwKVxyXG4gICAgICAgICAgICAgICAgLmV4cGVjdCgnZHVjJylcclxuICAgICAgICAgICAgICAgIC5lbmQoZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVuZChyZWosIHJlcywgZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19
