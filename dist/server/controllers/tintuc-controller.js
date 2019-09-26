"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var repositories_1 = require("../repositories");
var util_1 = require("../util");
var models_1 = require("../models");
var TinTucController = /** @class */ (function () {
    function TinTucController() {
        var _this = this;
        /**
         * @author Nhật Anh 17/04/2017
         *
         * api lấy 1 noi_dung
         *
         * GET api/noi_dung/getone/?noi_dung_id
         */
        this.getOne = function (req, res) {
            var id = req.query.user_id;
            console.log(id);
            if (!id) {
                res.status(400).json({
                    error: 'bị lỗi'
                });
                return;
            }
            var promiseResult = _this._tintucRepo.getOne(id)
                .then(function (result) {
                if (result.rowCount > 0) {
                    var noidung = result.rows.map(function (r) { return _this.rowMapper(r); })[0];
                    return { result: noidung };
                }
                else {
                    return {
                        status: 400,
                        error: {
                            error_type: util_1.VARIABLES.ErrorMessage.NO_DATA,
                            message: util_1.VARIABLES.ErrorMessage.NO_DATA_WITH_ID(id)
                        }
                    };
                }
            });
            util_1.ControllerUtil.resovleResponse(res, promiseResult);
        };
        /**
         * @author Nhật Anh 17/04/2017
         *
         * lấy 1 danh sách những phần tử dữ liệu đứng đầu
         *
         * GET api/noi_dung/gettop/top?standard=col_name+0&?offset=0
         * api/tin_tuc/gettop?standard=tin_tuc_id%2b1&offset=0
         */
        this.getTop = function (req, res) {
            var promiseResult = _this._tintucRepo.getTop()
                .then(function (result) {
                console.log(result);
                var noidungs = result.rows;
                // console.log(noidungs);
                return { result: noidungs };
            });
            util_1.ControllerUtil.resovleResponse(res, promiseResult);
        };
        this.save = function (req, res) {
            var promiseResult = _this._tintucRepo.insert(req.body)
                .then(function (result) {
                console.log(result);
            });
            util_1.ControllerUtil.resovleResponse(res, promiseResult);
        };
        /**
         * @author Nhật Anh 17/04/2017
         *
         * update dữ liệu dựa vào id
         * nhận vào 1 req.body có cấu trúc như entity
         *
         * POST /api/noi_dung/update
         */
        /**
         * @author Nhật Anh 17/04/2017
         *
         * xóa dữ liệu dựa theo id
         * truyền vào 1 hay nhiều id (number)
         *
         * POST /api/noi_dung/delete
         */
        this.delete = function (req, res) {
            if (!req.body.user_id) {
                res.status(400).json({
                    error: {
                        error_type: util_1.VARIABLES.ErrorMessage.MISSING_PARAM,
                        message: util_1.VARIABLES.ErrorMessage.NEED_COLUMN_IN(['user_id'], ['mảng int'], 'body')
                    }
                });
                return;
            }
            var promiseResult = _this._tintucRepo.delete(req.body.user_id)
                .then(function (result) {
                if (result.rowCount > 0) {
                    return { result: [], count: result.rowCount };
                }
                else {
                    return {
                        status: 400,
                        error: {
                            error_type: util_1.VARIABLES.ErrorMessage.NO_DATA,
                            message: util_1.VARIABLES.ErrorMessage.NO_DATA_WITH_ID(req.body.user_id) + ", kh\u00F4ng c\u00F3 g\u00EC \u0111\u1EC3 delete"
                        }
                    };
                }
            });
            util_1.ControllerUtil.resovleResponse(res, promiseResult);
        };
        /**
         * @author Nhật Anh 17/04/2017
         *
         *  api noi_dung/search
         * đưa vào page, per_page, và các cột zới giá trị cần tìm
         * nếu chỉ có page và per_page thì sẽ trả zề hết
         *
         *
         * POST /api/noi_dung/search
         */
        // search = (req: express.Request, res: express.Response): void => {
        //     let obj = req.body;
        //     let limit = obj.per_page || 10; //gioi han no la 10 trang
        //     let page = obj.page; //trang
        //     let order = obj.order || 'tin_tuc_id+0'; //phan can search
        //     let current_status = obj.current_status;
        //     let offset;
        //  if(!page || page === 1) {
        //         offset = 0;//neu chi co 1 trang  thi lay tu 0 , la lay het bat dau  0
        //     }
        // else{
        //         offset = limit * (page - 1);
        //         //neu lon hon 1 thi lay 10*(5-1) 40 co nghia la lay tu dong 40 chu khong phai lay tu d
        //     }
        //     delete obj.page;
        //     delete obj.per_page;
        //     delete obj.order;
        //     if (_.isEmpty(current_status)) {
        //         delete obj.current_status;
        //     }
        //     let promiseNumberOfRow = this._tintucRepo.count(obj);
        //     let promiseResult = this._tintucRepo.search(obj, order, limit, offset)
        //         .then(result => {
        //             let noidungs = result.rows.map(r => this.rowMapper(r));
        //             return noidungs;
        //         })
        //          .then(noidungs => {
        //             return promiseNumberOfRow.then(numberOfRow => {
        //                 return { result: noidungs, number_of_all_data: numberOfRow.rows[0] };
        //             })
        //          });
        //     ControllerUtil.resovleResponse(res, promiseResult);
        // }
        this.search = function (req, res) {
            var obj = req.body;
            var limit = obj.per_page || 2;
            var page = obj.page;
            var order = obj.order || 'user_id+0';
            var current_status = obj.current_status;
            var offset;
            if (!page || page === 1) {
                offset = 0;
            }
            else {
                offset = limit * (page - 1);
            }
            delete obj.page;
            delete obj.per_page;
            delete obj.order;
            if (_.isEmpty(current_status)) {
                delete obj.current_status;
            }
            // let promiseNumberOfRow = this._tintucRepo.count(obj);
            var promiseResult = _this._tintucRepo.search(obj, order, limit, offset)
                .then(function (result) {
                var noidungs = result.rows.map(function (r) { return _this.rowMapper(r); });
                return noidungs;
            });
            // .then(noidungs => {
            //     return promiseNumberOfRow.then(numberOfRow => {
            //         return { result: noidungs, number_of_all_data: numberOfRow.rows[0] };
            //     })
            // });
            util_1.ControllerUtil.resovleResponse(res, promiseResult);
        };
        /**
         * /api/noi_dung/seek?id=2&per_page=10&time='2017-02-01'&upperBound=true
         */
        /*
           public seek = (req: express.Request, res: express.Response): void => {
               let id = req.query.id || null;
               let per_page = req.query.per_page;
               let operator;
               if (req.query.upper_bound && req.query.upper_bound === 'true') {
                   operator = OperatorEnum.UPPERBOUND;
               } else {
                   operator = OperatorEnum.LOWERBOUND;
               }
       
       
               let promiseResult = this._tintucRepo.seek(per_page, operator, id)
                   .then(result => {
                       let noidungs = result.rows.map(r => this.rowMapper(r));
                       return { result: noidungs };
                   });
       
               ControllerUtil.resovleResponse(res, promiseResult);
           }
           */
        this.seek = function (req, res) {
            var promiseResult = _this._tintucRepo.insert(req.body)
                .then(function (result) {
                if (result.rowCount > 0) {
                    return { result: [], count: result.rowCount };
                }
                else {
                    return {
                        status: 400,
                        error: {
                            error_type: util_1.VARIABLES.ErrorMessage.NO_DATA,
                            message: util_1.VARIABLES.ErrorMessage.NO_DATA_WITH_ID(req.body.user_id) + ", kh\u00F4ng c\u00F3 g\u00EC \u0111\u1EC3 update"
                        }
                    };
                }
            });
            util_1.ControllerUtil.resovleResponse(res, promiseResult);
        };
        this._tintucRepo = new repositories_1.TinTucRepository();
    }
    /**
     * @author Nhật Anh 17/04/2017
     *
     * chuyển kết quả truy vấn thành Object
     *
     * @private
     * @param {any} queryResult kết quả truy vấn
     * @returns {tintuc}
     *
     */
    TinTucController.prototype.rowMapper = function (queryResult) {
        var tintuc = new models_1.TinTuc();
        tintuc.user_id = queryResult.user_id;
        tintuc.username = queryResult.username;
        tintuc.user_update = queryResult.user_update;
        return tintuc;
    };
    return TinTucController;
}());
exports.default = TinTucController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3RpbnR1Yy1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsMEJBQTRCO0FBRzVCLGdEQUFtRDtBQUNuRCxnQ0FBa0U7QUFDbEUsb0NBQW1DO0FBR25DO0lBRUk7UUFBQSxpQkFFQztRQUdEOzs7Ozs7V0FNRztRQUVILFdBQU0sR0FBRyxVQUFDLEdBQW9CLEVBQUUsR0FBcUI7WUFDakQsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUNmLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQ0wsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ2pCLEtBQUssRUFBRSxRQUFRO2lCQUNsQixDQUFDLENBQUM7Z0JBQ0gsT0FBTzthQUNWO1lBRUQsSUFBSSxhQUFhLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO2lCQUMxQyxJQUFJLENBQUMsVUFBQSxNQUFNO2dCQUNSLElBQUksTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUU7b0JBQ3JCLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDO2lCQUM5QjtxQkFBTTtvQkFDSCxPQUFPO3dCQUNILE1BQU0sRUFBRSxHQUFHO3dCQUNYLEtBQUssRUFBRTs0QkFDSCxVQUFVLEVBQUUsZ0JBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTzs0QkFDMUMsT0FBTyxFQUFFLGdCQUFTLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENB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YyxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFBO1FBM1BHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSwrQkFBZ0IsRUFBRSxDQUFDO0lBQzlDLENBQUM7SUE0UEQ7Ozs7Ozs7OztPQVNHO0lBQ0ssb0NBQVMsR0FBakIsVUFBa0IsV0FBVztRQUN6QixJQUFJLE1BQU0sR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQztRQUNyQyxNQUFNLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFDdkMsTUFBTSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDO1FBRTdDLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFTCx1QkFBQztBQUFELENBblJBLEFBbVJDLElBQUEiLCJmaWxlIjoiY29udHJvbGxlcnMvdGludHVjLWNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgKiBhcyBwZyBmcm9tICdwZyc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmltcG9ydCB7IElCYXNlQ29udHJvbGxlciB9IGZyb20gXCIuL2Jhc2UtY29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBUaW5UdWNSZXBvc2l0b3J5IH0gZnJvbSAnLi4vcmVwb3NpdG9yaWVzJztcclxuaW1wb3J0IHsgVkFSSUFCTEVTLCBDb250cm9sbGVyVXRpbCwgT3BlcmF0b3JFbnVtIH0gZnJvbSAnLi4vdXRpbCc7XHJcbmltcG9ydCB7IFRpblR1YyB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGluVHVjQ29udHJvbGxlciBpbXBsZW1lbnRzIElCYXNlQ29udHJvbGxlciB7XHJcbiAgICBwcml2YXRlIF90aW50dWNSZXBvOiBUaW5UdWNSZXBvc2l0b3J5O1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fdGludHVjUmVwbyA9IG5ldyBUaW5UdWNSZXBvc2l0b3J5KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGF1dGhvciBOaOG6rXQgQW5oIDE3LzA0LzIwMTdcclxuICAgICAqIFxyXG4gICAgICogYXBpIGzhuqV5IDEgbm9pX2R1bmdcclxuICAgICAqIFxyXG4gICAgICogR0VUIGFwaS9ub2lfZHVuZy9nZXRvbmUvP25vaV9kdW5nX2lkXHJcbiAgICAgKi9cclxuXHJcbiAgICBnZXRPbmUgPSAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGxldCBpZCA9IHJlcS5xdWVyeS51c2VyX2lkO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkKVxyXG4gICAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdi4buLIGzhu5dpJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHByb21pc2VSZXN1bHQgPSB0aGlzLl90aW50dWNSZXBvLmdldE9uZShpZClcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucm93Q291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vaWR1bmcgPSByZXN1bHQucm93cy5tYXAociA9PiB0aGlzLnJvd01hcHBlcihyKSlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgcmVzdWx0OiBub2lkdW5nIH07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogNDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfdHlwZTogVkFSSUFCTEVTLkVycm9yTWVzc2FnZS5OT19EQVRBLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogVkFSSUFCTEVTLkVycm9yTWVzc2FnZS5OT19EQVRBX1dJVEhfSUQoaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgQ29udHJvbGxlclV0aWwucmVzb3ZsZVJlc3BvbnNlKHJlcywgcHJvbWlzZVJlc3VsdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAYXV0aG9yIE5o4bqtdCBBbmggMTcvMDQvMjAxN1xyXG4gICAgICogXHJcbiAgICAgKiBs4bqleSAxIGRhbmggc8OhY2ggbmjhu69uZyBwaOG6p24gdOG7rSBk4buvIGxp4buHdSDEkeG7qW5nIMSR4bqndVxyXG4gICAgICogXHJcbiAgICAgKiBHRVQgYXBpL25vaV9kdW5nL2dldHRvcC90b3A/c3RhbmRhcmQ9Y29sX25hbWUrMCY/b2Zmc2V0PTBcclxuICAgICAqIGFwaS90aW5fdHVjL2dldHRvcD9zdGFuZGFyZD10aW5fdHVjX2lkJTJiMSZvZmZzZXQ9MFxyXG4gICAgICovXHJcblxyXG4gICAgZ2V0VG9wID0gKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkID0+IHtcclxuICAgICAgICBsZXQgcHJvbWlzZVJlc3VsdCA9IHRoaXMuX3RpbnR1Y1JlcG8uZ2V0VG9wKClcclxuXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vaWR1bmdzID0gcmVzdWx0LnJvd3M7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhub2lkdW5ncyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyByZXN1bHQ6IG5vaWR1bmdzIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBDb250cm9sbGVyVXRpbC5yZXNvdmxlUmVzcG9uc2UocmVzLCBwcm9taXNlUmVzdWx0KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2F2ZSA9IChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogdm9pZCA9PiB7XHJcbiAgICAgICAgbGV0IHByb21pc2VSZXN1bHQgPSB0aGlzLl90aW50dWNSZXBvLmluc2VydChyZXEuYm9keSlcclxuXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBDb250cm9sbGVyVXRpbC5yZXNvdmxlUmVzcG9uc2UocmVzLCBwcm9taXNlUmVzdWx0KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAYXV0aG9yIE5o4bqtdCBBbmggMTcvMDQvMjAxN1xyXG4gICAgICogXHJcbiAgICAgKiB1cGRhdGUgZOG7ryBsaeG7h3UgZOG7sWEgdsOgbyBpZFxyXG4gICAgICogbmjhuq1uIHbDoG8gMSByZXEuYm9keSBjw7MgY+G6pXUgdHLDumMgbmjGsCBlbnRpdHlcclxuICAgICAqIFxyXG4gICAgICogUE9TVCAvYXBpL25vaV9kdW5nL3VwZGF0ZVxyXG4gICAgICovXHJcblxyXG5cclxuXHJcbiAgICBcclxuXHJcbiAgICAvKiogXHJcbiAgICAgKiBAYXV0aG9yIE5o4bqtdCBBbmggMTcvMDQvMjAxN1xyXG4gICAgICogXHJcbiAgICAgKiB4w7NhIGThu68gbGnhu4d1IGThu7FhIHRoZW8gaWQgXHJcbiAgICAgKiB0cnV54buBbiB2w6BvIDEgaGF5IG5oaeG7gXUgaWQgKG51bWJlcilcclxuICAgICAqIFxyXG4gICAgICogUE9TVCAvYXBpL25vaV9kdW5nL2RlbGV0ZVxyXG4gICAgICovXHJcbiAgICBkZWxldGUgPSAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmICghcmVxLmJvZHkudXNlcl9pZCkge1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yX3R5cGU6IFZBUklBQkxFUy5FcnJvck1lc3NhZ2UuTUlTU0lOR19QQVJBTSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBWQVJJQUJMRVMuRXJyb3JNZXNzYWdlLk5FRURfQ09MVU1OX0lOKFsndXNlcl9pZCddLCBbJ23huqNuZyBpbnQnXSwgJ2JvZHknKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHByb21pc2VSZXN1bHQgPSB0aGlzLl90aW50dWNSZXBvLmRlbGV0ZShyZXEuYm9keS51c2VyX2lkKVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yb3dDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyByZXN1bHQ6IFtdLCBjb3VudDogcmVzdWx0LnJvd0NvdW50IH07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogNDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfdHlwZTogVkFSSUFCTEVTLkVycm9yTWVzc2FnZS5OT19EQVRBLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYCR7VkFSSUFCTEVTLkVycm9yTWVzc2FnZS5OT19EQVRBX1dJVEhfSUQocmVxLmJvZHkudXNlcl9pZCl9LCBraMO0bmcgY8OzIGfDrCDEkeG7gyBkZWxldGVgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICBDb250cm9sbGVyVXRpbC5yZXNvdmxlUmVzcG9uc2UocmVzLCBwcm9taXNlUmVzdWx0KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAYXV0aG9yIE5o4bqtdCBBbmggMTcvMDQvMjAxN1xyXG4gICAgICogXHJcbiAgICAgKiAgYXBpIG5vaV9kdW5nL3NlYXJjaFxyXG4gICAgICogxJHGsGEgdsOgbyBwYWdlLCBwZXJfcGFnZSwgdsOgIGPDoWMgY+G7mXQgeuG7m2kgZ2nDoSB0cuG7iyBj4bqnbiB0w6xtXHJcbiAgICAgKiBu4bq/dSBjaOG7iSBjw7MgcGFnZSB2w6AgcGVyX3BhZ2UgdGjDrCBz4bq9IHRy4bqjIHrhu4EgaOG6v3RcclxuICAgICAqIFxyXG4gICAgICogXHJcbiAgICAgKiBQT1NUIC9hcGkvbm9pX2R1bmcvc2VhcmNoXHJcbiAgICAgKi9cclxuICAgIC8vIHNlYXJjaCA9IChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogdm9pZCA9PiB7XHJcbiAgICAvLyAgICAgbGV0IG9iaiA9IHJlcS5ib2R5O1xyXG4gICAgLy8gICAgIGxldCBsaW1pdCA9IG9iai5wZXJfcGFnZSB8fCAxMDsgLy9naW9pIGhhbiBubyBsYSAxMCB0cmFuZ1xyXG4gICAgLy8gICAgIGxldCBwYWdlID0gb2JqLnBhZ2U7IC8vdHJhbmdcclxuICAgIC8vICAgICBsZXQgb3JkZXIgPSBvYmoub3JkZXIgfHwgJ3Rpbl90dWNfaWQrMCc7IC8vcGhhbiBjYW4gc2VhcmNoXHJcbiAgICAvLyAgICAgbGV0IGN1cnJlbnRfc3RhdHVzID0gb2JqLmN1cnJlbnRfc3RhdHVzO1xyXG4gICAgLy8gICAgIGxldCBvZmZzZXQ7XHJcbiAgICAvLyAgaWYoIXBhZ2UgfHwgcGFnZSA9PT0gMSkge1xyXG4gICAgLy8gICAgICAgICBvZmZzZXQgPSAwOy8vbmV1IGNoaSBjbyAxIHRyYW5nICB0aGkgbGF5IHR1IDAgLCBsYSBsYXkgaGV0IGJhdCBkYXUgIDBcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyBlbHNle1xyXG4gICAgLy8gICAgICAgICBvZmZzZXQgPSBsaW1pdCAqIChwYWdlIC0gMSk7XHJcbiAgICAvLyAgICAgICAgIC8vbmV1IGxvbiBob24gMSB0aGkgbGF5IDEwKig1LTEpIDQwIGNvIG5naGlhIGxhIGxheSB0dSBkb25nIDQwIGNodSBraG9uZyBwaGFpIGxheSB0dSBkXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGRlbGV0ZSBvYmoucGFnZTtcclxuICAgIC8vICAgICBkZWxldGUgb2JqLnBlcl9wYWdlO1xyXG4gICAgLy8gICAgIGRlbGV0ZSBvYmoub3JkZXI7XHJcbiAgICAvLyAgICAgaWYgKF8uaXNFbXB0eShjdXJyZW50X3N0YXR1cykpIHtcclxuICAgIC8vICAgICAgICAgZGVsZXRlIG9iai5jdXJyZW50X3N0YXR1cztcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIGxldCBwcm9taXNlTnVtYmVyT2ZSb3cgPSB0aGlzLl90aW50dWNSZXBvLmNvdW50KG9iaik7XHJcbiAgICAvLyAgICAgbGV0IHByb21pc2VSZXN1bHQgPSB0aGlzLl90aW50dWNSZXBvLnNlYXJjaChvYmosIG9yZGVyLCBsaW1pdCwgb2Zmc2V0KVxyXG4gICAgLy8gICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgbGV0IG5vaWR1bmdzID0gcmVzdWx0LnJvd3MubWFwKHIgPT4gdGhpcy5yb3dNYXBwZXIocikpO1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIG5vaWR1bmdzO1xyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICAgLnRoZW4obm9pZHVuZ3MgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIHByb21pc2VOdW1iZXJPZlJvdy50aGVuKG51bWJlck9mUm93ID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4geyByZXN1bHQ6IG5vaWR1bmdzLCBudW1iZXJfb2ZfYWxsX2RhdGE6IG51bWJlck9mUm93LnJvd3NbMF0gfTtcclxuICAgIC8vICAgICAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgICB9KTtcclxuXHJcbiAgICAvLyAgICAgQ29udHJvbGxlclV0aWwucmVzb3ZsZVJlc3BvbnNlKHJlcywgcHJvbWlzZVJlc3VsdCk7XHJcbiAgICAvLyB9XHJcbiAgICBzZWFyY2ggPSAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGxldCBvYmogPSByZXEuYm9keTtcclxuICAgICAgICBsZXQgbGltaXQgPSBvYmoucGVyX3BhZ2UgfHwgMjtcclxuICAgICAgICBsZXQgcGFnZSA9IG9iai5wYWdlO1xyXG4gICAgICAgIGxldCBvcmRlciA9IG9iai5vcmRlciB8fCAndXNlcl9pZCswJztcclxuICAgICAgICBsZXQgY3VycmVudF9zdGF0dXMgPSBvYmouY3VycmVudF9zdGF0dXM7XHJcbiAgICAgICAgbGV0IG9mZnNldDtcclxuICAgICAgICBpZiAoIXBhZ2UgfHwgcGFnZSA9PT0gMSkge1xyXG4gICAgICAgICAgICBvZmZzZXQgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9mZnNldCA9IGxpbWl0ICogKHBhZ2UgLSAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsZXRlIG9iai5wYWdlO1xyXG4gICAgICAgIGRlbGV0ZSBvYmoucGVyX3BhZ2U7XHJcbiAgICAgICAgZGVsZXRlIG9iai5vcmRlcjtcclxuICAgICAgICBpZiAoXy5pc0VtcHR5KGN1cnJlbnRfc3RhdHVzKSkge1xyXG4gICAgICAgICAgICBkZWxldGUgb2JqLmN1cnJlbnRfc3RhdHVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbGV0IHByb21pc2VOdW1iZXJPZlJvdyA9IHRoaXMuX3RpbnR1Y1JlcG8uY291bnQob2JqKTtcclxuICAgICAgICBsZXQgcHJvbWlzZVJlc3VsdCA9IHRoaXMuX3RpbnR1Y1JlcG8uc2VhcmNoKG9iaiwgb3JkZXIsIGxpbWl0LCBvZmZzZXQpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9pZHVuZ3MgPSByZXN1bHQucm93cy5tYXAociA9PiB0aGlzLnJvd01hcHBlcihyKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9pZHVuZ3M7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgLy8gLnRoZW4obm9pZHVuZ3MgPT4ge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gcHJvbWlzZU51bWJlck9mUm93LnRoZW4obnVtYmVyT2ZSb3cgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHsgcmVzdWx0OiBub2lkdW5ncywgbnVtYmVyX29mX2FsbF9kYXRhOiBudW1iZXJPZlJvdy5yb3dzWzBdIH07XHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIENvbnRyb2xsZXJVdGlsLnJlc292bGVSZXNwb25zZShyZXMsIHByb21pc2VSZXN1bHQpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIC9hcGkvbm9pX2R1bmcvc2Vlaz9pZD0yJnBlcl9wYWdlPTEwJnRpbWU9JzIwMTctMDItMDEnJnVwcGVyQm91bmQ9dHJ1ZVxyXG4gICAgICovXHJcblxyXG5cclxuXHJcbiAgICAvKiAgICBcclxuICAgICAgIHB1YmxpYyBzZWVrID0gKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkID0+IHtcclxuICAgICAgICAgICBsZXQgaWQgPSByZXEucXVlcnkuaWQgfHwgbnVsbDtcclxuICAgICAgICAgICBsZXQgcGVyX3BhZ2UgPSByZXEucXVlcnkucGVyX3BhZ2U7XHJcbiAgICAgICAgICAgbGV0IG9wZXJhdG9yO1xyXG4gICAgICAgICAgIGlmIChyZXEucXVlcnkudXBwZXJfYm91bmQgJiYgcmVxLnF1ZXJ5LnVwcGVyX2JvdW5kID09PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgICAgb3BlcmF0b3IgPSBPcGVyYXRvckVudW0uVVBQRVJCT1VORDtcclxuICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICBvcGVyYXRvciA9IE9wZXJhdG9yRW51bS5MT1dFUkJPVU5EO1xyXG4gICAgICAgICAgIH1cclxuICAgXHJcbiAgIFxyXG4gICAgICAgICAgIGxldCBwcm9taXNlUmVzdWx0ID0gdGhpcy5fdGludHVjUmVwby5zZWVrKHBlcl9wYWdlLCBvcGVyYXRvciwgaWQpXHJcbiAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICBsZXQgbm9pZHVuZ3MgPSByZXN1bHQucm93cy5tYXAociA9PiB0aGlzLnJvd01hcHBlcihyKSk7XHJcbiAgICAgICAgICAgICAgICAgICByZXR1cm4geyByZXN1bHQ6IG5vaWR1bmdzIH07XHJcbiAgICAgICAgICAgICAgIH0pO1xyXG4gICBcclxuICAgICAgICAgICBDb250cm9sbGVyVXRpbC5yZXNvdmxlUmVzcG9uc2UocmVzLCBwcm9taXNlUmVzdWx0KTtcclxuICAgICAgIH1cclxuICAgICAgICovXHJcblxyXG4gICAgc2VlayA9IChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogdm9pZCA9PiB7XHJcbiAgICAgICAgbGV0IHByb21pc2VSZXN1bHQgPSB0aGlzLl90aW50dWNSZXBvLmluc2VydChyZXEuYm9keSlcclxuICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnJvd0NvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgcmVzdWx0OiBbXSwgY291bnQ6IHJlc3VsdC5yb3dDb3VudCB9O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDQwMCxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl90eXBlOiBWQVJJQUJMRVMuRXJyb3JNZXNzYWdlLk5PX0RBVEEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGAke1ZBUklBQkxFUy5FcnJvck1lc3NhZ2UuTk9fREFUQV9XSVRIX0lEKHJlcS5ib2R5LnVzZXJfaWQpfSwga2jDtG5nIGPDsyBnw6wgxJHhu4MgdXBkYXRlYFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIENvbnRyb2xsZXJVdGlsLnJlc292bGVSZXNwb25zZShyZXMsIHByb21pc2VSZXN1bHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGF1dGhvciBOaOG6rXQgQW5oIDE3LzA0LzIwMTdcclxuICAgICAqIFxyXG4gICAgICogY2h1eeG7g24ga+G6v3QgcXXhuqMgdHJ1eSB24bqlbiB0aMOgbmggT2JqZWN0XHJcbiAgICAgKiBcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcGFyYW0ge2FueX0gcXVlcnlSZXN1bHQga+G6v3QgcXXhuqMgdHJ1eSB24bqlblxyXG4gICAgICogQHJldHVybnMge3RpbnR1Y30gXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByb3dNYXBwZXIocXVlcnlSZXN1bHQpOiBUaW5UdWMge1xyXG4gICAgICAgIGxldCB0aW50dWMgPSBuZXcgVGluVHVjKCk7XHJcbiAgICAgICAgdGludHVjLnVzZXJfaWQgPSBxdWVyeVJlc3VsdC51c2VyX2lkO1xyXG4gICAgICAgIHRpbnR1Yy51c2VybmFtZSA9IHF1ZXJ5UmVzdWx0LnVzZXJuYW1lO1xyXG4gICAgICAgIHRpbnR1Yy51c2VyX3VwZGF0ZSA9IHF1ZXJ5UmVzdWx0LnVzZXJfdXBkYXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGludHVjO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
