"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
/**
 * author đức 28/1/2017
 * lớp hỗ trợ cho các lớp repo
 */
var RepoUtil = /** @class */ (function () {
    function RepoUtil() {
    }
    /**
     * @author đức 28/1/2017
     *
     * tạo truy vấn Where
     *
     * @static
     * @param {any} object chứa các cột và giá trị muốn có trong where
     * @returns {{ query: string, params: Array<any> }}
     * @throws {Error} nếu object rỗng
     *
     * @memberOf RepoUtil
     */
    RepoUtil.buildWhereQuery = function (object) {
        if (_.isEmpty(object)) {
            return { query: '', params: [] };
        }
        var query = 'WHERE ';
        var subQuery = {};
        var params = [];
        for (var prop in object) {
            var template = this.mapTypeToCompareOperator(prop, object[prop]);
            subQuery[prop] = template;
            if (template.indexOf('like') !== -1) {
                params.push('%' + object[prop] + '%');
            }
            else {
                params.push(object[prop]);
            }
        }
        /**
         * co the overide template mặc định
         * vd: subQuery['tag_int'] = `tag_int in [$$]`;
         */
        if (subQuery['current_status']) {
            subQuery['current_status'] = "current_status = any($$::text[])";
        }
        query += Object.keys(subQuery).map(function (key) { return subQuery[key]; }).join(' and ');
        query = this.reFormatQuery(query);
        return { query: query, params: params };
    };
    /**
     * @author đức 28/1/2017
     *
     * tạo truy vấn SET
     *
     * @static
     * @param {any} object chứa các cột vá giá trị muốn có trong SET
     * @param {Array<string>} excludes chứa tên các cột ko muốn có trong SET
     * @returns {{ query: string, params: Array<any> }}
     * @throws {Error} nếu object rỗng
     *
     * @memberOf RepoUtil
     */
    RepoUtil.buildSetQuery = function (object, excludes) {
        if (Object.keys(object).length === 0 && object.constructor === Object) {
            throw new Error('object đưa vào không được rỗng ');
        }
        var set = { query: 'SET ', params: [] };
        var temp = [];
        var count = 1;
        for (var prop in object) {
            if (excludes.indexOf(prop) === -1) {
                temp.push(prop + " = $" + count);
                set.params.push(object[prop]);
                count++;
            }
        }
        set.query += temp.join(',');
        return set;
    };
    /**
     * @author đức 28/1/2017
     *
     * tạo câu truy vấn ORDER BY
     *
     * @static
     * @param {string} standard theo format ten_cot+0(hoặc 1)[,ten_cot+0(hoặc 1)...]
     * @returns {string}
     * @throws {Error} nếu standard không đúng format
     *
     * @memberOf RepoUtil
     */
    RepoUtil.convertQueryForOrderBy = function (standard) {
        if (standard.length < 0 || !(new RegExp(/^(\w+\+[0||1])(,\w+\+[0||1])*$/g).test(standard))) {
            throw new Error("standard kh\u00F4ng \u0111\u00FAng format, nh\u1EADn \u0111\u01B0\u1EE3c: '" + standard + "', nh\u01B0ng ph\u1EA3i l\u00E0 'ten_cot+0(ho\u1EB7c 1)[,ten_cot+1,...]'");
        }
        var result = standard.split(',')
            .filter(function (s) { return s.length > 0; })
            .map(function (s1) { return s1.split('+'); })
            .map(function (s2) { return s2[0] + ' ' + (s2[1] === '0' ? 'ASC' : 'DESC'); })
            .join(',');
        return 'ORDER BY ' + result;
    };
    /**
     * @author đức 28/1/2017
     *
     * hỗ trợ hàm WHERE
     *
     * @private
     * @static
     * @param {any} query câu truy vấn
     * @returns {string}
     *
     * @memberOf RepoUtil
     */
    RepoUtil.reFormatQuery = function (query) {
        var count = 1;
        while (query.indexOf('$$') !== -1) {
            query = query.replace('$$', "$" + count);
            count++;
        }
        return query;
    };
    /**
     * @author đức 28/1/2017
     *
     * hỗ trợ hàm WHERE
     *
     * @private
     * @static
     * @param {any} col_name tên cột
     * @param {any} value giá trị
     * @returns {string} template so sánh
     *
     * @memberOf RepoUtil
     */
    RepoUtil.mapTypeToCompareOperator = function (col_name, value) {
        var templateOperator = col_name + " = $$";
        if (typeof value === 'string') {
            templateOperator = col_name + "::text ilike $$";
        }
        if (Array.isArray(value)) {
            templateOperator = "$$ && " + col_name;
        }
        return templateOperator;
    };
    return RepoUtil;
}());
exports.RepoUtil = RepoUtil;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9zaXRvcmllcy91dGlsL3JlcG8tdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBCQUE0QjtBQUU1Qjs7O0dBR0c7QUFDSDtJQUFBO0lBdUpBLENBQUM7SUFwSkc7Ozs7Ozs7Ozs7O09BV0c7SUFDVyx3QkFBZSxHQUE3QixVQUE4QixNQUFNO1FBQ2hDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNuQixPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUM7U0FDcEM7UUFDRCxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDckIsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixLQUFLLElBQUksSUFBSSxJQUFJLE1BQU0sRUFBRTtZQUNyQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUM7WUFDMUIsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7YUFDekM7aUJBQU07Z0JBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUM3QjtTQUVKO1FBRUQ7OztXQUdHO1FBQ0gsSUFBSSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUM1QixRQUFRLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxrQ0FBa0MsQ0FBQztTQUNuRTtRQUVELEtBQUssSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEs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QUNYO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUdEOzs7Ozs7Ozs7Ozs7T0FZRztJQUNZLGlDQUF3QixHQUF2QyxVQUF3QyxRQUFRLEVBQUUsS0FBSztRQUNuRCxJQUFJLGdCQUFnQixHQUFNLFFBQVEsVUFBTyxDQUFDO1FBQzFDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzNCLGdCQUFnQixHQUFNLFFBQVEsb0JBQWlCLENBQUM7U0FDbkQ7UUFDRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdEIsZ0JBQWdCLEdBQUcsV0FBUyxRQUFVLENBQUM7U0FDMUM7UUFDRCxPQUFPLGdCQUFnQixDQUFDO0lBQzVCLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0F2SkEsQUF1SkMsSUFBQTtBQXZKWSw0QkFBUSIsImZpbGUiOiJyZXBvc2l0b3JpZXMvdXRpbC9yZXBvLXV0aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG4vKipcclxuICogYXV0aG9yIMSR4bupYyAyOC8xLzIwMTdcclxuICogbOG7m3AgaOG7lyB0cuG7oyBjaG8gY8OhYyBs4bubcCByZXBvXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUmVwb1V0aWwge1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBhdXRob3IgxJHhu6ljIDI4LzEvMjAxN1xyXG4gICAgICogXHJcbiAgICAgKiB04bqhbyB0cnV5IHbhuqVuIFdoZXJlXHJcbiAgICAgKiBcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSB7YW55fSBvYmplY3QgY2jhu6lhIGPDoWMgY+G7mXQgdsOgIGdpw6EgdHLhu4sgbXXhu5FuIGPDsyB0cm9uZyB3aGVyZVxyXG4gICAgICogQHJldHVybnMge3sgcXVlcnk6IHN0cmluZywgcGFyYW1zOiBBcnJheTxhbnk+IH19XHJcbiAgICAgKiBAdGhyb3dzIHtFcnJvcn0gbuG6v3Ugb2JqZWN0IHLhu5duZ1xyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyT2YgUmVwb1V0aWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBidWlsZFdoZXJlUXVlcnkob2JqZWN0KTogeyBxdWVyeTogc3RyaW5nLCBwYXJhbXM6IEFycmF5PGFueT4gfSB7XHJcbiAgICAgICAgaWYgKF8uaXNFbXB0eShvYmplY3QpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHF1ZXJ5OiAnJywgcGFyYW1zOiBbXSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcXVlcnkgPSAnV0hFUkUgJztcclxuICAgICAgICBsZXQgc3ViUXVlcnkgPSB7fTtcclxuICAgICAgICBsZXQgcGFyYW1zID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBvYmplY3QpIHtcclxuICAgICAgICAgICAgbGV0IHRlbXBsYXRlID0gdGhpcy5tYXBUeXBlVG9Db21wYXJlT3BlcmF0b3IocHJvcCwgb2JqZWN0W3Byb3BdKTtcclxuICAgICAgICAgICAgc3ViUXVlcnlbcHJvcF0gPSB0ZW1wbGF0ZTtcclxuICAgICAgICAgICAgaWYgKHRlbXBsYXRlLmluZGV4T2YoJ2xpa2UnKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5wdXNoKCclJyArIG9iamVjdFtwcm9wXSArICclJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMucHVzaChvYmplY3RbcHJvcF0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogY28gdGhlIG92ZXJpZGUgdGVtcGxhdGUgbeG6t2MgxJHhu4tuaFxyXG4gICAgICAgICAqIHZkOiBzdWJRdWVyeVsndGFnX2ludCddID0gYHRhZ19pbnQgaW4gWyQkXWA7XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYgKHN1YlF1ZXJ5WydjdXJyZW50X3N0YXR1cyddKSB7XHJcbiAgICAgICAgICAgIHN1YlF1ZXJ5WydjdXJyZW50X3N0YXR1cyddID0gYGN1cnJlbnRfc3RhdHVzID0gYW55KCQkOjp0ZXh0W10pYDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHF1ZXJ5ICs9IE9iamVjdC5rZXlzKHN1YlF1ZXJ5KS5tYXAoa2V5ID0+IHN1YlF1ZXJ5W2tleV0pLmpvaW4oJyBhbmQgJyk7XHJcbiAgICAgICAgcXVlcnkgPSB0aGlzLnJlRm9ybWF0UXVlcnkocXVlcnkpO1xyXG5cclxuICAgICAgICByZXR1cm4geyBxdWVyeTogcXVlcnksIHBhcmFtczogcGFyYW1zIH07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGF1dGhvciDEkeG7qWMgMjgvMS8yMDE3XHJcbiAgICAgKiBcclxuICAgICAqIHThuqFvIHRydXkgduG6pW4gU0VUXHJcbiAgICAgKiBcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSB7YW55fSBvYmplY3QgY2jhu6lhIGPDoWMgY+G7mXQgdsOhIGdpw6EgdHLhu4sgbXXhu5FuIGPDsyB0cm9uZyBTRVRcclxuICAgICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gZXhjbHVkZXMgY2jhu6lhIHTDqm4gY8OhYyBj4buZdCBrbyBtdeG7kW4gY8OzIHRyb25nIFNFVFxyXG4gICAgICogQHJldHVybnMge3sgcXVlcnk6IHN0cmluZywgcGFyYW1zOiBBcnJheTxhbnk+IH19XHJcbiAgICAgKiBAdGhyb3dzIHtFcnJvcn0gbuG6v3Ugb2JqZWN0IHLhu5duZ1xyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyT2YgUmVwb1V0aWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBidWlsZFNldFF1ZXJ5KG9iamVjdCwgZXhjbHVkZXM6IEFycmF5PHN0cmluZz4pOiB7IHF1ZXJ5OiBzdHJpbmcsIHBhcmFtczogQXJyYXk8YW55PiB9IHtcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMob2JqZWN0KS5sZW5ndGggPT09IDAgJiYgb2JqZWN0LmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdvYmplY3QgxJHGsGEgdsOgbyBraMO0bmcgxJHGsOG7o2MgcuG7l25nICcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2V0ID0geyBxdWVyeTogJ1NFVCAnLCBwYXJhbXM6IFtdIH07XHJcbiAgICAgICAgbGV0IHRlbXAgPSBbXTtcclxuICAgICAgICBsZXQgY291bnQgPSAxO1xyXG4gICAgICAgIGZvciAobGV0IHByb3AgaW4gb2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChleGNsdWRlcy5pbmRleE9mKHByb3ApID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGVtcC5wdXNoKGAke3Byb3B9ID0gJCR7Y291bnR9YCk7XHJcbiAgICAgICAgICAgICAgICBzZXQucGFyYW1zLnB1c2gob2JqZWN0W3Byb3BdKTtcclxuICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldC5xdWVyeSArPSB0ZW1wLmpvaW4oJywnKTtcclxuICAgICAgICByZXR1cm4gc2V0O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBhdXRob3IgxJHhu6ljIDI4LzEvMjAxN1xyXG4gICAgICogXHJcbiAgICAgKiB04bqhbyBjw6J1IHRydXkgduG6pW4gT1JERVIgQllcclxuICAgICAqIFxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0YW5kYXJkIHRoZW8gZm9ybWF0IHRlbl9jb3QrMChob+G6t2MgMSlbLHRlbl9jb3QrMChob+G6t2MgMSkuLi5dXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAgICogQHRocm93cyB7RXJyb3J9IG7hur91IHN0YW5kYXJkIGtow7RuZyDEkcO6bmcgZm9ybWF0XHJcbiAgICAgKiBcclxuICAgICAqIEBtZW1iZXJPZiBSZXBvVXRpbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRRdWVyeUZvck9yZGVyQnkoc3RhbmRhcmQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHN0YW5kYXJkLmxlbmd0aCA8IDAgfHwgIShuZXcgUmVnRXhwKC9eKFxcdytcXCtbMHx8MV0pKCxcXHcrXFwrWzB8fDFdKSokL2cpLnRlc3Qoc3RhbmRhcmQpKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHN0YW5kYXJkIGtow7RuZyDEkcO6bmcgZm9ybWF0LCBuaOG6rW4gxJHGsOG7o2M6ICcke3N0YW5kYXJkfScsIG5oxrBuZyBwaOG6o2kgbMOgICd0ZW5fY290KzAoaG/hurdjIDEpWyx0ZW5fY290KzEsLi4uXSdgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHN0YW5kYXJkLnNwbGl0KCcsJylcclxuICAgICAgICAgICAgLmZpbHRlcihzID0+IHMubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgLm1hcChzMSA9PiBzMS5zcGxpdCgnKycpKVxyXG4gICAgICAgICAgICAubWFwKHMyID0+IHMyWzBdICsgJyAnICsgKHMyWzFdID09PSAnMCcgPyAnQVNDJyA6ICdERVNDJykpXHJcbiAgICAgICAgICAgIC5qb2luKCcsJyk7XHJcbiAgICAgICAgcmV0dXJuICdPUkRFUiBCWSAnICsgcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBhdXRob3IgxJHhu6ljIDI4LzEvMjAxN1xyXG4gICAgICogXHJcbiAgICAgKiBo4buXIHRy4bujIGjDoG0gV0hFUkVcclxuICAgICAqIFxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSB7YW55fSBxdWVyeSBjw6J1IHRydXkgduG6pW5cclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICAgKiBcclxuICAgICAqIEBtZW1iZXJPZiBSZXBvVXRpbFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZUZvcm1hdFF1ZXJ5KHF1ZXJ5KTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgY291bnQgPSAxO1xyXG4gICAgICAgIHdoaWxlIChxdWVyeS5pbmRleE9mKCckJCcpICE9PSAtMSkge1xyXG4gICAgICAgICAgICBxdWVyeSA9IHF1ZXJ5LnJlcGxhY2UoJyQkJywgYCQke2NvdW50fWApO1xyXG4gICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcXVlcnk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGF1dGhvciDEkeG7qWMgMjgvMS8yMDE3XHJcbiAgICAgKiBcclxuICAgICAqIGjhu5cgdHLhu6MgaMOgbSBXSEVSRVxyXG4gICAgICogXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIHthbnl9IGNvbF9uYW1lIHTDqm4gY+G7mXRcclxuICAgICAqIEBwYXJhbSB7YW55fSB2YWx1ZSBnacOhIHRy4buLXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0ZW1wbGF0ZSBzbyBzw6FuaFxyXG4gICAgICogXHJcbiAgICAgKiBAbWVtYmVyT2YgUmVwb1V0aWxcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbWFwVHlwZVRvQ29tcGFyZU9wZXJhdG9yKGNvbF9uYW1lLCB2YWx1ZSk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHRlbXBsYXRlT3BlcmF0b3IgPSBgJHtjb2xfbmFtZX0gPSAkJGA7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgdGVtcGxhdGVPcGVyYXRvciA9IGAke2NvbF9uYW1lfTo6dGV4dCBpbGlrZSAkJGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZU9wZXJhdG9yID0gYCQkICYmICR7Y29sX25hbWV9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlT3BlcmF0b3I7XHJcbiAgICB9XHJcbn0iXX0=
