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
var repo_util_1 = require("../../repositories/util/repo-util");
var TestUtilRepo = /** @class */ (function () {
    function TestUtilRepo() {
    }
    TestUtilRepo.prototype.testConvertQueryForOrderBy = function (standard, expectValue) {
        var result = repo_util_1.RepoUtil.convertQueryForOrderBy(standard);
        alsatian_1.Expect(result).toEqual(expectValue);
    };
    TestUtilRepo.prototype.testErrorConvertQueryForOrderBy = function (standard) {
        alsatian_1.Expect(function () {
            repo_util_1.RepoUtil.convertQueryForOrderBy(standard);
        }).toThrow();
    };
    TestUtilRepo.prototype.testErrorConvertQueryForOrderBy2 = function (standard) {
        alsatian_1.Expect(function () {
            repo_util_1.RepoUtil.convertQueryForOrderBy(standard);
        }).not.toThrow();
    };
    TestUtilRepo.prototype.testBuildWhereQuery = function (object, expectValue) {
        var result = repo_util_1.RepoUtil.buildWhereQuery(object);
        alsatian_1.Expect(result.query).toEqual(expectValue.query);
        alsatian_1.Expect(result.params).toEqual(expectValue.params);
    };
    TestUtilRepo.prototype.testErrorBuildWhereQuery = function (object) {
        alsatian_1.Expect(function () {
            repo_util_1.RepoUtil.buildWhereQuery(object);
        }).toThrow();
    };
    TestUtilRepo.prototype.testBuildSetQuery = function (object, array, expectValue) {
        var result = repo_util_1.RepoUtil.buildSetQuery(object, array);
        alsatian_1.Expect(result.query).toEqual(expectValue.query);
        alsatian_1.Expect(result.params).toEqual(expectValue.params);
    };
    TestUtilRepo.prototype.testErrorBuildSetQuery = function (object, array) {
        alsatian_1.Expect(function () {
            repo_util_1.RepoUtil.buildSetQuery(object, array);
        }).toThrow();
    };
    __decorate([
        alsatian_1.TestCase('noi_dung+1', 'ORDER BY noi_dung DESC'),
        alsatian_1.TestCase('noi_dung+1,tieu_de+0', 'ORDER BY noi_dung DESC,tieu_de ASC'),
        alsatian_1.Test('test convertQueryForOrderBy'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], TestUtilRepo.prototype, "testConvertQueryForOrderBy", null);
    __decorate([
        alsatian_1.TestCase(''),
        alsatian_1.TestCase('noi_dung+3'),
        alsatian_1.TestCase('noi_dung+1noi_dung+1'),
        alsatian_1.TestCase('noidung+1,noi_dung+1,'),
        alsatian_1.Test('ConvertQueryForOrderBy must throw Error'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TestUtilRepo.prototype, "testErrorConvertQueryForOrderBy", null);
    __decorate([
        alsatian_1.TestCase('noidung+1,noi_dung+0'),
        alsatian_1.TestCase('noidung+1,noi_dung+0,tencot+0'),
        alsatian_1.Test('ConvertQueryForOrderBy must not throw Error'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TestUtilRepo.prototype, "testErrorConvertQueryForOrderBy2", null);
    __decorate([
        alsatian_1.TestCase({ array: [] }, { query: 'WHERE $1 && array', params: [[]] }),
        alsatian_1.TestCase({ noi_dung_id: 1, tieu_de: 'hong duc' }, { query: 'WHERE noi_dung_id = $1 and tieu_de like $2', params: [1, '%hong duc%'] }),
        alsatian_1.Test('test buildWhereQuery'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], TestUtilRepo.prototype, "testBuildWhereQuery", null);
    __decorate([
        alsatian_1.TestCase({}),
        alsatian_1.Test('buildWhereQuery must throw Error'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TestUtilRepo.prototype, "testErrorBuildWhereQuery", null);
    __decorate([
        alsatian_1.TestCase({ noi_dung_id: 1, tieu_de: 'hong duc' }, [], { query: 'SET noi_dung_id = $1,tieu_de = $2', params: [1, 'hong duc'] }),
        alsatian_1.TestCase({ noi_dung_id: 1, tieu_de: 'hong duc' }, ['noi_dung_id'], { query: 'SET tieu_de = $1', params: ['hong duc'] }),
        alsatian_1.Test('test BuildSetQuery'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], TestUtilRepo.prototype, "testBuildSetQuery", null);
    __decorate([
        alsatian_1.TestCase({}, []),
        alsatian_1.Test('buildSetQuery must throw Error'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], TestUtilRepo.prototype, "testErrorBuildSetQuery", null);
    return TestUtilRepo;
}());
exports.TestUtilRepo = TestUtilRepo;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvdXRpbC9yZXBvLXV0aWwuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFDQUE4RDtBQUM5RCwrREFBNkQ7QUFFN0Q7SUFBQTtJQStEQSxDQUFDO0lBMURVLGlEQUEwQixHQUFqQyxVQUFrQyxRQUFRLEVBQUUsV0FBVztRQUNuRCxJQUFJLE1BQU0sR0FBRyxvQkFBUSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZELGlCQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFPTSxzREFBK0IsR0FBdEMsVUFBdUMsUUFBUTtRQUMzQyxpQkFBTSxDQUFDO1lBQ0gsb0JBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBS00sdURBQWdDLEdBQXZDLFVBQXdDLFFBQVE7UUFDNUMsaUJBQU0sQ0FBQztZQUNILG9CQUFRLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFLTSwwQ0FBbUIsR0FBMUIsVUFBMkIsTUFBTSxFQUFFLFdBQVc7UUFDMUMsSUFBSSxNQUFNLEdBQUcsb0JBQVEsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUMsaUJBQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxpQkFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFJTSwrQ0FBd0IsR0FBL0IsVUFBZ0MsTUFBTTtRQUNsQyxpQkFBTSxDQUFDO1lBQ0gsb0JBQVEsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUtNLHdDQUFpQixHQUF4QixVQUF5QixNQUFNLEVBQUUsS0FBSyxFQUFFLFdBQVc7UUFDL0MsSUFBSSxNQUFNLEdBQUcsb0JBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ25ELGlCQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsaUJBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBSU0sNkNBQXNCLEdBQTdCLFVBQThCLE1BQU0sRUFBRSxLQUFLO1FBQ3ZDLGlCQUFNLENBQUM7WUFDSCxvQkFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQXpERDtRQUhDLG1CQUFRLENBQUMsWUFBWSxFQUFFLHdCQUF3QixDQUFDO1FBQ2hELG1CQUFRLENBQUMsc0JBQXNCLEVBQUUsb0NBQW9DLENBQUM7UUFDdEUsZUFBSSxDQUFDLDZCQUE2QixDQUFDOzs7O2tFQUluQztJQU9EO1FBTEMsbUJBQVEsQ0FBQyxFQUFFLENBQUM7UUFDWixtQkFBUSxDQUFDLFlBQVksQ0FBQztRQUN0QixtQkFBUSxDQUFDLHNCQUFzQixDQUFDO1FBQ2hDLG1CQUFRLENBQUMsdUJBQXVCLENBQUM7UUFDakMsZUFBSSxDQUFDLHlDQUF5QyxDQUFDOzs7O3VFQUsvQztJQUtEO1FBSEMsbUJBQVEsQ0FBQyxzQkFBc0IsQ0FBQztRQUNoQyxtQkFBUSxDQUFDLCtCQUErQixDQUFDO1FBQ3pDLGVBQUksQ0FBQyw2Q0FBNkMsQ0FBQzs7Ozt3RUFLbkQ7SUFLRDtRQUhDLG1CQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNyRSxtQkFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsNENBQTRDLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUM7UUFDckksZUFBSSxDQUFDLHNCQUFzQixDQUFDOzs7OzJEQUs1QjtJQUlEO1FBRkMsbUJBQVEsQ0FBQyxFQUFFLENBQUM7UUFDWixlQUFJLENBQUMsa0NBQWtDLENBQUM7Ozs7Z0VBS3hDO0lBS0Q7UUFIQyxtQkFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDO1FBQzlILG1CQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7UUFDdkgsZUFBSSxDQUFDLG9CQUFvQixDQUFDOzs7O3lEQUsxQjtJQUlEO1FBRkMsbUJBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ2hCLGVBQUksQ0FBQyxnQ0FBZ0MsQ0FBQzs7Ozs4REFLdEM7SUFDTCxtQkFBQztDQS9ERCxBQStEQyxJQUFBO0FBL0RZLG9DQUFZIiwiZmlsZSI6InRlc3QvdXRpbC9yZXBvLXV0aWwuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlc3QsIFRlc3RDYXNlLCBJZ25vcmVUZXN0LCBFeHBlY3QgfSBmcm9tICdhbHNhdGlhbic7XHJcbmltcG9ydCB7IFJlcG9VdGlsIH0gZnJvbSAnLi4vLi4vcmVwb3NpdG9yaWVzL3V0aWwvcmVwby11dGlsJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXN0VXRpbFJlcG8ge1xyXG5cclxuICAgIEBUZXN0Q2FzZSgnbm9pX2R1bmcrMScsICdPUkRFUiBCWSBub2lfZHVuZyBERVNDJylcclxuICAgIEBUZXN0Q2FzZSgnbm9pX2R1bmcrMSx0aWV1X2RlKzAnLCAnT1JERVIgQlkgbm9pX2R1bmcgREVTQyx0aWV1X2RlIEFTQycpXHJcbiAgICBAVGVzdCgndGVzdCBjb252ZXJ0UXVlcnlGb3JPcmRlckJ5JylcclxuICAgIHB1YmxpYyB0ZXN0Q29udmVydFF1ZXJ5Rm9yT3JkZXJCeShzdGFuZGFyZCwgZXhwZWN0VmFsdWUpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gUmVwb1V0aWwuY29udmVydFF1ZXJ5Rm9yT3JkZXJCeShzdGFuZGFyZCk7XHJcbiAgICAgICAgRXhwZWN0KHJlc3VsdCkudG9FcXVhbChleHBlY3RWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQFRlc3RDYXNlKCcnKVxyXG4gICAgQFRlc3RDYXNlKCdub2lfZHVuZyszJylcclxuICAgIEBUZXN0Q2FzZSgnbm9pX2R1bmcrMW5vaV9kdW5nKzEnKVxyXG4gICAgQFRlc3RDYXNlKCdub2lkdW5nKzEsbm9pX2R1bmcrMSwnKVxyXG4gICAgQFRlc3QoJ0NvbnZlcnRRdWVyeUZvck9yZGVyQnkgbXVzdCB0aHJvdyBFcnJvcicpXHJcbiAgICBwdWJsaWMgdGVzdEVycm9yQ29udmVydFF1ZXJ5Rm9yT3JkZXJCeShzdGFuZGFyZCkge1xyXG4gICAgICAgIEV4cGVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIFJlcG9VdGlsLmNvbnZlcnRRdWVyeUZvck9yZGVyQnkoc3RhbmRhcmQpO1xyXG4gICAgICAgIH0pLnRvVGhyb3coKTtcclxuICAgIH1cclxuXHJcbiAgICBAVGVzdENhc2UoJ25vaWR1bmcrMSxub2lfZHVuZyswJylcclxuICAgIEBUZXN0Q2FzZSgnbm9pZHVuZysxLG5vaV9kdW5nKzAsdGVuY290KzAnKVxyXG4gICAgQFRlc3QoJ0NvbnZlcnRRdWVyeUZvck9yZGVyQnkgbXVzdCBub3QgdGhyb3cgRXJyb3InKVxyXG4gICAgcHVibGljIHRlc3RFcnJvckNvbnZlcnRRdWVyeUZvck9yZGVyQnkyKHN0YW5kYXJkKSB7XHJcbiAgICAgICAgRXhwZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgUmVwb1V0aWwuY29udmVydFF1ZXJ5Rm9yT3JkZXJCeShzdGFuZGFyZCk7XHJcbiAgICAgICAgfSkubm90LnRvVGhyb3coKTtcclxuICAgIH1cclxuXHJcbiAgICBAVGVzdENhc2UoeyBhcnJheTogW10gfSwgeyBxdWVyeTogJ1dIRVJFICQxICYmIGFycmF5JywgcGFyYW1zOiBbW11dIH0pXHJcbiAgICBAVGVzdENhc2UoeyBub2lfZHVuZ19pZDogMSwgdGlldV9kZTogJ2hvbmcgZHVjJyB9LCB7IHF1ZXJ5OiAnV0hFUkUgbm9pX2R1bmdfaWQgPSAkMSBhbmQgdGlldV9kZSBsaWtlICQyJywgcGFyYW1zOiBbMSwgJyVob25nIGR1YyUnXSB9KVxyXG4gICAgQFRlc3QoJ3Rlc3QgYnVpbGRXaGVyZVF1ZXJ5JylcclxuICAgIHB1YmxpYyB0ZXN0QnVpbGRXaGVyZVF1ZXJ5KG9iamVjdCwgZXhwZWN0VmFsdWUpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gUmVwb1V0aWwuYnVpbGRXaGVyZVF1ZXJ5KG9iamVjdCk7XHJcbiAgICAgICAgRXhwZWN0KHJlc3VsdC5xdWVyeSkudG9FcXVhbChleHBlY3RWYWx1ZS5xdWVyeSk7XHJcbiAgICAgICAgRXhwZWN0KHJlc3VsdC5wYXJhbXMpLnRvRXF1YWwoZXhwZWN0VmFsdWUucGFyYW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBAVGVzdENhc2Uoe30pXHJcbiAgICBAVGVzdCgnYnVpbGRXaGVyZVF1ZXJ5IG11c3QgdGhyb3cgRXJyb3InKVxyXG4gICAgcHVibGljIHRlc3RFcnJvckJ1aWxkV2hlcmVRdWVyeShvYmplY3QpIHtcclxuICAgICAgICBFeHBlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBSZXBvVXRpbC5idWlsZFdoZXJlUXVlcnkob2JqZWN0KTtcclxuICAgICAgICB9KS50b1Rocm93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgQFRlc3RDYXNlKHsgbm9pX2R1bmdfaWQ6IDEsIHRpZXVfZGU6ICdob25nIGR1YycgfSwgW10sIHsgcXVlcnk6ICdTRVQgbm9pX2R1bmdfaWQgPSAkMSx0aWV1X2RlID0gJDInLCBwYXJhbXM6IFsxLCAnaG9uZyBkdWMnXSB9KVxyXG4gICAgQFRlc3RDYXNlKHsgbm9pX2R1bmdfaWQ6IDEsIHRpZXVfZGU6ICdob25nIGR1YycgfSwgWydub2lfZHVuZ19pZCddLCB7IHF1ZXJ5OiAnU0VUIHRpZXVfZGUgPSAkMScsIHBhcmFtczogWydob25nIGR1YyddIH0pXHJcbiAgICBAVGVzdCgndGVzdCBCdWlsZFNldFF1ZXJ5JylcclxuICAgIHB1YmxpYyB0ZXN0QnVpbGRTZXRRdWVyeShvYmplY3QsIGFycmF5LCBleHBlY3RWYWx1ZSkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBSZXBvVXRpbC5idWlsZFNldFF1ZXJ5KG9iamVjdCwgYXJyYXkpO1xyXG4gICAgICAgIEV4cGVjdChyZXN1bHQucXVlcnkpLnRvRXF1YWwoZXhwZWN0VmFsdWUucXVlcnkpO1xyXG4gICAgICAgIEV4cGVjdChyZXN1bHQucGFyYW1zKS50b0VxdWFsKGV4cGVjdFZhbHVlLnBhcmFtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgQFRlc3RDYXNlKHt9LCBbXSlcclxuICAgIEBUZXN0KCdidWlsZFNldFF1ZXJ5IG11c3QgdGhyb3cgRXJyb3InKVxyXG4gICAgcHVibGljIHRlc3RFcnJvckJ1aWxkU2V0UXVlcnkob2JqZWN0LCBhcnJheSkge1xyXG4gICAgICAgIEV4cGVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIFJlcG9VdGlsLmJ1aWxkU2V0UXVlcnkob2JqZWN0LCBhcnJheSk7XHJcbiAgICAgICAgfSkudG9UaHJvdygpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
