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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var variable_1 = require("../../../util/variable");
var NoiDungService = /** @class */ (function () {
    function NoiDungService(http) {
        this.http = http;
    }
    NoiDungService.prototype.getNoiDungByID = function (id) {
        var query = "?noi_dung_id=" + id;
        return this.callGetOneApi(query).then(function (jsonData) {
            return { data: jsonData.result };
        });
    };
    // public getListNoiDung(page: number, perPage: number): Promise<{ data: Array<NoiDung>, length: number }> {
    //     return this.callSearchApi({ page: page, per_page: perPage })
    //         .then(jsonData => {
    //             return {
    //                 data: jsonData.result,
    //                 length: jsonData.number_of_all_data.count
    //             }
    //         });
    // }
    NoiDungService.prototype.searchNoiDung = function (searchBody, page, perPage) {
        var body = Object.assign({}, searchBody);
        body['per_page'] = perPage;
        body['page'] = page;
        return this.callSearchApi(body)
            .then(function (jsonData) {
            return {
                data: jsonData.result,
                length: jsonData.number_of_all_data.count
            };
        });
    };
    NoiDungService.prototype.deleteNoiDung = function (ids) {
        var body = { noi_dung_ids: ids };
        return this.callDeleteApi(body);
    };
    NoiDungService.prototype.updateNoiDung = function (noiDung) {
        var body = Object.assign({}, noiDung);
        body['user_update'] = 'dman';
        return this.callUpdateApi(body)
            .then(function (jsonData) {
            return jsonData.count;
        });
    };
    NoiDungService.prototype.createNoiDung = function (noiDung) {
        var body = Object.assign({}, noiDung);
        delete body.noi_dung_id;
        body['user_create'] = 'dman';
        body['user_update'] = 'dman';
        return this.callSaveApi(body)
            .then(function (jsonData) {
            return jsonData.count;
        });
    };
    NoiDungService.prototype.callSearchApi = function (body) {
        return this.http.post(variable_1.Variable.URL + "/api/noi_dung/search", body)
            .toPromise().then(function (res) {
            var jsonData = res.json();
            return jsonData;
        });
    };
    NoiDungService.prototype.callDeleteApi = function (body) {
        return this.http.post(variable_1.Variable.URL + "/api/noi_dung/delete", body)
            .toPromise().then(function (res) {
            var jsonData = res.json();
            return jsonData;
        });
    };
    NoiDungService.prototype.callGetOneApi = function (query) {
        return this.http.get(variable_1.Variable.URL + "/api/noi_dung/getone/" + query)
            .toPromise().then(function (res) {
            var jsonData = res.json();
            return jsonData;
        });
    };
    NoiDungService.prototype.callUpdateApi = function (body) {
        return this.http.post(variable_1.Variable.URL + "/api/noi_dung/update", body)
            .toPromise()
            .then(function (res) {
            var jsonData = res.json();
            return jsonData;
        });
    };
    NoiDungService.prototype.callSaveApi = function (body) {
        return this.http.post(variable_1.Variable.URL + "/api/noi_dung/save", body)
            .toPromise()
            .then(function (res) {
            var jsonData = res.json();
            return jsonData;
        });
    };
    NoiDungService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], NoiDungService);
    return NoiDungService;
}());
exports.NoiDungService = NoiDungService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL25vaS1kdW5nL3NoYXJlZC9ub2lkdW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXFDO0FBQ3JDLHVDQUFxQztBQUdyQyxtREFBa0Q7QUFHbEQ7SUFFSSx3QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFDOUIsQ0FBQztJQUVNLHVDQUFjLEdBQXJCLFVBQXNCLEVBQUU7UUFDcEIsSUFBSSxLQUFLLEdBQUcsa0JBQWdCLEVBQUksQ0FBQztRQUNqQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUTtZQUMxQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw0R0FBNEc7SUFDNUcsbUVBQW1FO0lBQ25FLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIseUNBQXlDO0lBQ3pDLDREQUE0RDtJQUM1RCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLElBQUk7SUFFRyxzQ0FBYSxHQUFwQixVQUFxQixVQUFVLEVBQUUsSUFBWSxFQUFFLE9BQWU7UUFDMUQsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLE9BQU8sQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7YUFDMUIsSUFBSSxDQUFDLFVBQUEsUUFBUTtZQUNWLE9BQU87Z0JBQ0gsSUFBSSxFQUFFLFFBQVEsQ0FBQyxNQUFNO2dCQUNyQixNQUFNLEVBQUUsUUFBUSxDQUFDLGtCQUFrQixDQUFDLEtBQUs7YUFDNUMs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QUksQ0FBQyxJQUFJLENBQUksbUJBQVEsQ0FBQyxHQUFHLHVCQUFvQixFQUFFLElBQUksQ0FBQzthQUMzRCxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ0wsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzFCLE9BQU8sUUFBUSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFBO0lBQ1YsQ0FBQztJQXJHUSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7eUNBR2lCLFdBQUk7T0FGckIsY0FBYyxDQXNHMUI7SUFBRCxxQkFBQztDQXRHRCxBQXNHQyxJQUFBO0FBdEdZLHdDQUFjIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL25vaS1kdW5nL3NoYXJlZC9ub2lkdW5nLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xyXG5cclxuaW1wb3J0IHsgTm9pRHVuZyB9IGZyb20gJy4vbm9pZHVuZy5tb2RlbCc7XHJcbmltcG9ydCB7IFZhcmlhYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC92YXJpYWJsZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOb2lEdW5nU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE5vaUR1bmdCeUlEKGlkKTogUHJvbWlzZTx7IGRhdGE6IE5vaUR1bmcgfT4ge1xyXG4gICAgICAgIGxldCBxdWVyeSA9IGA/bm9pX2R1bmdfaWQ9JHtpZH1gO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbGxHZXRPbmVBcGkocXVlcnkpLnRoZW4oanNvbkRhdGEgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4geyBkYXRhOiBqc29uRGF0YS5yZXN1bHQgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwdWJsaWMgZ2V0TGlzdE5vaUR1bmcocGFnZTogbnVtYmVyLCBwZXJQYWdlOiBudW1iZXIpOiBQcm9taXNlPHsgZGF0YTogQXJyYXk8Tm9pRHVuZz4sIGxlbmd0aDogbnVtYmVyIH0+IHtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5jYWxsU2VhcmNoQXBpKHsgcGFnZTogcGFnZSwgcGVyX3BhZ2U6IHBlclBhZ2UgfSlcclxuICAgIC8vICAgICAgICAgLnRoZW4oanNvbkRhdGEgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBkYXRhOiBqc29uRGF0YS5yZXN1bHQsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgbGVuZ3RoOiBqc29uRGF0YS5udW1iZXJfb2ZfYWxsX2RhdGEuY291bnRcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcHVibGljIHNlYXJjaE5vaUR1bmcoc2VhcmNoQm9keSwgcGFnZTogbnVtYmVyLCBwZXJQYWdlOiBudW1iZXIpOiBQcm9taXNlPHsgZGF0YTogQXJyYXk8Tm9pRHVuZz4sIGxlbmd0aDogbnVtYmVyIH0+IHtcclxuICAgICAgICBsZXQgYm9keSA9IE9iamVjdC5hc3NpZ24oe30sIHNlYXJjaEJvZHkpO1xyXG4gICAgICAgIGJvZHlbJ3Blcl9wYWdlJ10gPSBwZXJQYWdlO1xyXG4gICAgICAgIGJvZHlbJ3BhZ2UnXSA9IHBhZ2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsbFNlYXJjaEFwaShib2R5KVxyXG4gICAgICAgICAgICAudGhlbihqc29uRGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGpzb25EYXRhLnJlc3VsdCxcclxuICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IGpzb25EYXRhLm51bWJlcl9vZl9hbGxfZGF0YS5jb3VudFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGVOb2lEdW5nKGlkczogQXJyYXk8YW55Pik6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IGJvZHkgPSB7IG5vaV9kdW5nX2lkczogaWRzIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsbERlbGV0ZUFwaShib2R5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlTm9pRHVuZyhub2lEdW5nOiBOb2lEdW5nKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICBsZXQgYm9keSA9IE9iamVjdC5hc3NpZ24oe30sIG5vaUR1bmcpO1xyXG4gICAgICAgIGJvZHlbJ3VzZXJfdXBkYXRlJ10gPSAnZG1hbic7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsbFVwZGF0ZUFwaShib2R5KVxyXG4gICAgICAgICAgICAudGhlbihqc29uRGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ganNvbkRhdGEuY291bnQ7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZU5vaUR1bmcobm9pRHVuZzogTm9pRHVuZyk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICAgICAgbGV0IGJvZHkgPSBPYmplY3QuYXNzaWduKHt9LCBub2lEdW5nKTtcclxuICAgICAgICBkZWxldGUgYm9keS5ub2lfZHVuZ19pZDtcclxuICAgICAgICBib2R5Wyd1c2VyX2NyZWF0ZSddID0gJ2RtYW4nO1xyXG4gICAgICAgIGJvZHlbJ3VzZXJfdXBkYXRlJ10gPSAnZG1hbic7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsbFNhdmVBcGkoYm9keSlcclxuICAgICAgICAgICAgLnRoZW4oanNvbkRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGpzb25EYXRhLmNvdW50O1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGNhbGxTZWFyY2hBcGkoYm9keTogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7VmFyaWFibGUuVVJMfS9hcGkvbm9pX2R1bmcvc2VhcmNoYCwgYm9keSlcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBqc29uRGF0YSA9IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ganNvbkRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FsbERlbGV0ZUFwaShib2R5KTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7VmFyaWFibGUuVVJMfS9hcGkvbm9pX2R1bmcvZGVsZXRlYCwgYm9keSlcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBqc29uRGF0YSA9IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ganNvbkRhdGE7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxsR2V0T25lQXBpKHF1ZXJ5KTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHtWYXJpYWJsZS5VUkx9L2FwaS9ub2lfZHVuZy9nZXRvbmUvJHtxdWVyeX1gKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGpzb25EYXRhID0gcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBqc29uRGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhbGxVcGRhdGVBcGkoYm9keSk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke1ZhcmlhYmxlLlVSTH0vYXBpL25vaV9kdW5nL3VwZGF0ZWAsIGJvZHkpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGpzb25EYXRhID0gcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBqc29uRGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhbGxTYXZlQXBpKGJvZHkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHtWYXJpYWJsZS5VUkx9L2FwaS9ub2lfZHVuZy9zYXZlYCwgYm9keSlcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQganNvbkRhdGEgPSByZXMuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGpzb25EYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG59Il19
