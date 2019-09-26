"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = require("./base");
var MonAnRepository = /** @class */ (function () {
    function MonAnRepository() {
    }
    // /**
    //  * @author Nhật Anh 17/04/2017
    //  * 
    //  * tìm kiếm noi_dung
    //  * @param {QueryOption} option chứa các cột cần tìm
    //  * @param {string} [orderBy] chuỗi để sắp xếp theo format ten_cot+0(hoặc 1)[,ten_cot+0(hoặc 1)...]
    //  * @param {number} [limit] lấy bao nhiệu
    //  * @param {number} [offset] lấy từ dòng thứ mấy
    //  * @returns {Promise<NoiDung[]>} danh sách noi_dung
    //  * 
    //  * @memberOf NoiDungRepository
    //  */
    // public search(option: QueryOption, orderBy?: string, limit?: number, offset?: number): Promise<pg.QueryResult> {
    //     let queryText = " SELECT * FROM account WHERE username LIKE '%minhtuan'; $1";
    //     // let whereClause = RepoUtil.buildWhereQuery(option);
    //     // queryText += whereClause.query;
    //     // if (orderBy) {
    //     //     queryText += ' ' + RepoUtil.convertQueryForOrderBy(orderBy);
    //     // }
    //     // if (limit) {
    //     //     queryText += ` limit $${whereClause.params.length + 1}`;
    //     //     whereClause.params.push(limit);
    //     // }
    //     // if (offset) {
    //     //     queryText += ` offset $${whereClause.params.length + 1}`;
    //     //     whereClause.params.push(offset);
    //     // }
    //     return pgConnect.runAQuery(queryText)
    //         .catch(error => {
    //             error['queryText'] = queryText;
    //             return Promise.reject(error);
    //         });
    // }
    // public seek(per_page: number, operator: string, id: number = null): Promise<pg.QueryResult> {
    //     let query = `select * from account where user_id= $1`;
    //     return pgConnect.runAQuery(query, [])
    //         .catch(error => {
    //             error['value'] = TinTuc;
    //             return Promise.reject(error);
    //         });
    // }
    // /**
    //  * @author Nhật Anh 17/04/2017
    //  * 
    //  * lấy noi_dung đứng đầu
    //  * 
    //  * @param {string} standard chuỗi để sắp xếp theo format ten_cot+0(hoặc 1)[,ten_cot+0(hoặc 1)...]
    //  * @param {number} offset lấy từ dòng thứ mấy
    //  * @returns {Promise<NoiDung[]>} danh sách noi_dung
    //  * 
    //  * @memberOf NoiDungRepository
    //  */
    // //api/tin_tuc/gettop?standard=tin_tuc_id%2b1&offset=0
    // public getTop(): Promise<pg.QueryResult> {
    //     let queryText = `select * from account`;
    //     return pgConnect.runAQuery(queryText)
    //         .catch(error => {
    //             error['queryText'] = queryText;
    //             return Promise.reject(error);
    //         });
    // }
    MonAnRepository.prototype.search = function (id) {
        // let queryText = " SELECT * FROM account WHERE username LIKE '%minhtuan'; $1";
        var queryText = " select *from mon_an where ten_mon_an_khong_dau=$1";
        console.log(id);
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
        return base_1.pgConnect.runAQuery(queryText, [id])
            .catch(function (error) {
            error['queryText'] = queryText;
            return Promise.reject(error);
        });
    };
    // /**
    //  * @author Nhật Anh 17/04/2017
    //  * 
    //  * lấy một noi_dung theo id
    //  * 
    //  * @param {number} id của noi_dung
    //  * @returns {Promise<TinTuc>} noi_dung
    //  * 
    //  * @memberOf NoiDungRepository
    //  */
    MonAnRepository.prototype.getOne = function (id) {
        var queryText = "select*from mon_an where id_mon_an=$1";
        return base_1.pgConnect.runAQuery(queryText, [id])
            .catch(function (error) {
            "";
            error['queryText'] = queryText;
            return Promise.reject(error);
        });
    };
    MonAnRepository.prototype.seek = function (id) {
        var queryText = "\n        select * from mon_an where nguyen_lieu ::json->>'id'='$1'";
        return base_1.pgConnect.runAQuery(queryText, [id])
            .catch(function (error) {
            error['queryText'] = queryText;
            return Promise.reject(error);
        });
    };
    MonAnRepository.prototype.getTop = function (id) {
        var queryText = "select * from mon_an where nguyen_lieu ::json->>'id'=$1";
        return base_1.pgConnect.runAQuery(queryText, [id])
            .catch(function (error) {
            error['queryText'] = queryText;
            return Promise.reject(error);
        });
    };
    // /**
    //  * @author Nhật Anh 17/04/2017
    //  * 
    //  * dùng để xóa noi_dung theo id
    //  * 
    //  * @param {number[]} ids các id để xóa
    //  * @returns {Promise<number>} số dòng đã xóa
    //  * 
    //  * @memberOf NoiDungRepository
    //  */
    // public delete(ids: number[]): Promise<pg.QueryResult> {
    //     let queryText;
    //     queryText = `DELETE  FROM account WHERE user_id = $1`;
    //     return pgConnect.runAQuery(queryText, [ids])
    //         .catch(error => {
    //             error['queryText'] = queryText;
    //             // console.log(queryText)
    //             return Promise.reject(error);
    //         });
    // }
    // /**
    //  * @author Nhật Anh 17/04/2017
    //  * 
    //  * thêm 1 noi_dung
    //  * 
    //  * @param {NoiDung} noidung cần thêm
    //  * @returns {Promise<number>} số dòng đã thêm
    //  * 
    //  * @memberOf NoiDungRepository
    //  */
    // public insert(tintuc: TinTuc): Promise<pg.QueryResult> {
    //     let queryText;
    //     queryText = `
    //         INSERT INTO account (
    //             user_id, username, password, email, created_on, last_login)
    //          VALUES (
    //                 $1,
    //                 $2,
    //                 $3,
    //                 $4,
    //                 $5
    //                 $6
    //                 );
    //                 `;
    //     return pgConnect.runAQuery(queryText,
    //         [
    //             tintuc.user_id,
    //             tintuc.username,
    //             tintuc.password,
    //             tintuc.email,
    //         ])
    //         .catch(error => {
    //             error['queryText'] = queryText;
    //             error['value'] = tintuc;
    //             return Promise.reject(error);
    //         });
    // }
    // /**
    //  * @author Nhật Anh 17/04/2017
    //  * 
    //  * update noi_dung
    //  * 
    //  * @param {QueryOption} option các cột cần update
    //  * @returns {Promise<number>} số dòng đã update
    //  * 
    //  * @memberOf NoiDungRepository
    //  */
    // public update(tintuc : TinTuc): Promise<pg.QueryResult> {
    //     // let setQuery = RepoUtil.buildSetQuery(option, ['username', 'user_id']);
    //     // setQuery.params.push(option.user_id);
    //     // setQuery.params.push(option.user_id);
    //     // let queryText = `UPDATE "account"
    //     //     ${setQuery.query}, username = $${setQuery.params.length}
    //     // 	WHERE "user_id" = $${setQuery.params.length - 1};`;
    //     let queryText;
    //     queryText = 'UPDATE account SET username =$2 where user_id=$1';
    //     console.log(tintuc.user_id);
    //     console.log(tintuc.username);
    //     return pgConnect.runAQuery(queryText, [
    //         tintuc.user_id,
    //         tintuc.username
    //     ])//cho do vi tri nen doi dolla 
    //         .catch(error => {
    //             error['queryText'] = queryText;
    //             return Promise.reject(error);
    //         });
    // }
    // public count(object = {}): Promise<pg.QueryResult> {
    //     if (_.isEmpty(object)) {
    //         return pgConnect.runAQuery('select count(tin_tuc_id) from tin_tuc');
    //     }
    //     let query = 'select count(user_id) from tin_tuc';
    //     let where = RepoUtil.buildWhereQuery(object);
    //     return pgConnect.runAQuery(query + ` ${where.query}`, where.params);
    // }
    MonAnRepository.prototype.save = function (ids) {
        // let queryText = " SELECT * FROM account WHERE username LIKE '%minhtuan'; $1";
        var queryText = " select * from mon_an Where $1 @> ARRAY[nguyen_lieu ::json->>'id']::int[]";
        console.log(3);
        return base_1.pgConnect.runAQuery(queryText, [ids])
            .catch(function (error) {
            error['queryText'] = queryText;
            return Promise.reject(error);
        });
    };
    return MonAnRepository;
}());
exports.MonAnRepository = MonAnRepository;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9zaXRvcmllcy9tb25hbi1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBT0EsK0JBQW1DO0FBU25DO0lBR0k7SUFDQSxDQUFDO0lBSUQsTUFBTTtJQUNOLGlDQUFpQztJQUNqQyxNQUFNO0lBQ04sdUJBQXVCO0lBQ3ZCLHNEQUFzRDtJQUN0RCxxR0FBcUc7SUFDckcsMkNBQTJDO0lBQzNDLGtEQUFrRDtJQUNsRCxzREFBc0Q7SUFDdEQsTUFBTTtJQUNOLGlDQUFpQztJQUNqQyxNQUFNO0lBQ04sbUhBQW1IO0lBQ25ILG9GQUFvRjtJQUNwRiw2REFBNkQ7SUFDN0QseUNBQXlDO0lBQ3pDLHdCQUF3QjtJQUN4QiwwRUFBMEU7SUFDMUUsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixzRUFBc0U7SUFDdEUsNkNBQTZDO0lBQzdDLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsdUVBQXVFO0lBQ3ZFLDhDQUE4QztJQUM5QyxXQUFXO0lBRVgsNENBQTRDO0lBQzVDLDRCQUE0QjtJQUM1Qiw4Q0FBOEM7SUFDOUMsNENBQTRDO0lBQzVDLGNBQWM7SUFDZCxJQUFJO0lBRUosZ0dBQWdHO0lBQ2hHLDZEQUE2RDtJQUU3RCw0Q0FBNEM7SUFDNUMsNEJBQTRCO0lBQzVCLHVDQUF1QztJQUN2Qyw0Q0FBNEM7SUFDNUMsY0FBYztJQUNkLElBQUk7SUFFSixNQUFNO0lBQ04saUNBQWlDO0lBQ2pDLE1BQU07SUFDTiwyQkFBMkI7SUFDM0IsTUFBTTtJQUNOLG9HQUFvRztJQUNwRyxnREFBZ0Q7SUFDaEQsc0RBQXNEO0lBQ3RELE1BQU07SUFDTixpQ0FBaUM7SUFDakMsTUFBTTtJQUNOLHdEQUF3RDtJQUV4RCw2Q0FBNkM7SUFHN0MsK0NBQStDO0lBRS9DLDRDQUE0QztJQUM1Qyw0QkFBNEI7SUFDNUIsOENBQThDO0lBQzlDLDRDQUE0QztJQUM1QyxjQUFjO0lBQ2QsSUFBSTtJQUtHLGdDQUFNLEdBQWIsVUFBYyxFQUFFO1FBQ1osZ0ZBQWdGO1FBQ2hG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LFVBQUEsS0FBSztZQUNSLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxTQUFTLENBQUM7WUFDL0IsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQWVMLHNCQUFDO0FBQUQsQ0FoU0EsQUFnU0MsSUFBQTtBQWhTWSwwQ0FBZSIsImZpbGUiOiJyZXBvc2l0b3JpZXMvbW9uYW4tcmVwb3NpdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgKiBhcyB2YWxpZGF0b3IgZnJvbSAndmFsaWRhdG9yJztcclxuaW1wb3J0ICogYXMgcGcgZnJvbSAncGcnO1xyXG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuXHJcbmltcG9ydCB7IFJlcG9VdGlsIH0gZnJvbSAnLi91dGlsJztcclxuaW1wb3J0IHsgcGdDb25uZWN0IH0gZnJvbSAnLi9iYXNlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuaW50ZXJmYWNlIFF1ZXJ5T3B0aW9uIHtcclxuICAgIHRpZXVfZGU/OiBzdHJpbmc7XHJcbiAgICB1c2VyX2lkPzogbnVtYmVyO1xyXG4gICAgbm9pX2R1bmc/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNb25BblJlcG9zaXRvcnkge1xyXG4gICAgW3g6IHN0cmluZ106IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vIC8qKlxyXG4gICAgLy8gICogQGF1dGhvciBOaOG6rXQgQW5oIDE3LzA0LzIwMTdcclxuICAgIC8vICAqIFxyXG4gICAgLy8gICogdMOsbSBraeG6v20gbm9pX2R1bmdcclxuICAgIC8vICAqIEBwYXJhbSB7UXVlcnlPcHRpb259IG9wdGlvbiBjaOG7qWEgY8OhYyBj4buZdCBj4bqnbiB0w6xtXHJcbiAgICAvLyAgKiBAcGFyYW0ge3N0cmluZ30gW29yZGVyQnldIGNodeG7l2kgxJHhu4Mgc+G6r3AgeOG6v3AgdGhlbyBmb3JtYXQgdGVuX2NvdCswKGhv4bq3YyAxKVssdGVuX2NvdCswKGhv4bq3YyAxKS4uLl1cclxuICAgIC8vICAqIEBwYXJhbSB7bnVtYmVyfSBbbGltaXRdIGzhuqV5IGJhbyBuaGnhu4d1XHJcbiAgICAvLyAgKiBAcGFyYW0ge251bWJlcn0gW29mZnNldF0gbOG6pXkgdOG7qyBkw7JuZyB0aOG7qSBt4bqleVxyXG4gICAgLy8gICogQHJldHVybnMge1Byb21pc2U8Tm9pRHVuZ1tdPn0gZGFuaCBzw6FjaCBub2lfZHVuZ1xyXG4gICAgLy8gICogXHJcbiAgICAvLyAgKiBAbWVtYmVyT2YgTm9pRHVuZ1JlcG9zaXRvcnlcclxuICAgIC8vICAqL1xyXG4gICAgLy8gcHVibGljIHNlYXJjaChvcHRpb246IFF1ZXJ5T3B0aW9uLCBvcmRlckJ5Pzogc3RyaW5nLCBsaW1pdD86IG51bWJlciwgb2Zmc2V0PzogbnVtYmVyKTogUHJvbWlzZTxwZy5RdWVyeVJlc3VsdD4ge1xyXG4gICAgLy8gICAgIGxldCBxdWVyeVRleHQgPSBcIiBTRUxFQ1QgKiBGUk9NIGFjY291bnQgV0hFUkUgdXNlcm5hbWUgTElLRSAnJW1pbmh0dWFuJzsgJDFcIjtcclxuICAgIC8vICAgICAvLyBsZXQgd2hlcmVDbGF1c2UgPSBSZXBvVXRpbC5idWlsZFdoZXJlUXVlcnkob3B0aW9uKTtcclxuICAgIC8vICAgICAvLyBxdWVyeVRleHQgKz0gd2hlcmVDbGF1c2UucXVlcnk7XHJcbiAgICAvLyAgICAgLy8gaWYgKG9yZGVyQnkpIHtcclxuICAgIC8vICAgICAvLyAgICAgcXVlcnlUZXh0ICs9ICcgJyArIFJlcG9VdGlsLmNvbnZlcnRRdWVyeUZvck9yZGVyQnkob3JkZXJCeSk7XHJcbiAgICAvLyAgICAgLy8gfVxyXG4gICAgLy8gICAgIC8vIGlmIChsaW1pdCkge1xyXG4gICAgLy8gICAgIC8vICAgICBxdWVyeVRleHQgKz0gYCBsaW1pdCAkJHt3aGVyZUNsYXVzZS5wYXJhbXMubGVuZ3RoICsgMX1gO1xyXG4gICAgLy8gICAgIC8vICAgICB3aGVyZUNsYXVzZS5wYXJhbXMucHVzaChsaW1pdCk7XHJcbiAgICAvLyAgICAgLy8gfVxyXG4gICAgLy8gICAgIC8vIGlmIChvZmZzZXQpIHtcclxuICAgIC8vICAgICAvLyAgICAgcXVlcnlUZXh0ICs9IGAgb2Zmc2V0ICQke3doZXJlQ2xhdXNlLnBhcmFtcy5sZW5ndGggKyAxfWA7XHJcbiAgICAvLyAgICAgLy8gICAgIHdoZXJlQ2xhdXNlLnBhcmFtcy5wdXNoKG9mZnNldCk7XHJcbiAgICAvLyAgICAgLy8gfVxyXG5cclxuICAgIC8vICAgICByZXR1cm4gcGdDb25uZWN0LnJ1bkFRdWVyeShxdWVyeVRleHQpXHJcbiAgICAvLyAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBlcnJvclsncXVlcnlUZXh0J10gPSBxdWVyeVRleHQ7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBwdWJsaWMgc2VlayhwZXJfcGFnZTogbnVtYmVyLCBvcGVyYXRvcjogc3RyaW5nLCBpZDogbnVtYmVyID0gbnVsbCk6IFByb21pc2U8cGcuUXVlcnlSZXN1bHQ+IHtcclxuICAgIC8vICAgICBsZXQgcXVlcnkgPSBgc2VsZWN0ICogZnJvbSBhY2NvdW50IHdoZXJlIHVzZXJfaWQ9ICQxYDtcclxuXHJcbiAgICAvLyAgICAgcmV0dXJuIHBnQ29ubmVjdC5ydW5BUXVlcnkocXVlcnksIFtdKVxyXG4gICAgLy8gICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgZXJyb3JbJ3ZhbHVlJ10gPSBUaW5UdWM7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyAvKipcclxuICAgIC8vICAqIEBhdXRob3IgTmjhuq10IEFuaCAxNy8wNC8yMDE3XHJcbiAgICAvLyAgKiBcclxuICAgIC8vICAqIGzhuqV5IG5vaV9kdW5nIMSR4bupbmcgxJHhuqd1XHJcbiAgICAvLyAgKiBcclxuICAgIC8vICAqIEBwYXJhbSB7c3RyaW5nfSBzdGFuZGFyZCBjaHXhu5dpIMSR4buDIHPhuq9wIHjhur9wIHRoZW8gZm9ybWF0IHRlbl9jb3QrMChob+G6t2MgMSlbLHRlbl9jb3QrMChob+G6t2MgMSkuLi5dXHJcbiAgICAvLyAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IGzhuqV5IHThu6sgZMOybmcgdGjhu6kgbeG6pXlcclxuICAgIC8vICAqIEByZXR1cm5zIHtQcm9taXNlPE5vaUR1bmdbXT59IGRhbmggc8OhY2ggbm9pX2R1bmdcclxuICAgIC8vICAqIFxyXG4gICAgLy8gICogQG1lbWJlck9mIE5vaUR1bmdSZXBvc2l0b3J5XHJcbiAgICAvLyAgKi9cclxuICAgIC8vIC8vYXBpL3Rpbl90dWMvZ2V0dG9wP3N0YW5kYXJkPXRpbl90dWNfaWQlMmIxJm9mZnNldD0wXHJcblxyXG4gICAgLy8gcHVibGljIGdldFRvcCgpOiBQcm9taXNlPHBnLlF1ZXJ5UmVzdWx0PiB7XHJcblxyXG5cclxuICAgIC8vICAgICBsZXQgcXVlcnlUZXh0ID0gYHNlbGVjdCAqIGZyb20gYWNjb3VudGA7XHJcblxyXG4gICAgLy8gICAgIHJldHVybiBwZ0Nvbm5lY3QucnVuQVF1ZXJ5KHF1ZXJ5VGV4dClcclxuICAgIC8vICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGVycm9yWydxdWVyeVRleHQnXSA9IHF1ZXJ5VGV4dDtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBzZWFyY2goaWQpOiBQcm9taXNlPHBnLlF1ZXJ5UmVzdWx0PiB7XHJcbiAgICAgICAgLy8gbGV0IHF1ZXJ5VGV4dCA9IFwiIFNFTEVDVCAqIEZST00gYWNjb3VudCBXSEVSRSB1c2VybmFtZSBMSUtFICclbWluaHR1YW4nOyAkMVwiO1xyXG4gICAgICAgIGxldCBxdWVyeVRleHQgPSBcIiBzZWxlY3QgKmZyb20gbW9uX2FuIHdoZXJlIHRlbl9tb25fYW5fa2hvbmdfZGF1PSQxXCI7XHJcbiAgICAgICAgY29uc29sZS5sb2coaWQpXHJcblxyXG4gICAgICAgIC8vIGxldCB3aGVyZUNsYXVzZSA9IFJlcG9VdGlsLmJ1aWxkV2hlcmVRdWVyeShvcHRpb24pO1xyXG4gICAgICAgIC8vIHF1ZXJ5VGV4dCArPSB3aGVyZUNsYXVzZS5xdWVyeTtcclxuICAgICAgICAvLyBpZiAob3JkZXJCeSkge1xyXG4gICAgICAgIC8vICAgICBxdWVyeVRleHQgKz0gJyAnICsgUmVwb1V0aWwuY29udmVydFF1ZXJ5Rm9yT3JkZXJCeShvcmRlckJ5KTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gaWYgKGxpbWl0KSB7XHJcbiAgICAgICAgLy8gICAgIHF1ZXJ5VGV4dCArPSBgIGxpbWl0ICQke3doZXJlQ2xhdXNlLnBhcmFtcy5sZW5ndGggKyAxfWA7XHJcbiAgICAgICAgLy8gICAgIHdoZXJlQ2xhdXNlLnBhcmFtcy5wdXNoKGxpbWl0KTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gaWYgKG9mZnNldCkge1xyXG4gICAgICAgIC8vICAgICBxdWVyeVRleHQgKz0gYCBvZmZzZXQgJCR7d2hlcmVDbGF1c2UucGFyYW1zLmxlbmd0aCArIDF9YDtcclxuICAgICAgICAvLyAgICAgd2hlcmVDbGF1c2UucGFyYW1zLnB1c2gob2Zmc2V0KTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIHJldHVybiBwZ0Nvbm5lY3QucnVuQVF1ZXJ5KHF1ZXJ5VGV4dCwgW2lkXSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGVycm9yWydxdWVyeVRleHQnXSA9IHF1ZXJ5VGV4dDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC8qKlxyXG4gICAgLy8gICogQGF1dGhvciBOaOG6rXQgQW5oIDE3LzA0LzIwMTdcclxuICAgIC8vICAqIFxyXG4gICAgLy8gICogbOG6pXkgbeG7mXQgbm9pX2R1bmcgdGhlbyBpZFxyXG4gICAgLy8gICogXHJcbiAgICAvLyAgKiBAcGFyYW0ge251bWJlcn0gaWQgY+G7p2Egbm9pX2R1bmdcclxuICAgIC8vICAqIEByZXR1cm5zIHtQcm9taXNlPFRpblR1Yz59IG5vaV9kdW5nXHJcbiAgICAvLyAgKiBcclxuICAgIC8vICAqIEBtZW1iZXJPZiBOb2lEdW5nUmVwb3NpdG9yeVxyXG4gICAgLy8gICovXHJcbiAgICBwdWJsaWMgZ2V0T25lKGlkOiBudW1iZXIpOiBQcm9taXNlPHBnLlF1ZXJ5UmVzdWx0PiB7XHJcbiAgICAgICAgbGV0IHF1ZXJ5VGV4dCA9IGBzZWxlY3QqZnJvbSBtb25fYW4gd2hlcmUgaWRfbW9uX2FuPSQxYDtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBwZ0Nvbm5lY3QucnVuQVF1ZXJ5KHF1ZXJ5VGV4dCwgW2lkXSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtgYFxyXG4gICAgICAgICAgICAgICAgZXJyb3JbJ3F1ZXJ5VGV4dCddID0gcXVlcnlUZXh0O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2VlayhpZDogbnVtYmVyKTogUHJvbWlzZTxwZy5RdWVyeVJlc3VsdD4ge1xyXG4gICAgICAgIGxldCBxdWVyeVRleHQgPSBgXHJcbiAgICAgICAgc2VsZWN0ICogZnJvbSBtb25fYW4gd2hlcmUgbmd1eWVuX2xpZXUgOjpqc29uLT4+J2lkJz0nJDEnYDtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBwZ0Nvbm5lY3QucnVuQVF1ZXJ5KHF1ZXJ5VGV4dCwgW2lkXSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGVycm9yWydxdWVyeVRleHQnXSA9IHF1ZXJ5VGV4dDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgcHVibGljIGdldFRvcChpZCk6IFByb21pc2U8cGcuUXVlcnlSZXN1bHQ+IHtcclxuXHJcblxyXG4gICAgICAgIGxldCBxdWVyeVRleHQgPSBgc2VsZWN0ICogZnJvbSBtb25fYW4gd2hlcmUgbmd1eWVuX2xpZXUgOjpqc29uLT4+J2lkJz0kMWA7XHJcblxyXG4gICAgICAgIHJldHVybiBwZ0Nvbm5lY3QucnVuQVF1ZXJ5KHF1ZXJ5VGV4dCwgW2lkXSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGVycm9yWydxdWVyeVRleHQnXSA9IHF1ZXJ5VGV4dDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyAvKipcclxuICAgIC8vICAqIEBhdXRob3IgTmjhuq10IEFuaCAxNy8wNC8yMDE3XHJcbiAgICAvLyAgKiBcclxuICAgIC8vICAqIGTDuW5nIMSR4buDIHjDs2Egbm9pX2R1bmcgdGhlbyBpZFxyXG4gICAgLy8gICogXHJcbiAgICAvLyAgKiBAcGFyYW0ge251bWJlcltdfSBpZHMgY8OhYyBpZCDEkeG7gyB4w7NhXHJcbiAgICAvLyAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fSBz4buRIGTDsm5nIMSRw6MgeMOzYVxyXG4gICAgLy8gICogXHJcbiAgICAvLyAgKiBAbWVtYmVyT2YgTm9pRHVuZ1JlcG9zaXRvcnlcclxuICAgIC8vICAqL1xyXG4gICAgLy8gcHVibGljIGRlbGV0ZShpZHM6IG51bWJlcltdKTogUHJvbWlzZTxwZy5RdWVyeVJlc3VsdD4ge1xyXG4gICAgLy8gICAgIGxldCBxdWVyeVRleHQ7XHJcbiAgICAvLyAgICAgcXVlcnlUZXh0ID0gYERFTEVURSAgRlJPTSBhY2NvdW50IFdIRVJFIHVzZXJfaWQgPSAkMWA7XHJcblxyXG4gICAgLy8gICAgIHJldHVybiBwZ0Nvbm5lY3QucnVuQVF1ZXJ5KHF1ZXJ5VGV4dCwgW2lkc10pXHJcbiAgICAvLyAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBlcnJvclsncXVlcnlUZXh0J10gPSBxdWVyeVRleHQ7XHJcbiAgICAvLyAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhxdWVyeVRleHQpXHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyAvKipcclxuICAgIC8vICAqIEBhdXRob3IgTmjhuq10IEFuaCAxNy8wNC8yMDE3XHJcbiAgICAvLyAgKiBcclxuICAgIC8vICAqIHRow6ptIDEgbm9pX2R1bmdcclxuICAgIC8vICAqIFxyXG4gICAgLy8gICogQHBhcmFtIHtOb2lEdW5nfSBub2lkdW5nIGPhuqduIHRow6ptXHJcbiAgICAvLyAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fSBz4buRIGTDsm5nIMSRw6MgdGjDqm1cclxuICAgIC8vICAqIFxyXG4gICAgLy8gICogQG1lbWJlck9mIE5vaUR1bmdSZXBvc2l0b3J5XHJcbiAgICAvLyAgKi9cclxuICAgIC8vIHB1YmxpYyBpbnNlcnQodGludHVjOiBUaW5UdWMpOiBQcm9taXNlPHBnLlF1ZXJ5UmVzdWx0PiB7XHJcbiAgICAvLyAgICAgbGV0IHF1ZXJ5VGV4dDtcclxuICAgIC8vICAgICBxdWVyeVRleHQgPSBgXHJcbiAgICAvLyAgICAgICAgIElOU0VSVCBJTlRPIGFjY291bnQgKFxyXG4gICAgLy8gICAgICAgICAgICAgdXNlcl9pZCwgdXNlcm5hbWUsIHBhc3N3b3JkLCBlbWFpbCwgY3JlYXRlZF9vbiwgbGFzdF9sb2dpbilcclxuICAgIC8vICAgICAgICAgIFZBTFVFUyAoXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgJDEsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgJDIsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgJDMsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgJDQsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgJDVcclxuICAgIC8vICAgICAgICAgICAgICAgICAkNlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgYDtcclxuICAgIC8vICAgICByZXR1cm4gcGdDb25uZWN0LnJ1bkFRdWVyeShxdWVyeVRleHQsXHJcbiAgICAvLyAgICAgICAgIFtcclxuICAgIC8vICAgICAgICAgICAgIHRpbnR1Yy51c2VyX2lkLFxyXG4gICAgLy8gICAgICAgICAgICAgdGludHVjLnVzZXJuYW1lLFxyXG4gICAgLy8gICAgICAgICAgICAgdGludHVjLnBhc3N3b3JkLFxyXG4gICAgLy8gICAgICAgICAgICAgdGludHVjLmVtYWlsLFxyXG5cclxuICAgIC8vICAgICAgICAgXSlcclxuICAgIC8vICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGVycm9yWydxdWVyeVRleHQnXSA9IHF1ZXJ5VGV4dDtcclxuICAgIC8vICAgICAgICAgICAgIGVycm9yWyd2YWx1ZSddID0gdGludHVjO1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gLyoqXHJcbiAgICAvLyAgKiBAYXV0aG9yIE5o4bqtdCBBbmggMTcvMDQvMjAxN1xyXG4gICAgLy8gICogXHJcbiAgICAvLyAgKiB1cGRhdGUgbm9pX2R1bmdcclxuICAgIC8vICAqIFxyXG4gICAgLy8gICogQHBhcmFtIHtRdWVyeU9wdGlvbn0gb3B0aW9uIGPDoWMgY+G7mXQgY+G6p24gdXBkYXRlXHJcbiAgICAvLyAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fSBz4buRIGTDsm5nIMSRw6MgdXBkYXRlXHJcbiAgICAvLyAgKiBcclxuICAgIC8vICAqIEBtZW1iZXJPZiBOb2lEdW5nUmVwb3NpdG9yeVxyXG4gICAgLy8gICovXHJcbiAgICAvLyBwdWJsaWMgdXBkYXRlKHRpbnR1YyA6IFRpblR1Yyk6IFByb21pc2U8cGcuUXVlcnlSZXN1bHQ+IHtcclxuICAgIC8vICAgICAvLyBsZXQgc2V0UXVlcnkgPSBSZXBvVXRpbC5idWlsZFNldFF1ZXJ5KG9wdGlvbiwgWyd1c2VybmFtZScsICd1c2VyX2lkJ10pO1xyXG4gICAgLy8gICAgIC8vIHNldFF1ZXJ5LnBhcmFtcy5wdXNoKG9wdGlvbi51c2VyX2lkKTtcclxuICAgIC8vICAgICAvLyBzZXRRdWVyeS5wYXJhbXMucHVzaChvcHRpb24udXNlcl9pZCk7XHJcblxyXG4gICAgLy8gICAgIC8vIGxldCBxdWVyeVRleHQgPSBgVVBEQVRFIFwiYWNjb3VudFwiXHJcbiAgICAvLyAgICAgLy8gICAgICR7c2V0UXVlcnkucXVlcnl9LCB1c2VybmFtZSA9ICQke3NldFF1ZXJ5LnBhcmFtcy5sZW5ndGh9XHJcbiAgICAvLyAgICAgLy8gXHRXSEVSRSBcInVzZXJfaWRcIiA9ICQke3NldFF1ZXJ5LnBhcmFtcy5sZW5ndGggLSAxfTtgO1xyXG4gICAgLy8gICAgIGxldCBxdWVyeVRleHQ7XHJcbiAgICAvLyAgICAgcXVlcnlUZXh0ID0gJ1VQREFURSBhY2NvdW50IFNFVCB1c2VybmFtZSA9JDIgd2hlcmUgdXNlcl9pZD0kMSc7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2codGludHVjLnVzZXJfaWQpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHRpbnR1Yy51c2VybmFtZSk7XHJcblxyXG5cclxuXHJcbiAgICAvLyAgICAgcmV0dXJuIHBnQ29ubmVjdC5ydW5BUXVlcnkocXVlcnlUZXh0LCBbXHJcbiAgICAvLyAgICAgICAgIHRpbnR1Yy51c2VyX2lkLFxyXG4gICAgLy8gICAgICAgICB0aW50dWMudXNlcm5hbWVcclxuICAgIC8vICAgICBdKS8vY2hvIGRvIHZpIHRyaSBuZW4gZG9pIGRvbGxhIFxyXG4gICAgLy8gICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgZXJyb3JbJ3F1ZXJ5VGV4dCddID0gcXVlcnlUZXh0O1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gcHVibGljIGNvdW50KG9iamVjdCA9IHt9KTogUHJvbWlzZTxwZy5RdWVyeVJlc3VsdD4ge1xyXG4gICAgLy8gICAgIGlmIChfLmlzRW1wdHkob2JqZWN0KSkge1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gcGdDb25uZWN0LnJ1bkFRdWVyeSgnc2VsZWN0IGNvdW50KHRpbl90dWNfaWQpIGZyb20gdGluX3R1YycpO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgbGV0IHF1ZXJ5ID0gJ3NlbGVjdCBjb3VudCh1c2VyX2lkKSBmcm9tIHRpbl90dWMnO1xyXG4gICAgLy8gICAgIGxldCB3aGVyZSA9IFJlcG9VdGlsLmJ1aWxkV2hlcmVRdWVyeShvYmplY3QpO1xyXG4gICAgLy8gICAgIHJldHVybiBwZ0Nvbm5lY3QucnVuQVF1ZXJ5KHF1ZXJ5ICsgYCAke3doZXJlLnF1ZXJ5fWAsIHdoZXJlLnBhcmFtcyk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcHVibGljIHNhdmUoaWRzOiBudW1iZXJbXSk6IFByb21pc2U8cGcuUXVlcnlSZXN1bHQ+IHtcclxuICAgICAgICAvLyBsZXQgcXVlcnlUZXh0ID0gXCIgU0VMRUNUICogRlJPTSBhY2NvdW50IFdIRVJFIHVzZXJuYW1lIExJS0UgJyVtaW5odHVhbic7ICQxXCI7XHJcbiAgICAgICAgbGV0IHF1ZXJ5VGV4dCA9IFwiIHNlbGVjdCAqIGZyb20gbW9uX2FuIFdoZXJlICQxIEA+IEFSUkFZW25ndXllbl9saWV1IDo6anNvbi0+PidpZCddOjppbnRbXVwiO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKDMpXHJcblxyXG4gICAgICAgIHJldHVybiBwZ0Nvbm5lY3QucnVuQVF1ZXJ5KHF1ZXJ5VGV4dCwgW2lkc10pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBlcnJvclsncXVlcnlUZXh0J10gPSBxdWVyeVRleHQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwdWJsaWMgZGVsZXRlKGlkczogbnVtYmVyW10pOiBQcm9taXNlPHBnLlF1ZXJ5UmVzdWx0PiB7XHJcbiAgICAvLyAgICAgLy8gICAgIGxldCBxdWVyeVRleHQ7XHJcbiAgICAvLyAgICAgLy8gICAgIHF1ZXJ5VGV4dCA9IGBERUxFVEUgIEZST00gYWNjb3VudCBXSEVSRSB1c2VyX2lkID0gJDFgO1xyXG4gICAgXHJcbiAgICAvLyAgICAgLy8gICAgIHJldHVybiBwZ0Nvbm5lY3QucnVuQVF1ZXJ5KHF1ZXJ5VGV4dCwgW2lkc10pXHJcbiAgICAvLyAgICAgLy8gICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgICAgIGVycm9yWydxdWVyeVRleHQnXSA9IHF1ZXJ5VGV4dDtcclxuICAgIC8vICAgICAvLyAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhxdWVyeVRleHQpXHJcbiAgICAvLyAgICAgLy8gICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgIC8vICAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgIC8vIH1cclxuXHJcblxyXG59XHJcbiJdfQ==
