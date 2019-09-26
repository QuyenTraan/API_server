"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg = require("pg");
var fs = require("fs");
var path = require("path");
var debug = require('debug')('pg-connect');
var PgConnect = /** @class */ (function () {
    function PgConnect() {
        this.createPool();
    }
    /**
     * chạy 1 query vào csdl, và trả về reject nếu có lỗi khi đang query
     * nó sử dụng node-pg để truy vấn
     *
     * @author đức
     * @param {string} query câu query
     * @param {any[]} [value=[]] params cho câu truy vấn
     * @returns {Promise<pg.QueryResult>} kết quả truy vấn
     *
     * @memberOf PgConnect
     */
    PgConnect.prototype.runAQuery = function (query, value) {
        if (value === void 0) { value = []; }
        return this._pool.connect()
            .then(function (client) {
            return client.query(query, value)
                .then(function (res) {
                client.release();
                return res;
            })
                .catch(function (error) {
                client.release();
                return Promise.reject(error);
            });
        });
    };
    /**
     * chạy câu query trong 1 transaction
     * sử dụng node-pg để truy vấn
     *
     * @author đức
     * @param {string} query câu query
     * @param {any[]} [value=[]] params cho câu truy vấn
     * @returns {Promise<pg.QueryResult>} kết quả truy vấn
     *
     * @memberOf PgConnect
     */
    PgConnect.prototype.runATransaction = function (query, value) {
        if (value === void 0) { value = []; }
        throw new Error('đang xây dựng');
    };
    PgConnect.prototype.createPool = function () {
        var env = process.env.NODE_ENV || 'development';
        var config = this.readConfig(env);
        this._pool = new pg.Pool(config);
        this._pool.on('error', function (error, client) {
            debug("error k\u1EBFt n\u1ED1i csdl tr\u00EAn client %s, error %s", client, error);
        });
    };
    PgConnect.prototype.readConfig = function (env) {
        var configContent = fs.readFileSync(path.join(__dirname, '..', '..', 'config', 'json-config', 'pg.config.json'), 'utf-8');
        var config = JSON.parse(configContent);
        return config[env];
    };
    PgConnect.prototype.shutDown = function () {
        this._pool.end();
    };
    return PgConnect;
}());
var pgConnect = new PgConnect();
exports.default = pgConnect;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9zaXRvcmllcy9iYXNlL3BnLWNvbm5lY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1QkFBeUI7QUFDekIsdUJBQXlCO0FBQ3pCLDJCQUE2QjtBQUM3QixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFM0M7SUFJSTtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7T0FVRztJQUNJLDZCQUFTLEdBQWhCLFVBQWlCLEtBQWEsRUFBRSxLQUFpQjtRQUFqQixzQkFBQSxFQUFBLFVBQWlCO1FBQzdDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7YUFDdEIsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNSLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO2lCQUM1QixJQUFJLENBQUMsVUFBQSxHQUFHO2dCQUNMLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDakIsT0FBTyxHQUFHLENBQUM7WUFDZixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSztnQkFDUixNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2pCLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFBO0lBRVYsQ0FBQztJQUVEOzs7Ozs7Ozs7O09BVUc7SUFDSSxtQ0FBZSxHQUF0QixVQUF1QixLQUFhLEVBQUUsS0FBaUI7UUFBakIsc0JBQUEsRUFBQSxVQUFpQjtRQUNuRCxNQUFNLElBQUksS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTyw4QkFBVSxHQUFsQjtRQUNJLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLGFBQWEsQ0FBQztRQUNoRCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWpDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDLEtBQUssRUFBRSxNQUFNO1lBQ2pDLEtBQUssQ0FBQyw0REFBNkMsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEUsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRU8sOEJBQVUsR0FBbEIsVUFBbUIsR0FBVztRQUMxQixJQUFJLGFBQWEsR0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2xJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdkMsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVPLDRCQUFRLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUwsZ0JBQUM7QUFBRCxDQXRFQSxBQXNFQyxJQUFBO0FBRUQsSUFBSSxTQUFTLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztBQUVoQyxrQkFBZSxTQUFTLENBQUMiLCJmaWxlIjoicmVwb3NpdG9yaWVzL2Jhc2UvcGctY29ubmVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBnIGZyb20gJ3BnJztcclxuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xyXG5sZXQgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdwZy1jb25uZWN0Jyk7XHJcblxyXG5jbGFzcyBQZ0Nvbm5lY3Qge1xyXG5cclxuICAgIHByaXZhdGUgX3Bvb2w6IHBnLlBvb2w7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVQb29sKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjaOG6oXkgMSBxdWVyeSB2w6BvIGNzZGwsIHbDoCB0cuG6oyB24buBIHJlamVjdCBu4bq/dSBjw7MgbOG7l2kga2hpIMSRYW5nIHF1ZXJ5XHJcbiAgICAgKiBuw7Mgc+G7rSBk4bulbmcgbm9kZS1wZyDEkeG7gyB0cnV5IHbhuqVuXHJcbiAgICAgKiBcclxuICAgICAqIEBhdXRob3IgxJHhu6ljXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgY8OidSBxdWVyeVxyXG4gICAgICogQHBhcmFtIHthbnlbXX0gW3ZhbHVlPVtdXSBwYXJhbXMgY2hvIGPDonUgdHJ1eSB24bqlblxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8cGcuUXVlcnlSZXN1bHQ+fSBr4bq/dCBxdeG6oyB0cnV5IHbhuqVuXHJcbiAgICAgKiBcclxuICAgICAqIEBtZW1iZXJPZiBQZ0Nvbm5lY3RcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJ1bkFRdWVyeShxdWVyeTogc3RyaW5nLCB2YWx1ZTogYW55W10gPSBbXSk6IFByb21pc2U8cGcuUXVlcnlSZXN1bHQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9vbC5jb25uZWN0KClcclxuICAgICAgICAgICAgLnRoZW4oY2xpZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjbGllbnQucXVlcnkocXVlcnksIHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudC5yZWxlYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnQucmVsZWFzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNo4bqheSBjw6J1IHF1ZXJ5IHRyb25nIDEgdHJhbnNhY3Rpb25cclxuICAgICAqIHPhu60gZOG7pW5nIG5vZGUtcGcgxJHhu4MgdHJ1eSB24bqlblxyXG4gICAgICogXHJcbiAgICAgKiBAYXV0aG9yIMSR4bupY1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IGPDonUgcXVlcnlcclxuICAgICAqIEBwYXJhbSB7YW55W119IFt2YWx1ZT1bXV0gcGFyYW1zIGNobyBjw6J1IHRydXkgduG6pW5cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHBnLlF1ZXJ5UmVzdWx0Pn0ga+G6v3QgcXXhuqMgdHJ1eSB24bqlblxyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyT2YgUGdDb25uZWN0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBydW5BVHJhbnNhY3Rpb24ocXVlcnk6IHN0cmluZywgdmFsdWU6IGFueVtdID0gW10pOiBQcm9taXNlPHBnLlF1ZXJ5UmVzdWx0PiB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfEkWFuZyB4w6J5IGThu7FuZycpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlUG9vbCgpIHtcclxuICAgICAgICBsZXQgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JztcclxuICAgICAgICBsZXQgY29uZmlnID0gdGhpcy5yZWFkQ29uZmlnKGVudik7XHJcbiAgICAgICAgdGhpcy5fcG9vbCA9IG5ldyBwZy5Qb29sKGNvbmZpZyk7XHJcblxyXG4gICAgICAgIHRoaXMuX3Bvb2wub24oJ2Vycm9yJywgKGVycm9yLCBjbGllbnQpID0+IHtcclxuICAgICAgICAgICAgZGVidWcoYGVycm9yIGvhur90IG7hu5FpIGNzZGwgdHLDqm4gY2xpZW50ICVzLCBlcnJvciAlc2AsIGNsaWVudCwgZXJyb3IpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkQ29uZmlnKGVudjogc3RyaW5nKTogcGcuUG9vbENvbmZpZyB7XHJcbiAgICAgICAgbGV0IGNvbmZpZ0NvbnRlbnQ6IHN0cmluZyA9IGZzLnJlYWRGaWxlU3luYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4nLCAnLi4nLCAnY29uZmlnJywgJ2pzb24tY29uZmlnJywgJ3BnLmNvbmZpZy5qc29uJyksICd1dGYtOCcpO1xyXG4gICAgICAgIGxldCBjb25maWcgPSBKU09OLnBhcnNlKGNvbmZpZ0NvbnRlbnQpO1xyXG4gICAgICAgIHJldHVybiBjb25maWdbZW52XTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNodXREb3duKCkge1xyXG4gICAgICAgIHRoaXMuX3Bvb2wuZW5kKCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5sZXQgcGdDb25uZWN0ID0gbmV3IFBnQ29ubmVjdCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGdDb25uZWN0OyJdfQ==
