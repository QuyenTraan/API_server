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
var alsatian_1 = require("alsatian");
var repositories_1 = require("../../repositories");
var TestPG = /** @class */ (function () {
    function TestPG() {
    }
    // @IgnoreTest()
    TestPG.prototype.run100query = function () {
        var repo = new repositories_1.NoiDungRepository();
        var noidung = new NoiDung();
        noidung.tieu_de = 'If in doubt, use bruce-force';
        noidung.tag_int = [1, 2, 3];
        noidung.tag_text = ['a', 'b', 'c'];
        noidung.user_create = 'duc';
        noidung.user_update = 'duc';
        noidung.value_boolean = true;
        noidung.value_decimal = 1.2;
        noidung.value_int = 1;
        noidung.value_time = new Date();
        for (var i = 0; i < 100; i++) {
            var date = this.randomDate(new Date(2016, 0, 1), new Date());
            noidung.value_time = date;
            repo.insert(noidung);
        }
    };
    TestPG.prototype.randomDate = function (start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    };
    __decorate([
        alsatian_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TestPG.prototype, "run100query", null);
    return TestPG;
}());
exports.TestPG = TestPG;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvcmVwby9wZy5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscUNBQWtGO0FBQ2xGLG1EQUF1RDtBQVN2RDtJQUFBO0lBNEJBLENBQUM7SUExQkcsZ0JBQWdCO0lBRVQsNEJBQVcsR0FBbEI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLGdDQUFpQixFQUFFLENBQUM7UUFDbkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsT0FBTyxHQUFHLDhCQUE4QixDQUFDO1FBQ2pELE9BQU8sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBRTVCLE9BQU8sQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNoQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7WUFDN0QsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4QjtJQUNMLENBQUM7SUFFTywyQkFBVSxHQUFsQixVQUFtQixLQUFXLEVBQUUsR0FBUztRQUNyQyxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBdEJEO1FBREMsZUFBSSxFQUFFOzs7OzZDQW1CTjtJQU1MLGFBQUM7Q0E1QkQsQUE0QkMsSUFBQTtBQTVCWSx3QkFBTSIsImZpbGUiOiJ0ZXN0L3JlcG8vcGcuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFzeW5jVGVzdCwgRXhwZWN0LCBUZXN0LCBUaW1lb3V0LCBUZXN0Q2FzZSwgSWdub3JlVGVzdCB9IGZyb20gJ2Fsc2F0aWFuJztcclxuaW1wb3J0IHsgTm9pRHVuZ1JlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9yZXBvc2l0b3JpZXMnO1xyXG5pbXBvcnQgeyBcclxuICAgIFxyXG5cclxuXHJcbiAgICBcclxuIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVGVzdFBHIHtcclxuXHJcbiAgICAvLyBASWdub3JlVGVzdCgpXHJcbiAgICBAVGVzdCgpXHJcbiAgICBwdWJsaWMgcnVuMTAwcXVlcnkoKSB7XHJcbiAgICAgICAgbGV0IHJlcG8gPSBuZXcgTm9pRHVuZ1JlcG9zaXRvcnkoKTtcclxuICAgICAgICBsZXQgbm9pZHVuZyA9IG5ldyBOb2lEdW5nKCk7XHJcbiAgICAgICAgbm9pZHVuZy50aWV1X2RlID0gJ0lmIGluIGRvdWJ0LCB1c2UgYnJ1Y2UtZm9yY2UnO1xyXG4gICAgICAgIG5vaWR1bmcudGFnX2ludCA9IFsxLCAyLCAzXTtcclxuICAgICAgICBub2lkdW5nLnRhZ190ZXh0ID0gWydhJywgJ2InLCAnYyddO1xyXG4gICAgICAgIG5vaWR1bmcudXNlcl9jcmVhdGUgPSAnZHVjJztcclxuICAgICAgICBub2lkdW5nLnVzZXJfdXBkYXRlID0gJ2R1Yyc7XHJcblxyXG4gICAgICAgIG5vaWR1bmcudmFsdWVfYm9vbGVhbiA9IHRydWU7XHJcbiAgICAgICAgbm9pZHVuZy52YWx1ZV9kZWNpbWFsID0gMS4yO1xyXG4gICAgICAgIG5vaWR1bmcudmFsdWVfaW50ID0gMTtcclxuICAgICAgICBub2lkdW5nLnZhbHVlX3RpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGRhdGUgPSB0aGlzLnJhbmRvbURhdGUobmV3IERhdGUoMjAxNiwgMCwgMSksIG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgICBub2lkdW5nLnZhbHVlX3RpbWUgPSBkYXRlO1xyXG4gICAgICAgICAgICByZXBvLmluc2VydChub2lkdW5nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByYW5kb21EYXRlKHN0YXJ0OiBEYXRlLCBlbmQ6IERhdGUpOiBEYXRlIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoc3RhcnQuZ2V0VGltZSgpICsgTWF0aC5yYW5kb20oKSAqIChlbmQuZ2V0VGltZSgpIC0gc3RhcnQuZ2V0VGltZSgpKSk7XHJcbiAgICB9XHJcblxyXG59Il19
