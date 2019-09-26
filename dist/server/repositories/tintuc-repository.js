"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../models");
var util_1 = require("./util");
var base_1 = require("./base");
var _ = require("lodash");
var TinTucRepository = /** @class */ (function () {
    function TinTucRepository() {
    }
    /**
     * @author Nhật Anh 17/04/2017
     *
     * tìm kiếm noi_dung
     * @param {QueryOption} option chứa các cột cần tìm
     * @param {string} [orderBy] chuỗi để sắp xếp theo format ten_cot+0(hoặc 1)[,ten_cot+0(hoặc 1)...]
     * @param {number} [limit] lấy bao nhiệu
     * @param {number} [offset] lấy từ dòng thứ mấy
     * @returns {Promise<NoiDung[]>} danh sách noi_dung
     *
     * @memberOf NoiDungRepository
     */
    TinTucRepository.prototype.search = function (option, orderBy, limit, offset) {
        var queryText = " SELECT * FROM account WHERE username LIKE '%minhtuan'; $1";
        // let whereClause = RepoUtil.buildWhereQuery(option);
        // queryText += whereClause.query;
        // if (orderBy) {
        //     queryText += ' ' + RepoUtil.convertQueryForOrderBy(orderBy);
        // }
        // if (limit) {
        //     queryText += ` limit $${whereClause.params.length + 1}`;
        //     whereClause.params.push(limit);
        // }
        // if (offset) {
        //     queryText += ` offset $${whereClause.params.length + 1}`;
        //     whereClause.params.push(offset);
        // }
        return base_1.pgConnect.runAQuery(queryText)
            .catch(function (error) {
            error['queryText'] = queryText;
            return Promise.reject(error);
        });
    };
    TinTucRepository.prototype.seek = function (per_page, operator, id) {
        if (id === void 0) { id = null; }
        var query = "select * from account where user_id= $1";
        return base_1.pgConnect.runAQuery(query, [])
            .catch(function (error) {
            error['value'] = models_1.TinTuc;
            return Promise.reject(error);
        });
    };
    /**
     * @author Nhật Anh 17/04/2017
     *
     * lấy noi_dung đứng đầu
     *
     * @param {string} standard chuỗi để sắp xếp theo format ten_cot+0(hoặc 1)[,ten_cot+0(hoặc 1)...]
     * @param {number} offset lấy từ dòng thứ mấy
     * @returns {Promise<NoiDung[]>} danh sách noi_dung
     *
     * @memberOf NoiDungRepository
     */
    //api/tin_tuc/gettop?standard=tin_tuc_id%2b1&offset=0
    TinTucRepository.prototype.getTop = function () {
        var queryText = "select * from account";
        return base_1.pgConnect.runAQuery(queryText)
            .catch(function (error) {
            error['queryText'] = queryText;
            return Promise.reject(error);
        });
    };
    /**
     * @author Nhật Anh 17/04/2017
     *
     * lấy một noi_dung theo id
     *
     * @param {number} id của noi_dung
     * @returns {Promise<TinTuc>} noi_dung
     *
     * @memberOf NoiDungRepository
     */
    TinTucRepository.prototype.getOne = function (id) {
        var queryText = "select * from mon_an where nguyen_lieu ::json->>'id'='$1'";
        console.log('j');
        return base_1.pgConnect.runAQuery(queryText, [id])
            .catch(function (error) {
            error['queryText'] = queryText;
            return Promise.reject(error);
        });
    };
    /**
     * @author Nhật Anh 17/04/2017
     *
     * dùng để xóa noi_dung theo id
     *
     * @param {number[]} ids các id để xóa
     * @returns {Promise<number>} số dòng đã xóa
     *
     * @memberOf NoiDungRepository
     */
    TinTucRepository.prototype.delete = function (ids) {
        var queryText;
        queryText = "DELETE  FROM account WHERE user_id = $1";
        return base_1.pgConnect.runAQuery(queryText, [ids])
            .catch(function (error) {
            error['queryText'] = queryText;
            // console.log(queryText)
            return Promise.reject(error);
        });
    };
    /**
     * @author Nhật Anh 17/04/2017
     *
     * thêm 1 noi_dung
     *
     * @param {NoiDung} noidung cần thêm
     * @returns {Promise<number>} số dòng đã thêm
     *
     * @memberOf NoiDungRepository
     */
    TinTucRepository.prototype.insert = function (tintuc) {
        var queryText;
        queryText = "\n            INSERT INTO account (\n                user_id, username, password, email, created_on, last_login)\n             VALUES (\n                    $1,\n                    $2,\n                    $3,\n                    $4,\n                    $5\n                    $6\n                    );\n                    ";
        return base_1.pgConnect.runAQuery(queryText, [
            tintuc.user_id,
            tintuc.username,
            tintuc.password,
            tintuc.email,
        ])
            .catch(function (error) {
            error['queryText'] = queryText;
            error['value'] = tintuc;
            return Promise.reject(error);
        });
    };
    /**
     * @author Nhật Anh 17/04/2017
     *
     * update noi_dung
     *
     * @param {QueryOption} option các cột cần update
     * @returns {Promise<number>} số dòng đã update
     *
     * @memberOf NoiDungRepository
     */
    TinTucRepository.prototype.update = function (tintuc) {
        // let setQuery = RepoUtil.buildSetQuery(option, ['username', 'user_id']);
        // setQuery.params.push(option.user_id);
        // setQuery.params.push(option.user_id);
        // let queryText = `UPDATE "account"
        //     ${setQuery.query}, username = $${setQuery.params.length}
        // 	WHERE "user_id" = $${setQuery.params.length - 1};`;
        var queryText;
        queryText = 'UPDATE account SET username =$2 where user_id=$1';
        console.log(tintuc.user_id);
        console.log(tintuc.username);
        return base_1.pgConnect.runAQuery(queryText, [
            tintuc.user_id,
            tintuc.username
        ]) //cho do vi tri nen doi dolla 
            .catch(function (error) {
            error['queryText'] = queryText;
            return Promise.reject(error);
        });
    };
    TinTucRepository.prototype.count = function (object) {
        if (object === void 0) { object = {}; }
        if (_.isEmpty(object)) {
            return base_1.pgConnect.runAQuery('select count(tin_tuc_id) from tin_tuc');
        }
        var query = 'select count(user_id) from tin_tuc';
        var where = util_1.RepoUtil.buildWhereQuery(object);
        return base_1.pgConnect.runAQuery(query + (" " + where.query), where.params);
    };
    return TinTucRepository;
}());
exports.TinTucRepository = TinTucRepository;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9zaXRvcmllcy90aW50dWMtcmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLG9DQUE0RDtBQUU1RCwrQkFBa0M7QUFDbEMsK0JBQW1DO0FBQ25DLDBCQUE0QjtBQVE1QjtJQUVJO0lBQ0EsQ0FBQztJQUlEOzs7Ozs7Ozs7OztPQVdHO0lBQ0ksaUNBQU0sR0FBYixVQUFjLE1BQW1CLEVBQUUsT0FBZ0IsRUFBRSxLQUFjLEVBQUUsTUFBZTtRQUNoRixJQUFJLFNBQVMsR0FBRyw0REFBNEQsQ0FBQztRQUM3RSxzREFBc0Q7UUFDdEQsa0NBQWtDO1FBQ2xDLGlCQUFpQjtRQUNqQixtRUFBbUU7UUFDbkUsSUFBSTtRQUNKLGVBQWU7UUFDZiwrREFBK0Q7UUFDL0Qsc0NBQXNDO1FBQ3RDLElBQUk7UUFDSixnQkFBZ0I7UUFDaEIsZ0VBQWdFO1FBQ2hFLHVDQUF1QztRQUN2QyxJQUFJO1FBRUosT0FBTyxnQkFBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7YUFDaEMsS0FBSyxDQUFDLFVBQUEsS0FBSztZQUNSLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxTQUFTLENBQUM7WUFDL0IsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVNLCtCQUFJLEdBQVgsVUFBWSxRQUFnQixFQUFFLFFBQWdCLEVBQUUsRUFBaUI7UUFBakIsbUJBQUEsRUFBQSxTQUFpQjtRQUM3RCxJQUFJLEtBQUssR0FBRyx5Q0FBeUMsQ0FBQztRQUd0RCxPQUFPLGdCQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7YUFDaEMsS0FBSyxDQUFDLFVBQUEsS0FBSztZQUNSLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxlQUFNLENBQUM7WUFDeEIsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFD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Q0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFTSxnQ0FBSyxHQUFaLFVBQWEsTUFBVztRQUFYLHVCQUFBLEVBQUEsV0FBVztRQUNwQixJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbkIsT0FBTyxnQkFBUyxDQUFDLFNBQVMsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1NBQ3ZFO1FBRUQsSUFBSSxLQUFLLEdBQUcsb0NBQW9DLENBQUM7UUFDakQsSUFBSSxLQUFLLEdBQUcsZUFBUSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QyxPQUFPLGdCQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssSUFBRyxNQUFJLEtBQUssQ0FBQyxLQUFPLENBQUEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQU9MLHVCQUFDO0FBQUQsQ0FqTkEsQUFpTkMsSUFBQTtBQWpOWSw0Q0FBZ0IiLCJmaWxlIjoicmVwb3NpdG9yaWVzL3RpbnR1Yy1yZXBvc2l0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCAqIGFzIHZhbGlkYXRvciBmcm9tICd2YWxpZGF0b3InO1xyXG5pbXBvcnQgKiBhcyBwZyBmcm9tICdwZyc7XHJcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBUaW5UdWMsIFRpblR1Y0N1cnJlbnRTdGF0dXNFbnVtIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmltcG9ydCB7IFJlcG9VdGlsIH0gZnJvbSAnLi91dGlsJztcclxuaW1wb3J0IHsgcGdDb25uZWN0IH0gZnJvbSAnLi9iYXNlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuaW50ZXJmYWNlIFF1ZXJ5T3B0aW9uIHtcclxuICAgIHRpZXVfZGU/OiBzdHJpbmc7XHJcbiAgICB1c2VyX2lkPzogbnVtYmVyO1xyXG4gICAgbm9pX2R1bmc/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUaW5UdWNSZXBvc2l0b3J5IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGF1dGhvciBOaOG6rXQgQW5oIDE3LzA0LzIwMTdcclxuICAgICAqIFxyXG4gICAgICogdMOsbSBraeG6v20gbm9pX2R1bmdcclxuICAgICAqIEBwYXJhbSB7UXVlcnlPcHRpb259IG9wdGlvbiBjaOG7qWEgY8OhYyBj4buZdCBj4bqnbiB0w6xtXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29yZGVyQnldIGNodeG7l2kgxJHhu4Mgc+G6r3AgeOG6v3AgdGhlbyBmb3JtYXQgdGVuX2NvdCswKGhv4bq3YyAxKVssdGVuX2NvdCswKGhv4bq3YyAxKS4uLl1cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbGltaXRdIGzhuqV5IGJhbyBuaGnhu4d1XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW29mZnNldF0gbOG6pXkgdOG7qyBkw7JuZyB0aOG7qSBt4bqleVxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Tm9pRHVuZ1tdPn0gZGFuaCBzw6FjaCBub2lfZHVuZ1xyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyT2YgTm9pRHVuZ1JlcG9zaXRvcnlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNlYXJjaChvcHRpb246IFF1ZXJ5T3B0aW9uLCBvcmRlckJ5Pzogc3RyaW5nLCBsaW1pdD86IG51bWJlciwgb2Zmc2V0PzogbnVtYmVyKTogUHJvbWlzZTxwZy5RdWVyeVJlc3VsdD4ge1xyXG4gICAgICAgIGxldCBxdWVyeVRleHQgPSBcIiBTRUxFQ1QgKiBGUk9NIGFjY291bnQgV0hFUkUgdXNlcm5hbWUgTElLRSAnJW1pbmh0dWFuJzsgJDFcIjtcclxuICAgICAgICAvLyBsZXQgd2hlcmVDbGF1c2UgPSBSZXBvVXRpbC5idWlsZFdoZXJlUXVlcnkob3B0aW9uKTtcclxuICAgICAgICAvLyBxdWVyeVRleHQgKz0gd2hlcmVDbGF1c2UucXVlcnk7XHJcbiAgICAgICAgLy8gaWYgKG9yZGVyQnkpIHtcclxuICAgICAgICAvLyAgICAgcXVlcnlUZXh0ICs9ICcgJyArIFJlcG9VdGlsLmNvbnZlcnRRdWVyeUZvck9yZGVyQnkob3JkZXJCeSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlmIChsaW1pdCkge1xyXG4gICAgICAgIC8vICAgICBxdWVyeVRleHQgKz0gYCBsaW1pdCAkJHt3aGVyZUNsYXVzZS5wYXJhbXMubGVuZ3RoICsgMX1gO1xyXG4gICAgICAgIC8vICAgICB3aGVyZUNsYXVzZS5wYXJhbXMucHVzaChsaW1pdCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlmIChvZmZzZXQpIHtcclxuICAgICAgICAvLyAgICAgcXVlcnlUZXh0ICs9IGAgb2Zmc2V0ICQke3doZXJlQ2xhdXNlLnBhcmFtcy5sZW5ndGggKyAxfWA7XHJcbiAgICAgICAgLy8gICAgIHdoZXJlQ2xhdXNlLnBhcmFtcy5wdXNoKG9mZnNldCk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICByZXR1cm4gcGdDb25uZWN0LnJ1bkFRdWVyeShxdWVyeVRleHQpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBlcnJvclsncXVlcnlUZXh0J10gPSBxdWVyeVRleHQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VlayhwZXJfcGFnZTogbnVtYmVyLCBvcGVyYXRvcjogc3RyaW5nLCBpZDogbnVtYmVyID0gbnVsbCk6IFByb21pc2U8cGcuUXVlcnlSZXN1bHQ+IHtcclxuICAgICAgICBsZXQgcXVlcnkgPSBgc2VsZWN0ICogZnJvbSBhY2NvdW50IHdoZXJlIHVzZXJfaWQ9ICQxYDtcclxuICAgIFxyXG5cclxuICAgICAgICByZXR1cm4gcGdDb25uZWN0LnJ1bkFRdWVyeShxdWVyeSwgW10pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBlcnJvclsndmFsdWUnXSA9IFRpblR1YztcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGF1dGhvciBOaOG6rXQgQW5oIDE3LzA0LzIwMTdcclxuICAgICAqIFxyXG4gICAgICogbOG6pXkgbm9pX2R1bmcgxJHhu6luZyDEkeG6p3VcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0YW5kYXJkIGNodeG7l2kgxJHhu4Mgc+G6r3AgeOG6v3AgdGhlbyBmb3JtYXQgdGVuX2NvdCswKGhv4bq3YyAxKVssdGVuX2NvdCswKGhv4bq3YyAxKS4uLl1cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgbOG6pXkgdOG7qyBkw7JuZyB0aOG7qSBt4bqleVxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Tm9pRHVuZ1tdPn0gZGFuaCBzw6FjaCBub2lfZHVuZ1xyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyT2YgTm9pRHVuZ1JlcG9zaXRvcnlcclxuICAgICAqL1xyXG4gICAgLy9hcGkvdGluX3R1Yy9nZXR0b3A/c3RhbmRhcmQ9dGluX3R1Y19pZCUyYjEmb2Zmc2V0PTBcclxuXHJcbiAgICBwdWJsaWMgZ2V0VG9wKCk6IFByb21pc2U8cGcuUXVlcnlSZXN1bHQ+IHtcclxuXHJcblxyXG4gICAgICAgIGxldCBxdWVyeVRleHQgPSBgc2VsZWN0ICogZnJvbSBhY2NvdW50YDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBnQ29ubmVjdC5ydW5BUXVlcnkocXVlcnlUZXh0KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXJyb3JbJ3F1ZXJ5VGV4dCddID0gcXVlcnlUZXh0O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAYXV0aG9yIE5o4bqtdCBBbmggMTcvMDQvMjAxN1xyXG4gICAgICogXHJcbiAgICAgKiBs4bqleSBt4buZdCBub2lfZHVuZyB0aGVvIGlkXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpZCBj4bunYSBub2lfZHVuZ1xyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8VGluVHVjPn0gbm9pX2R1bmdcclxuICAgICAqIFxyXG4gICAgICogQG1lbWJlck9mIE5vaUR1bmdSZXBvc2l0b3J5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRPbmUoaWQ6IG51bWJlcik6IFByb21pc2U8cGcuUXVlcnlSZXN1bHQ+IHtcclxuICAgICAgICBsZXQgcXVlcnlUZXh0ID0gYHNlbGVjdCAqIGZyb20gbW9uX2FuIHdoZXJlIG5ndXllbl9saWV1IDo6anNvbi0+PidpZCc9JyQxJ2A7XHJcbiAgICAgICBjb25zb2xlLmxvZygnaicpO1xyXG4gICAgICAgIHJldHVybiBwZ0Nvbm5lY3QucnVuQVF1ZXJ5KHF1ZXJ5VGV4dCwgW2lkXSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGVycm9yWydxdWVyeVRleHQnXSA9IHF1ZXJ5VGV4dDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGF1dGhvciBOaOG6rXQgQW5oIDE3LzA0LzIwMTdcclxuICAgICAqIFxyXG4gICAgICogZMO5bmcgxJHhu4MgeMOzYSBub2lfZHVuZyB0aGVvIGlkXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyW119IGlkcyBjw6FjIGlkIMSR4buDIHjDs2FcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59IHPhu5EgZMOybmcgxJHDoyB4w7NhXHJcbiAgICAgKiBcclxuICAgICAqIEBtZW1iZXJPZiBOb2lEdW5nUmVwb3NpdG9yeVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGVsZXRlKGlkczogbnVtYmVyW10pOiBQcm9taXNlPHBnLlF1ZXJ5UmVzdWx0PiB7XHJcbiAgICAgICAgbGV0IHF1ZXJ5VGV4dDtcclxuICAgICAgICBxdWVyeVRleHQgPSBgREVMRVRFICBGUk9NIGFjY291bnQgV0hFUkUgdXNlcl9pZCA9ICQxYDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBnQ29ubmVjdC5ydW5BUXVlcnkocXVlcnlUZXh0LCBbaWRzXSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGVycm9yWydxdWVyeVRleHQnXSA9IHF1ZXJ5VGV4dDtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHF1ZXJ5VGV4dClcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGF1dGhvciBOaOG6rXQgQW5oIDE3LzA0LzIwMTdcclxuICAgICAqIFxyXG4gICAgICogdGjDqm0gMSBub2lfZHVuZ1xyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0ge05vaUR1bmd9IG5vaWR1bmcgY+G6p24gdGjDqm1cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59IHPhu5EgZMOybmcgxJHDoyB0aMOqbVxyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyT2YgTm9pRHVuZ1JlcG9zaXRvcnlcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluc2VydCh0aW50dWM6IFRpblR1Yyk6IFByb21pc2U8cGcuUXVlcnlSZXN1bHQ+IHtcclxuICAgICAgICBsZXQgcXVlcnlUZXh0O1xyXG4gICAgICAgIHF1ZXJ5VGV4dCA9IGBcclxuICAgICAgICAgICAgSU5TRVJUIElOVE8gYWNjb3VudCAoXHJcbiAgICAgICAgICAgICAgICB1c2VyX2lkLCB1c2VybmFtZSwgcGFzc3dvcmQsIGVtYWlsLCBjcmVhdGVkX29uLCBsYXN0X2xvZ2luKVxyXG4gICAgICAgICAgICAgVkFMVUVTIChcclxuICAgICAgICAgICAgICAgICAgICAkMSxcclxuICAgICAgICAgICAgICAgICAgICAkMixcclxuICAgICAgICAgICAgICAgICAgICAkMyxcclxuICAgICAgICAgICAgICAgICAgICAkNCxcclxuICAgICAgICAgICAgICAgICAgICAkNVxyXG4gICAgICAgICAgICAgICAgICAgICQ2XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgIHJldHVybiBwZ0Nvbm5lY3QucnVuQVF1ZXJ5KHF1ZXJ5VGV4dCxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgdGludHVjLnVzZXJfaWQsXHJcbiAgICAgICAgICAgICAgICB0aW50dWMudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICB0aW50dWMucGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICB0aW50dWMuZW1haWwsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXJyb3JbJ3F1ZXJ5VGV4dCddID0gcXVlcnlUZXh0O1xyXG4gICAgICAgICAgICAgICAgZXJyb3JbJ3ZhbHVlJ10gPSB0aW50dWM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBhdXRob3IgTmjhuq10IEFuaCAxNy8wNC8yMDE3XHJcbiAgICAgKiBcclxuICAgICAqIHVwZGF0ZSBub2lfZHVuZ1xyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0ge1F1ZXJ5T3B0aW9ufSBvcHRpb24gY8OhYyBj4buZdCBj4bqnbiB1cGRhdGVcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59IHPhu5EgZMOybmcgxJHDoyB1cGRhdGVcclxuICAgICAqIFxyXG4gICAgICogQG1lbWJlck9mIE5vaUR1bmdSZXBvc2l0b3J5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1cGRhdGUodGludHVjIDogVGluVHVjKTogUHJvbWlzZTxwZy5RdWVyeVJlc3VsdD4ge1xyXG4gICAgICAgIC8vIGxldCBzZXRRdWVyeSA9IFJlcG9VdGlsLmJ1aWxkU2V0UXVlcnkob3B0aW9uLCBbJ3VzZXJuYW1lJywgJ3VzZXJfaWQnXSk7XHJcbiAgICAgICAgLy8gc2V0UXVlcnkucGFyYW1zLnB1c2gob3B0aW9uLnVzZXJfaWQpO1xyXG4gICAgICAgIC8vIHNldFF1ZXJ5LnBhcmFtcy5wdXNoKG9wdGlvbi51c2VyX2lkKTtcclxuXHJcbiAgICAgICAgLy8gbGV0IHF1ZXJ5VGV4dCA9IGBVUERBVEUgXCJhY2NvdW50XCJcclxuICAgICAgICAvLyAgICAgJHtzZXRRdWVyeS5xdWVyeX0sIHVzZXJuYW1lID0gJCR7c2V0UXVlcnkucGFyYW1zLmxlbmd0aH1cclxuICAgICAgICAvLyBcdFdIRVJFIFwidXNlcl9pZFwiID0gJCR7c2V0UXVlcnkucGFyYW1zLmxlbmd0aCAtIDF9O2A7XHJcbiAgICAgICAgbGV0IHF1ZXJ5VGV4dDtcclxuICAgICAgICBxdWVyeVRleHQgPSAnVVBEQVRFIGFjY291bnQgU0VUIHVzZXJuYW1lID0kMiB3aGVyZSB1c2VyX2lkPSQxJztcclxuICAgICAgICBjb25zb2xlLmxvZyh0aW50dWMudXNlcl9pZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGludHVjLnVzZXJuYW1lKTtcclxuICAgICAgICBcclxuICAgIFxyXG5cclxuICAgICAgICByZXR1cm4gcGdDb25uZWN0LnJ1bkFRdWVyeShxdWVyeVRleHQsIFtcclxuICAgICAgICAgICAgdGludHVjLnVzZXJfaWQsXHJcbiAgICAgICAgICAgIHRpbnR1Yy51c2VybmFtZVxyXG4gICAgICAgIF0pLy9jaG8gZG8gdmkgdHJpIG5lbiBkb2kgZG9sbGEgXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBlcnJvclsncXVlcnlUZXh0J10gPSBxdWVyeVRleHQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY291bnQob2JqZWN0ID0ge30pOiBQcm9taXNlPHBnLlF1ZXJ5UmVzdWx0PiB7XHJcbiAgICAgICAgaWYgKF8uaXNFbXB0eShvYmplY3QpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwZ0Nvbm5lY3QucnVuQVF1ZXJ5KCdzZWxlY3QgY291bnQodGluX3R1Y19pZCkgZnJvbSB0aW5fdHVjJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcXVlcnkgPSAnc2VsZWN0IGNvdW50KHVzZXJfaWQpIGZyb20gdGluX3R1Yyc7XHJcbiAgICAgICAgbGV0IHdoZXJlID0gUmVwb1V0aWwuYnVpbGRXaGVyZVF1ZXJ5KG9iamVjdCk7XHJcbiAgICAgICAgcmV0dXJuIHBnQ29ubmVjdC5ydW5BUXVlcnkocXVlcnkgKyBgICR7d2hlcmUucXVlcnl9YCwgd2hlcmUucGFyYW1zKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufVxyXG4iXX0=
