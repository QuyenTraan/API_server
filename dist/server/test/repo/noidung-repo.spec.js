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
var noidung_repository_1 = require("../../repositories/noidung-repository");
var noidungModel = require("../../models/noidung-model");
var noidung_test_data_1 = require("./noidung-test-data");
var NoiDungRepoSpec = /** @class */ (function () {
    function NoiDungRepoSpec() {
        this.noiDungRepo = new noidung_repository_1.NoiDungRepository();
    }
    NoiDungRepoSpec.prototype.testSearchQuery = function (option, expectValue, orderby, limit, offset) {
        return this.noiDungRepo.search(option, orderby, limit, offset)
            .then(function (result) {
            alsatian_1.Expect(result).toEqual(expectValue);
        });
    };
    NoiDungRepoSpec.prototype.testDelete = function () {
        return this.noiDungRepo.delete([187, 189])
            .then(function (result) {
            alsatian_1.Expect(result).toEqual(2);
        })
            .catch(function (error) {
            console.log(JSON.stringify(error));
            return Promise.reject(error);
        });
    };
    NoiDungRepoSpec.prototype.testUpdate = function () {
        return this.noiDungRepo.update({ noi_dung_id: 191, value_int: 100 })
            .then(function (result) {
            alsatian_1.Expect(result).toEqual(1);
        })
            .catch(function (error) {
            console.log(JSON.stringify(error));
            return Promise.reject(error);
        });
    };
    NoiDungRepoSpec.prototype.testInsert = function () {
        var noidung = new noidungModel.NoiDung();
        noidung.noi_dung_id = 1;
        noidung.value_int = 500;
        return this.noiDungRepo.insert(noidung)
            .then(function (result) {
            alsatian_1.Expect(result).toEqual(1);
        })
            .catch(function (error) {
            console.log(error);
            return Promise.reject(error);
        });
    };
    NoiDungRepoSpec.prototype.testQuaTrinhCRUD = function (id) {
        var _this = this;
        var noidung = new noidungModel.NoiDung();
        noidung.value_int = 500;
        noidung.tag_int = [1, 2, 3];
        noidung.tag_text = ['a', 'b', 'c'];
        noidung.tieu_de = 'hong duc';
        noidung.value_boolean = true;
        noidung.value_decimal = 1.2;
        // noidung.value_time = '1-20-2017';
        return this.noiDungRepo.insert(noidung)
            .then(function (rowCount) {
            alsatian_1.Expect(rowCount).toEqual(1);
            return _this.noiDungRepo.update({ noi_dung_id: id, value_time: '1-29-2017' });
        })
            .then(function (rowCount) {
            alsatian_1.Expect(rowCount).toEqual(1);
            return _this.noiDungRepo.getOne(id);
        })
            .then(function (result) {
            // Expect(result.noi_dung_id).toEqual(id);
            // return this.noiDungRepo.delete([id]);
        })
            .then(function (rowCount) {
            alsatian_1.Expect(rowCount).toEqual(1);
        })
            .catch(function (error) {
            console.log(error);
            return Promise.reject(error);
        });
    };
    __decorate([
        alsatian_1.TestCase({ noi_dung_id: 191 }, [noidung_test_data_1.data], 'noi_dung_id+1', 10, 0),
        alsatian_1.TestCase({ noi_dung_id: 191 }, [noidung_test_data_1.data]),
        alsatian_1.AsyncTest('test search function'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], NoiDungRepoSpec.prototype, "testSearchQuery", null);
    __decorate([
        alsatian_1.IgnoreTest(),
        alsatian_1.AsyncTest('test delete function'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NoiDungRepoSpec.prototype, "testDelete", null);
    __decorate([
        alsatian_1.IgnoreTest(),
        alsatian_1.AsyncTest('test update'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NoiDungRepoSpec.prototype, "testUpdate", null);
    __decorate([
        alsatian_1.IgnoreTest(),
        alsatian_1.AsyncTest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NoiDungRepoSpec.prototype, "testInsert", null);
    __decorate([
        alsatian_1.IgnoreTest(),
        alsatian_1.TestCase(201),
        alsatian_1.AsyncTest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], NoiDungRepoSpec.prototype, "testQuaTrinhCRUD", null);
    return NoiDungRepoSpec;
}());
exports.NoiDungRepoSpec = NoiDungRepoSpec;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvcmVwby9ub2lkdW5nLXJlcG8uc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFDQUF5RTtBQUN6RSw0RUFBMEU7QUFDMUUseURBQTJEO0FBQzNELHlEQUEyQztBQUUzQztJQUFBO1FBRUksZ0JBQVcsR0FBc0IsSUFBSSxzQ0FBaUIsRUFBRSxDQUFDO0lBdUY3RCxDQUFDO0lBbEZVLHlDQUFlLEdBQXRCLFVBQXVCLE1BQU0sRUFBRSxXQUFXLEVBQUUsT0FBUSxFQUFFLEtBQU0sRUFBRSxNQUFPO1FBQ2pFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDO2FBQ3pELElBQUksQ0FBQyxVQUFBLE1BQU07WUFDUixpQkFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFJTSxvQ0FBVSxHQUFqQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDckMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNSLGlCQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFBLEtBQUs7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNuQyxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUE7SUFDVixDQUFDO0lBSU0sb0NBQVUsR0FBakI7UUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFB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VixDQUFDO0lBakZEO1FBSEMsbUJBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLHdCQUFJLENBQUMsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM5RCxtQkFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsd0JBQUksQ0FBQyxDQUFDO1FBQ3RDLG9CQUFTLENBQUMsc0JBQXNCLENBQUM7Ozs7MERBTWpDO0lBSUQ7UUFGQyxxQkFBVSxFQUFFO1FBQ1osb0JBQVMsQ0FBQyxzQkFBc0IsQ0FBQzs7OztxREFVakM7SUFJRDtRQUZDLHFCQUFVLEVBQUU7UUFDWixvQkFBUyxDQUFDLGFBQWEsQ0FBQzs7OztxREFVeEI7SUFJRDtRQUZDLHFCQUFVLEVBQUU7UUFDWixvQkFBUyxFQUFFOzs7O3FEQWFYO0lBS0Q7UUFIQyxxQkFBVSxFQUFFO1FBQ1osbUJBQVEsQ0FBQyxHQUFHLENBQUM7UUFDYixvQkFBUyxFQUFFOzs7OzJEQThCWDtJQUNMLHNCQUFDO0NBekZELEFBeUZDLElBQUE7QUF6RlksMENBQWUiLCJmaWxlIjoidGVzdC9yZXBvL25vaWR1bmctcmVwby5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVzdCwgVGVzdENhc2UsIEV4cGVjdCwgSWdub3JlVGVzdCwgQXN5bmNUZXN0IH0gZnJvbSAnYWxzYXRpYW4nO1xyXG5pbXBvcnQgeyBOb2lEdW5nUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL3JlcG9zaXRvcmllcy9ub2lkdW5nLXJlcG9zaXRvcnknO1xyXG5pbXBvcnQgKiBhcyBub2lkdW5nTW9kZWwgZnJvbSAnLi4vLi4vbW9kZWxzL25vaWR1bmctbW9kZWwnO1xyXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi9ub2lkdW5nLXRlc3QtZGF0YSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTm9pRHVuZ1JlcG9TcGVjIHtcclxuXHJcbiAgICBub2lEdW5nUmVwbzogTm9pRHVuZ1JlcG9zaXRvcnkgPSBuZXcgTm9pRHVuZ1JlcG9zaXRvcnkoKTtcclxuXHJcbiAgICBAVGVzdENhc2UoeyBub2lfZHVuZ19pZDogMTkxIH0sIFtkYXRhXSwgJ25vaV9kdW5nX2lkKzEnLCAxMCwgMClcclxuICAgIEBUZXN0Q2FzZSh7IG5vaV9kdW5nX2lkOiAxOTEgfSwgW2RhdGFdKVxyXG4gICAgQEFzeW5jVGVzdCgndGVzdCBzZWFyY2ggZnVuY3Rpb24nKVxyXG4gICAgcHVibGljIHRlc3RTZWFyY2hRdWVyeShvcHRpb24sIGV4cGVjdFZhbHVlLCBvcmRlcmJ5PywgbGltaXQ/LCBvZmZzZXQ/KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9pRHVuZ1JlcG8uc2VhcmNoKG9wdGlvbiwgb3JkZXJieSwgbGltaXQsIG9mZnNldClcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIEV4cGVjdChyZXN1bHQpLnRvRXF1YWwoZXhwZWN0VmFsdWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBASWdub3JlVGVzdCgpXHJcbiAgICBAQXN5bmNUZXN0KCd0ZXN0IGRlbGV0ZSBmdW5jdGlvbicpXHJcbiAgICBwdWJsaWMgdGVzdERlbGV0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub2lEdW5nUmVwby5kZWxldGUoWzE4NywgMTg5XSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIEV4cGVjdChyZXN1bHQpLnRvRXF1YWwoMik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvcikpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBASWdub3JlVGVzdCgpXHJcbiAgICBAQXN5bmNUZXN0KCd0ZXN0IHVwZGF0ZScpXHJcbiAgICBwdWJsaWMgdGVzdFVwZGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub2lEdW5nUmVwby51cGRhdGUoeyBub2lfZHVuZ19pZDogMTkxLCB2YWx1ZV9pbnQ6IDEwMCB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgRXhwZWN0KHJlc3VsdCkudG9FcXVhbCgxKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIEBJZ25vcmVUZXN0KClcclxuICAgIEBBc3luY1Rlc3QoKVxyXG4gICAgcHVibGljIHRlc3RJbnNlcnQoKSB7XHJcbiAgICAgICAgbGV0IG5vaWR1bmcgPSBuZXcgbm9pZHVuZ01vZGVsLk5vaUR1bmcoKTtcclxuICAgICAgICBub2lkdW5nLm5vaV9kdW5nX2lkID0gMTtcclxuICAgICAgICBub2lkdW5nLnZhbHVlX2ludCA9IDUwMDtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub2lEdW5nUmVwby5pbnNlcnQobm9pZHVuZylcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIEV4cGVjdChyZXN1bHQpLnRvRXF1YWwoMSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIEBJZ25vcmVUZXN0KClcclxuICAgIEBUZXN0Q2FzZSgyMDEpXHJcbiAgICBAQXN5bmNUZXN0KClcclxuICAgIHB1YmxpYyB0ZXN0UXVhVHJpbmhDUlVEKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgbm9pZHVuZyA9IG5ldyBub2lkdW5nTW9kZWwuTm9pRHVuZygpO1xyXG4gICAgICAgIG5vaWR1bmcudmFsdWVfaW50ID0gNTAwO1xyXG4gICAgICAgIG5vaWR1bmcudGFnX2ludCA9IFsxLCAyLCAzXTtcclxuICAgICAgICBub2lkdW5nLnRhZ190ZXh0ID0gWydhJywgJ2InLCAnYyddO1xyXG4gICAgICAgIG5vaWR1bmcudGlldV9kZSA9ICdob25nIGR1Yyc7XHJcbiAgICAgICAgbm9pZHVuZy52YWx1ZV9ib29sZWFuID0gdHJ1ZTtcclxuICAgICAgICBub2lkdW5nLnZhbHVlX2RlY2ltYWwgPSAxLjI7XHJcbiAgICAgICAgLy8gbm9pZHVuZy52YWx1ZV90aW1lID0gJzEtMjAtMjAxNyc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9pRHVuZ1JlcG8uaW5zZXJ0KG5vaWR1bmcpXHJcbiAgICAgICAgICAgIC50aGVuKHJvd0NvdW50ID0+IHtcclxuICAgICAgICAgICAgICAgIEV4cGVjdChyb3dDb3VudCkudG9FcXVhbCgxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vaUR1bmdSZXBvLnVwZGF0ZSh7IG5vaV9kdW5nX2lkOiBpZCwgdmFsdWVfdGltZTogJzEtMjktMjAxNycgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJvd0NvdW50ID0+IHtcclxuICAgICAgICAgICAgICAgIEV4cGVjdChyb3dDb3VudCkudG9FcXVhbCgxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vaUR1bmdSZXBvLmdldE9uZShpZCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBFeHBlY3QocmVzdWx0Lm5vaV9kdW5nX2lkKS50b0VxdWFsKGlkKTtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiB0aGlzLm5vaUR1bmdSZXBvLmRlbGV0ZShbaWRdKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocm93Q291bnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgRXhwZWN0KHJvd0NvdW50KS50b0VxdWFsKDEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxufSJdfQ==
