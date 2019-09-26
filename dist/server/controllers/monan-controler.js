"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../util");
var repositories_1 = require("../repositories");
var MonAnController = /** @class */ (function () {
    function MonAnController() {
        var _this = this;
        this.getOne = function (req, res) {
            var id = req.query.id_mon_an; ///body dung cho post
            console.log(id);
            if (!id) {
                res.status(400).json({
                    error: 'bị lỗi'
                });
                return;
            }
            var promiseResult = _this._monanRepo.getOne(id)
                .then(function (result) {
                if (result.rowCount > 0) {
                    var noidung = result.rows;
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
        this.seek = function (req, res) {
            var id = req.query.id; ///body dung cho post
            console.log(id);
            if (!id) {
                res.status(400).json({
                    error: 'bị lỗi'
                });
                return;
            }
            var promiseResult = _this._monanRepo.getOne(id)
                .then(function (result) {
                console.log(res);
                if (result.rowCount > 0) {
                    var noidung = result.rows;
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
        this.search = function (req, res) {
            // let id = req.body.user_id; //lay tu khach hang
            // let username = req.body.username;// lay tu khach hang
            // if (!req.body.tin_tuc_id || !req.body.user_update) {
            //     res.status(400).json({
            //         error: {
            //             error_type: VARIABLES.ErrorMessage.MISSING_PARAM,
            //             message: VARIABLES.ErrorMessage.NEED_COLUMN_IN(['user_id', 'noi_dung'], ['int', 'string'], 'body')
            //         }
            //     });
            //     return;
            // }
            var promiseResult = _this._monanRepo.search(req.body.ten_mon_an_khong_dau)
                .then(function (result) {
                if (result.rowCount > 0) {
                    var noidung = result.rows;
                    return { result: noidung };
                }
                else {
                    return {
                        status: 400,
                        error: {
                            error_type: util_1.VARIABLES.ErrorMessage.NO_DATA,
                            message: util_1.VARIABLES.ErrorMessage.NO_DATA_WITH_ID(req.body.noi_dung_id) + ", kh\u00F4ng c\u00F3 g\u00EC \u0111\u1EC3 update"
                        }
                    };
                }
            });
            util_1.ControllerUtil.resovleResponse(res, promiseResult);
        };
        this.getTop = function (req, res) {
            var id = req.query.id; ///body dung cho post
            console.log(id);
            if (!id) {
                res.status(400).json({
                    error: 'bị lỗi'
                });
                return;
            }
            var promiseResult = _this._monanRepo.getTop(id)
                .then(function (result) {
                if (result.rowCount > 0) {
                    var noidung = result.rows;
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
        //     /**
        //      * @author Nhật Anh 17/04/2017
        //      * 
        //      * api lấy 1 noi_dung
        //      * 
        //      * GET api/noi_dung/getone/?noi_dung_id
        //      */
        //     getOne = (req: express.Request, res: express.Response): void => {
        //         let id = req.query.user_id;
        //         console.log(id)
        //         if (!id) {
        //             res.status(400).json({
        //                 error: 'bị lỗi'
        //             });
        //             return;
        //         }
        //         let promiseResult = this._tintucRepo.getOne(id)
        //             .then(result => {
        //                 if (result.rowCount > 0) {
        //                     let noidung = result.rows.map(r => this.rowMapper(r))[0];
        //                     return { result: noidung };
        //                 } else {
        //                     return {
        //                         status: 400,
        //                         error: {
        //                             error_type: VARIABLES.ErrorMessage.NO_DATA,
        //                             message: VARIABLES.ErrorMessage.NO_DATA_WITH_ID(id)
        //                         }
        //                     }
        //                 }
        //             });
        //         ControllerUtil.resovleResponse(res, promiseResult);
        //     }
        //     /**
        //      * @author Nhật Anh 17/04/2017
        //      * 
        //      * lấy 1 danh sách những phần tử dữ liệu đứng đầu
        //      * 
        //      * GET api/noi_dung/gettop/top?standard=col_name+0&?offset=0
        //      * api/tin_tuc/gettop?standard=tin_tuc_id%2b1&offset=0
        //      */
        //     getTop = (req: express.Request, res: express.Response): void => {
        //         let promiseResult = this._tintucRepo.getTop()
        //             .then(result => {
        //                 console.log(result);
        //                 let noidungs = result.rows;
        //                 // console.log(noidungs);
        //                 return { result: noidungs };
        //             });
        //         ControllerUtil.resovleResponse(res, promiseResult);
        //     }
        //     save = (req: express.Request, res: express.Response): void => {
        //         let promiseResult = this._tintucRepo.insert(req.body)
        //             .then(result => {
        //                 console.log(result);
        //             });
        //         ControllerUtil.resovleResponse(res, promiseResult);
        //     }
        //     /**
        //      * @author Nhật Anh 17/04/2017
        //      * 
        //      * update dữ liệu dựa vào id
        //      * nhận vào 1 req.body có cấu trúc như entity
        //      * 
        //      * POST /api/noi_dung/update
        //      */
        //     update = (req: express.Request, res: express.Response): void => {
        //         // let id = req.body.user_id; //lay tu khach hang
        //         // let username = req.body.username;// lay tu khach hang
        //         // if (!req.body.tin_tuc_id || !req.body.user_update) {
        //         //     res.status(400).json({
        //         //         error: {
        //         //             error_type: VARIABLES.ErrorMessage.MISSING_PARAM,
        //         //             message: VARIABLES.ErrorMessage.NEED_COLUMN_IN(['user_id', 'noi_dung'], ['int', 'string'], 'body')
        //         //         }
        //         //     });
        //         //     return;
        //         // }
        //         let promiseResult = this._tintucRepo.update(req.body)
        //             .then(result => {
        //                 if (result.rowCount > 0) {
        //                     return { result: [], count: result.rowCount };
        //                 } else {
        //                     return {
        //                         status: 400,
        //                         error: {
        //                             error_type: VARIABLES.ErrorMessage.NO_DATA,
        //                             message: `${VARIABLES.ErrorMessage.NO_DATA_WITH_ID(req.body.noi_dung_id)}, không có gì để update`
        //                         }
        //                     }
        //                 }
        //             });
        //         ControllerUtil.resovleResponse(res, promiseResult);
        //     }
        //     /** 
        //      * @author Nhật Anh 17/04/2017
        //      * 
        //      * xóa dữ liệu dựa theo id 
        //      * truyền vào 1 hay nhiều id (number)
        //      * 
        //      * POST /api/noi_dung/delete
        //      */
        //     delete = (req: express.Request, res: express.Response): void => {
        //         if (!req.body.user_id) {
        //             res.status(400).json({
        //                 error: {
        //                     error_type: VARIABLES.ErrorMessage.MISSING_PARAM,
        //                     message: VARIABLES.ErrorMessage.NEED_COLUMN_IN(['user_id'], ['mảng int'], 'body')
        //                 }
        //             });
        //             return;
        //         }
        //         let promiseResult = this._tintucRepo.delete(req.body.user_id)
        //             .then(result => {
        //                 if (result.rowCount > 0) {
        //                     return { result: [], count: result.rowCount };
        //                 } else {
        //                     return {
        //                         status: 400,
        //                         error: {
        //                             error_type: VARIABLES.ErrorMessage.NO_DATA,
        //                             message: `${VARIABLES.ErrorMessage.NO_DATA_WITH_ID(req.body.user_id)}, không có gì để delete`
        //                         }
        //                     };
        //                 }
        //             })
        //         ControllerUtil.resovleResponse(res, promiseResult);
        //     }
        //     /**
        //      * @author Nhật Anh 17/04/2017
        //      * 
        //      *  api noi_dung/search
        //      * đưa vào page, per_page, và các cột zới giá trị cần tìm
        //      * nếu chỉ có page và per_page thì sẽ trả zề hết
        //      * 
        //      * 
        //      * POST /api/noi_dung/search
        //      */
        //     // search = (req: express.Request, res: express.Response): void => {
        //     //     let obj = req.body;
        //     //     let limit = obj.per_page || 10; //gioi han no la 10 trang
        //     //     let page = obj.page; //trang
        //     //     let order = obj.order || 'tin_tuc_id+0'; //phan can search
        //     //     let current_status = obj.current_status;
        //     //     let offset;
        //     //  if(!page || page === 1) {
        //     //         offset = 0;//neu chi co 1 trang  thi lay tu 0 , la lay het bat dau  0
        //     //     }
        //     // else{
        //     //         offset = limit * (page - 1);
        //     //         //neu lon hon 1 thi lay 10*(5-1) 40 co nghia la lay tu dong 40 chu khong phai lay tu d
        //     //     }
        //     //     delete obj.page;
        //     //     delete obj.per_page;
        //     //     delete obj.order;
        //     //     if (_.isEmpty(current_status)) {
        //     //         delete obj.current_status;
        //     //     }
        //     //     let promiseNumberOfRow = this._tintucRepo.count(obj);
        //     //     let promiseResult = this._tintucRepo.search(obj, order, limit, offset)
        //     //         .then(result => {
        //     //             let noidungs = result.rows.map(r => this.rowMapper(r));
        //     //             return noidungs;
        //     //         })
        //     //          .then(noidungs => {
        //     //             return promiseNumberOfRow.then(numberOfRow => {
        //     //                 return { result: noidungs, number_of_all_data: numberOfRow.rows[0] };
        //     //             })
        //     //          });
        //     //     ControllerUtil.resovleResponse(res, promiseResult);
        //     // }
        //     search = (req: express.Request, res: express.Response): void => {
        //         let obj = req.body;
        //         let limit = obj.per_page || 2;
        //         let page = obj.page;
        //         let order = obj.order || 'user_id+0';
        //         let current_status = obj.current_status;
        //         let offset;
        //         if (!page || page === 1) {
        //             offset = 0;
        //         } else {
        //             offset = limit * (page - 1);
        //         }
        //         delete obj.page;
        //         delete obj.per_page;
        //         delete obj.order;
        //         if (_.isEmpty(current_status)) {
        //             delete obj.current_status;
        //         }
        //         // let promiseNumberOfRow = this._tintucRepo.count(obj);
        //         let promiseResult = this._tintucRepo.search(obj, order, limit, offset)
        //             .then(result => {
        //                 let noidungs = result.rows.map(r => this.rowMapper(r));
        //                 return noidungs;
        //             })
        //         // .then(noidungs => {
        //         //     return promiseNumberOfRow.then(numberOfRow => {
        //         //         return { result: noidungs, number_of_all_data: numberOfRow.rows[0] };
        //         //     })
        //         // });
        //         ControllerUtil.resovleResponse(res, promiseResult);
        //     }
        //     /**
        //      * /api/noi_dung/seek?id=2&per_page=10&time='2017-02-01'&upperBound=true
        //      */
        //     /*    
        //        public seek = (req: express.Request, res: express.Response): void => {
        //            let id = req.query.id || null;
        //            let per_page = req.query.per_page;
        //            let operator;
        //            if (req.query.upper_bound && req.query.upper_bound === 'true') {
        //                operator = OperatorEnum.UPPERBOUND;
        //            } else {
        //                operator = OperatorEnum.LOWERBOUND;
        //            }
        //            let promiseResult = this._tintucRepo.seek(per_page, operator, id)
        //                .then(result => {
        //                    let noidungs = result.rows.map(r => this.rowMapper(r));
        //                    return { result: noidungs };
        //                });
        //            ControllerUtil.resovleResponse(res, promiseResult);
        //        }
        //        */
        //     seek = (req: express.Request, res: express.Response): void => {
        //         let promiseResult = this._tintucRepo.insert(req.body)
        //         .then(result => {
        //             if (result.rowCount > 0) {
        //                 return { result: [], count: result.rowCount };
        //             } else {
        //                 return {
        //                     status: 400,
        //                     error: {
        //                         error_type: VARIABLES.ErrorMessage.NO_DATA,
        //                         message: `${VARIABLES.ErrorMessage.NO_DATA_WITH_ID(req.body.user_id)}, không có gì để update`
        //                     }
        //                 }
        //             }
        //         });
        //     ControllerUtil.resovleResponse(res, promiseResult);
        //     }
        //     /**
        //      * @author Nhật Anh 17/04/2017
        //      * 
        //      * chuyển kết quả truy vấn thành Object
        //      * 
        //      * @private
        //      * @param {any} queryResult kết quả truy vấn
        //      * @returns {tintuc} 
        //      * 
        //      */
        //     private rowMapper(queryResult): TinTuc {
        //         let tintuc = new TinTuc();
        //         tintuc.user_id = queryResult.user_id;
        //         tintuc.username = queryResult.username;
        //         tintuc.user_update = queryResult.user_update;
        //         return tintuc;
        //     }
        // }
        this.save = function (req, res) {
            var promiseResult = _this._monanRepo.save(req.body.ids)
                .then(function (result) {
                if (result.rowCount > 0) {
                    var noidung = result.rows;
                    return { result: noidung };
                }
                else {
                    return {
                        status: 400,
                        error: {
                            error_type: util_1.VARIABLES.ErrorMessage.NO_DATA,
                            message: util_1.VARIABLES.ErrorMessage.NO_DATA_WITH_ID(req.body.noi_dung_id) + ", kh\u00F4ng c\u00F3 g\u00EC \u0111\u1EC3 update"
                        }
                    };
                }
            });
            util_1.ControllerUtil.resovleResponse(res, promiseResult);
        };
        this._monanRepo = new repositories_1.MonAnRepository();
    }
    return MonAnController;
}());
exports.default = MonAnController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL21vbmFuLWNvbnRyb2xlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU1BLGdDQUFrRTtBQUVsRSxnREFBa0Q7QUFHbEQ7SUFpRUk7UUFBQSxpQkFFQztRQWpFRCxXQUFNLEdBQUcsVUFBQyxHQUFvQixFQUFFLEdBQXFCO1lBQ2pELElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMscUJBQXFCO1lBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDZixJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUNMLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNqQixLQUFLLEVBQUUsUUFBUTtpQkFDbEIsQ0FBQyxDQUFDO2dCQUNILE9BQU87YUFDVjtZQUVELElBQUksYUFBYSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztpQkFDekMsSUFBSSxDQUFDLFVBQUEsTUFBTTtnQkFFUixJQUFJLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFO29CQUNyQixJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUMxQixPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDO2lCQUM5QjtxQkFBTTtvQkFDSCxPQUFPO3dCQUNILE1BQU0sRUFBRSxHQUFHO3dCQUNYLEtBQUssRUFBRTs0QkFDSCxVQUFVLEVBQUUsZ0JBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTzs0QkFDMUMsT0FBTyxFQUFFLGdCQUFTLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUM7eUJBQ3REO3FCQUNKLENBQUE7aUJBQ0o7WUFFTCxDQUFDLENBQUMsQ0FBQztZQUVQLHFCQUFjLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUE7UUFDRCxTQUFJLEdBQUcsVUFBQyxHQUFvQixFQUFFLEdBQXFCO1lBQy9DLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMscUJBQXFCO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDZixJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUNMLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNqQixLQUFLLEVBQUUsUUFBUTtpQkFDbEIsQ0FBQyxDQUFDO2dCQUNILE9BQU87YUFDVjtZQUVELElBQUksYUFBYSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztpQkFDekMsSUFBSSxDQUFDLFVBQUEsTUFBTTtnQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUVoQixJQUFJLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFO29CQUNyQixJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUMxQixPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDO2lCQUM5QjtxQkFBTTtvQkFDSCxPQUFPO3dCQUNILE1BQU0sRUFBRSxHQUFHO3dCQUNYLEtBQUssRUFBRTs0QkFDSCxVQUFVLEVBQUUsZ0JBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTzs0QkFDMUMsT0FBTyxFQUFFLGdCQUFTLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUM7eUJBQ3REO3FCQUNKLENBQUE7aUJBQ0o7WUFFTCxDQUFDLENBQUMsQ0FBQztZQUVQLHFCQUFjLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUE7UUFTRCxXQUFNLEdBQUcsVUFBQyxHQUFvQixFQUFFLEdBQXFCO1lBQ2pELGlEQUFpRDtZQUNqRCx3REFBd0Q7WUFFeEQsdURBQXVEO1lBQ3ZELDZCQUE2QjtZQUM3QixtQkFBbUI7WUFDbkIsZ0VBQWdFO1lBQ2hFLGlIQUFpSDtZQUNqSCxZQUFZO1lBQ1osVUFBVTtZQUNWLGNBQWM7WUFDZCxJQUFJO1lBRUosSUFBSSxhQUFhLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztpQkFDcEUsSUFBSSxDQUFDLFVBQUEsTUFBTTtnQkFDUixJQUFJLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFO29CQUNyQixJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUMxQixPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDO2lCQUM5QjtxQkFBTTtvQkFDSCxPQUFPO3dCQUNILE1BQU0sRUFBRSxHQUFHO3dCQUNYLEtBQUssRUFBRTs0QkFDSCxVQUFVLEVBQUUsZ0JBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTzs0QkFDMUMsT0FBTyxFQUFLLGdCQUFTLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxxREFBeUI7eUJBQ3BHO3FCQUNKLENBQUE7aUJBQ0o7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUVQLHFCQUFjLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUE7UUFLRCxXQUFNLEdBQUcsVUFBQyxHQUFvQixFQUFFLEdBQXFCO1lBQ2pELElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMscUJBQXFCO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDZixJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUNMLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNqQixLQUFLLEVBQUUsUUFBUTtpQkFDbEIsQ0FBQyxDQUFDO2dCQUNILE9BQU87YUFDVjtZQUVELElBQUksYUFBYSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztpQkFDekMsSUFBSSxDQUFDLFVBQUEsTUFBTTtnQkFFUixJQUFJLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFO29CQUNyQixJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUMxQixPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDO2lCQUM5QjtxQkFBTTtvQkFDSCxPQUFPO3dCQUNILE1BQU0sRUFBRSxHQUFHO3dCQUNYLEtBQUssRUFBRTs0QkFDSCxVQUFVLEVBQUUsZ0JBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTzs0QkFDMUMsT0FBTyxFQUFFLGdCQUFTLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUM7eUJBQ3REO3FCQUNKLENBQUE7aUJBQ0o7WUFFTCxDQUFDLENBQUMsQ0FBQztZQUVQLHFCQUFjLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUE7UUFHRCxVQUFVO1FBQ1YscUNBQXFDO1FBQ3JDLFVBQVU7UUFDViw0QkFBNEI7UUFDNUIsVUFBVTtRQUNWLDhDQUE4QztRQUM5QyxVQUFVO1FBRVYsd0VBQXdFO1FBQ3hFLHNDQUFzQztRQUN0QywwQkFBMEI7UUFDMUIscUJBQXFCO1FBQ3JCLHFDQUFxQztRQUNyQyxrQ0FBa0M7UUFDbEMsa0JBQWtCO1FBQ2xCLHNCQUFzQjtRQUN0QixZQUFZO1FBRVosMERBQTBEO1FBQzFELGdDQUFnQztRQUNoQyw2Q0FBNkM7UUFDN0MsZ0ZBQWdGO1FBQ2hGLGtEQUFrRDtRQUNsRCwyQkFBMkI7UUFDM0IsK0JBQStCO1FBQy9CLHVDQUF1QztRQUN2QyxtQ0FBbUM7UUFDbkMsMEVBQTBFO1FBQzFFLGtGQUFrRjtRQUNsRiw0QkFBNEI7UUFDNUIsd0JBQXdCO1FBQ3hCLG9CQUFvQjtRQUVwQixrQkFBa0I7UUFFbEIsOERBQThEO1FBQzlELFFBQVE7UUFFUixVQUFVO1FBQ1YscUNBQXFDO1FBQ3JDLFVBQVU7UUFDVix3REFBd0Q7UUFDeEQsVUFBVTtRQUNWLG1FQUFtRTtRQUNuRSw2REFBNkQ7UUFDN0QsVUFBVTtRQUVWLHdFQUF3RTtRQUN4RSx3REFBd0Q7UUFFeEQsZ0NBQWdDO1FBQ2hDLHVDQUF1QztRQUN2Qyw4Q0FBOEM7UUFDOUMsNENBQTRDO1FBQzVDLCtDQUErQztRQUMvQyxrQkFBa0I7UUFFbEIsOERBQThEO1FBQzlELFFBQVE7UUFHUixzRUFBc0U7UUFDdEUsZ0VBQWdFO1FBRWhFLGdDQUFnQztRQUNoQyx1Q0FBdUM7UUFDdkMsa0JBQWtCO1FBQ2xCLDhEQUE4RDtRQUM5RCxRQUFRO1FBR1IsVUFBVTtRQUNWLHFDQUFxQztRQUNyQyxVQUFVO1FBQ1YsbUNBQW1DO1FBQ25DLG9EQUFvRDtRQUNwRCxVQUFVO1FBQ1YsbUNBQW1DO1FBQ25DLFVBQVU7UUFJVix3RUFBd0U7UUFDeEUsNERBQTREO1FBQzVELG1FQUFtRTtRQUVuRSxrRUFBa0U7UUFDbEUsd0NBQXdDO1FBQ3hDLDhCQUE4QjtRQUM5QiwyRUFBMkU7UUFDM0UsNEhBQTRIO1FBQzVILHVCQUF1QjtRQUN2QixxQkFBcUI7UUFDckIseUJBQXlCO1FBQ3pCLGVBQWU7UUFFZixnRUFBZ0U7UUFDaEUsZ0NBQWdDO1FBQ2hDLDZDQUE2QztRQUM3QyxxRUFBcUU7UUFDckUsMkJBQTJCO1FBQzNCLCtCQUErQjtRQUMvQix1Q0FBdUM7UUFDdkMsbUNBQW1DO1FBQ25DLDBFQUEwRTtRQUMxRSxnSUFBZ0k7UUFDaEksNEJBQTRCO1FBQzVCLHdCQUF3QjtRQUN4QixvQkFBb0I7UUFDcEIsa0JBQWtCO1FBRWxCLDhEQUE4RDtRQUM5RCxRQUFRO1FBRVIsV0FBVztRQUNYLHFDQUFxQztRQUNyQyxVQUFVO1FBQ1Ysa0NBQWtDO1FBQ2xDLDRDQUE0QztRQUM1QyxVQUFVO1FBQ1YsbUNBQW1DO1FBQ25DLFVBQVU7UUFDVix3RUFBd0U7UUFDeEUsbUNBQW1DO1FBQ25DLHFDQUFxQztRQUNyQywyQkFBMkI7UUFDM0Isd0VBQXdFO1FBQ3hFLHdHQUF3RztRQUN4RyxvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLHNCQUFzQjtRQUN0QixZQUFZO1FBRVosd0VBQXdFO1FBQ3hFLGdDQUFnQztRQUNoQyw2Q0FBNkM7UUFDN0MscUVBQXFFO1FBQ3JFLDJCQUEyQjtRQUMzQiwrQkFBK0I7UUFDL0IsdUNBQXVDO1FBQ3ZDLG1DQUFtQztRQUNuQywwRUFBMEU7UUFDMUUsNEhBQTRIO1FBQzVILDRCQUE0QjtRQUM1Qix5QkFBeUI7UUFDekIsb0JBQW9CO1FBQ3BCLGlCQUFpQjtRQUVqQiw4REFBOEQ7UUFDOUQsUUFBUTtRQUdSLFVBQVU7UUFDVixxQ0FBcUM7UUFDckMsVUFBVTtRQUNWLDhCQUE4QjtRQUM5QixnRUFBZ0U7UUFDaEUsdURBQXVEO1FBQ3ZELFVBQVU7UUFDVixVQUFVO1FBQ1YsbUNBQW1DO1FBQ25DLFVBQVU7UUFDViwyRUFBMkU7UUFDM0UsaUNBQWlDO1FBQ2pDLHVFQUF1RTtRQUN2RSwwQ0FBMEM7UUFDMUMsd0VBQXdFO1FBQ3hFLHNEQUFzRDtRQUN0RCx5QkFBeUI7UUFDekIsb0NBQW9DO1FBQ3BDLHVGQUF1RjtRQUN2RixlQUFlO1FBQ2YsZUFBZTtRQUNmLDhDQUE4QztRQUM5Qyx3R0FBd0c7UUFDeEcsZUFBZTtRQUNmLDhCQUE4QjtRQUM5QixrQ0FBa0M7UUFDbEMsK0JBQStCO1FBQy9CLDhDQUE4QztRQUM5Qyw0Q0FBNEM7UUFDNUMsZUFBZTtRQUVmLG1FQUFtRTtRQUNuRSxvRkFBb0Y7UUFDcEYsbUNBQW1DO1FBQ25DLDZFQUE2RTtRQUM3RSxzQ0FBc0M7UUFDdEMsb0JBQW9CO1FBQ3BCLHNDQUFzQztRQUN0QyxxRUFBcUU7UUFDckUsK0ZBQStGO1FBQy9GLHdCQUF3QjtRQUN4QixzQkFBc0I7UUFFdEIsaUVBQWlFO1FBQ2pFLFdBQVc7UUFDWCx3RUFBd0U7UUFDeEUsOEJBQThCO1FBQzlCLHlDQUF5QztRQUN6QywrQkFBK0I7UUFDL0IsZ0RBQWdEO1FBQ2hELG1EQUFtRDtRQUNuRCxzQkFBc0I7UUFDdEIscUNBQXFDO1FBQ3JDLDBCQUEwQjtRQUMxQixtQkFBbUI7UUFDbkIsMkNBQTJDO1FBQzNDLFlBQVk7UUFDWiwyQkFBMkI7UUFDM0IsK0JBQStCO1FBQy9CLDRCQUE0QjtRQUM1QiwyQ0FBMkM7UUFDM0MseUNBQXlDO1FBQ3pDLFlBQVk7UUFFWixtRUFBbUU7UUFDbkUsaUZBQWlGO1FBQ2pGLGdDQUFnQztRQUNoQywwRUFBMEU7UUFDMUUsbUNBQW1DO1FBQ25DLGlCQUFpQjtRQUNqQixpQ0FBaUM7UUFDakMsaUVBQWlFO1FBQ2pFLDJGQUEyRjtRQUMzRixvQkFBb0I7UUFDcEIsaUJBQWlCO1FBRWpCLDhEQUE4RDtRQUM5RCxRQUFRO1FBR1IsVUFBVTtRQUNWLCtFQUErRTtRQUMvRSxVQUFVO1FBSVYsYUFBYTtRQUNiLGdGQUFnRjtRQUNoRiw0Q0FBNEM7UUFDNUMsZ0RBQWdEO1FBQ2hELDJCQUEyQjtRQUMzQiw4RUFBOEU7UUFDOUUscURBQXFEO1FBQ3JELHNCQUFzQjtRQUN0QixxREFBcUQ7UUFDckQsZUFBZTtRQUdmLCtFQUErRTtRQUMvRSxtQ0FBbUM7UUFDbkMsNkVBQTZFO1FBQzdFLGtEQUFrRDtRQUNsRCxxQkFBcUI7UUFFckIsaUVBQWlFO1FBQ2pFLFdBQVc7UUFDWCxZQUFZO1FBRVosc0VBQXNFO1FBQ3RFLGdFQUFnRTtRQUNoRSw0QkFBNEI7UUFDNUIseUNBQXlDO1FBQ3pDLGlFQUFpRTtRQUNqRSx1QkFBdUI7UUFDdkIsMkJBQTJCO1FBQzNCLG1DQUFtQztRQUNuQywrQkFBK0I7UUFDL0Isc0VBQXNFO1FBQ3RFLHdIQUF3SDtRQUN4SCx3QkFBd0I7UUFDeEIsb0JBQW9CO1FBQ3BCLGdCQUFnQjtRQUNoQixjQUFjO1FBRWQsMERBQTBEO1FBQzFELFFBQVE7UUFFUixVQUFVO1FBQ1YscUNBQXFDO1FBQ3JDLFVBQVU7UUFDViw4Q0FBOEM7UUFDOUMsVUFBVTtRQUNWLGtCQUFrQjtRQUNsQixtREFBbUQ7UUFDbkQsNEJBQTRCO1FBQzVCLFVBQVU7UUFDVixVQUFVO1FBQ1YsK0NBQStDO1FBQy9DLHFDQUFxQztRQUNyQyxnREFBZ0Q7UUFDaEQsa0RBQWtEO1FBQ2xELHdEQUF3RDtRQUV4RCx5QkFBeUI7UUFDekIsUUFBUTtRQUVSLElBQUk7UUFLSixTQUFJLEdBQUcsVUFBQyxHQUFvQixFQUFFLEdBQXFCO1lBRS9DLElBQUksYUFBYSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2lCQUNqRCxJQUFJLENBQUMsVUFBQSxNQUFNO2dCQUNSLElBQUksTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUU7b0JBQ3JCLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQzFCLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUM7aUJBQzlCO3FCQUFNO29CQUNILE9BQU87d0JBQ0gsTUFBTSxFQUFFLEdBQUc7d0JBQ1gsS0FBSyxFQUFFOzRCQUNILFVBQVUsRUFBRSxnQkFBUyxDQUFDLFlBQVksQ0FBQyxPQUFPOzRCQUMxQyxPQUFPLEVBQUssZ0JBQVMsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLHFEQUF5Qjt5QkFDcEc7cUJBQ0osQ0FBQTtpQkFDSjtZQUNMLENBQUMsQ0FBQyxDQUFDO1lBRVAscUJBQWMsQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQTtRQTNZRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksOEJBQWUsRUFBRSxDQUFDO0lBQzVDLENBQUM7SUEyWUwsc0JBQUM7QUFBRCxDQTljQSxBQThjQyxJQUFBIiwiZmlsZSI6ImNvbnRyb2xsZXJzL21vbmFuLWNvbnRyb2xlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5pbXBvcnQgeyBJQmFzZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9iYXNlLWNvbnRyb2xsZXJcIjtcclxuXHJcbmltcG9ydCB7IFZBUklBQkxFUywgQ29udHJvbGxlclV0aWwsIE9wZXJhdG9yRW51bSB9IGZyb20gJy4uL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgTW9uQW5SZXBvc2l0b3J5IH0gZnJvbSAnLi4vcmVwb3NpdG9yaWVzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb25BbkNvbnRyb2xsZXIgaW1wbGVtZW50cyBJQmFzZUNvbnRyb2xsZXIge1xyXG5cclxuICAgIGdldE9uZSA9IChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogdm9pZCA9PiB7XHJcbiAgICAgICAgbGV0IGlkID0gcmVxLnF1ZXJ5LmlkX21vbl9hbjsgLy8vYm9keSBkdW5nIGNobyBwb3N0XHJcbiAgICAgICAgY29uc29sZS5sb2coaWQpXHJcbiAgICAgICAgaWYgKCFpZCkge1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogJ2Lhu4sgbOG7l2knXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcHJvbWlzZVJlc3VsdCA9IHRoaXMuX21vbmFuUmVwby5nZXRPbmUoaWQpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yb3dDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9pZHVuZyA9IHJlc3VsdC5yb3dzO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHJlc3VsdDogbm9pZHVuZyB9O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDQwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yX3R5cGU6IFZBUklBQkxFUy5FcnJvck1lc3NhZ2UuTk9fREFUQSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFZBUklBQkxFUy5FcnJvck1lc3NhZ2UuTk9fREFUQV9XSVRIX0lEKGlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIENvbnRyb2xsZXJVdGlsLnJlc292bGVSZXNwb25zZShyZXMsIHByb21pc2VSZXN1bHQpO1xyXG4gICAgfVxyXG4gICAgc2VlayA9IChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogdm9pZCA9PiB7XHJcbiAgICAgICAgbGV0IGlkID0gcmVxLnF1ZXJ5LmlkOyAvLy9ib2R5IGR1bmcgY2hvIHBvc3RcclxuICAgICAgICBjb25zb2xlLmxvZyhpZClcclxuICAgICAgICBpZiAoIWlkKSB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtcclxuICAgICAgICAgICAgICAgIGVycm9yOiAnYuG7iyBs4buXaSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwcm9taXNlUmVzdWx0ID0gdGhpcy5fbW9uYW5SZXBvLmdldE9uZShpZClcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJvd0NvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2lkdW5nID0gcmVzdWx0LnJvd3M7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgcmVzdWx0OiBub2lkdW5nIH07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogNDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfdHlwZTogVkFSSUFCTEVTLkVycm9yTWVzc2FnZS5OT19EQVRBLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogVkFSSUFCTEVTLkVycm9yTWVzc2FnZS5OT19EQVRBX1dJVEhfSUQoaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgQ29udHJvbGxlclV0aWwucmVzb3ZsZVJlc3BvbnNlKHJlcywgcHJvbWlzZVJlc3VsdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbW9uYW5SZXBvOiBNb25BblJlcG9zaXRvcnk7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9tb25hblJlcG8gPSBuZXcgTW9uQW5SZXBvc2l0b3J5KCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBzZWFyY2ggPSAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIC8vIGxldCBpZCA9IHJlcS5ib2R5LnVzZXJfaWQ7IC8vbGF5IHR1IGtoYWNoIGhhbmdcclxuICAgICAgICAvLyBsZXQgdXNlcm5hbWUgPSByZXEuYm9keS51c2VybmFtZTsvLyBsYXkgdHUga2hhY2ggaGFuZ1xyXG5cclxuICAgICAgICAvLyBpZiAoIXJlcS5ib2R5LnRpbl90dWNfaWQgfHwgIXJlcS5ib2R5LnVzZXJfdXBkYXRlKSB7XHJcbiAgICAgICAgLy8gICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtcclxuICAgICAgICAvLyAgICAgICAgIGVycm9yOiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZXJyb3JfdHlwZTogVkFSSUFCTEVTLkVycm9yTWVzc2FnZS5NSVNTSU5HX1BBUkFNLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIG1lc3NhZ2U6IFZBUklBQkxFUy5FcnJvck1lc3NhZ2UuTkVFRF9DT0xVTU5fSU4oWyd1c2VyX2lkJywgJ25vaV9kdW5nJ10sIFsnaW50JywgJ3N0cmluZyddLCAnYm9keScpXHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBsZXQgcHJvbWlzZVJlc3VsdCA9IHRoaXMuX21vbmFuUmVwby5zZWFyY2gocmVxLmJvZHkudGVuX21vbl9hbl9raG9uZ19kYXUpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJvd0NvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2lkdW5nID0gcmVzdWx0LnJvd3M7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgcmVzdWx0OiBub2lkdW5nIH07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogNDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfdHlwZTogVkFSSUFCTEVTLkVycm9yTWVzc2FnZS5OT19EQVRBLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYCR7VkFSSUFCTEVTLkVycm9yTWVzc2FnZS5OT19EQVRBX1dJVEhfSUQocmVxLmJvZHkubm9pX2R1bmdfaWQpfSwga2jDtG5nIGPDsyBnw6wgxJHhu4MgdXBkYXRlYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgQ29udHJvbGxlclV0aWwucmVzb3ZsZVJlc3BvbnNlKHJlcywgcHJvbWlzZVJlc3VsdCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgZ2V0VG9wID0gKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkID0+IHtcclxuICAgICAgICBsZXQgaWQgPSByZXEucXVlcnkuaWQ7IC8vL2JvZHkgZHVuZyBjaG8gcG9zdFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkKVxyXG4gICAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdi4buLIGzhu5dpJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHByb21pc2VSZXN1bHQgPSB0aGlzLl9tb25hblJlcG8uZ2V0VG9wKGlkKVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucm93Q291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vaWR1bmcgPSByZXN1bHQucm93cztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyByZXN1bHQ6IG5vaWR1bmcgfTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA0MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl90eXBlOiBWQVJJQUJMRVMuRXJyb3JNZXNzYWdlLk5PX0RBVEEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBWQVJJQUJMRVMuRXJyb3JNZXNzYWdlLk5PX0RBVEFfV0lUSF9JRChpZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBDb250cm9sbGVyVXRpbC5yZXNvdmxlUmVzcG9uc2UocmVzLCBwcm9taXNlUmVzdWx0KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gICAgIC8qKlxyXG4gICAgLy8gICAgICAqIEBhdXRob3IgTmjhuq10IEFuaCAxNy8wNC8yMDE3XHJcbiAgICAvLyAgICAgICogXHJcbiAgICAvLyAgICAgICogYXBpIGzhuqV5IDEgbm9pX2R1bmdcclxuICAgIC8vICAgICAgKiBcclxuICAgIC8vICAgICAgKiBHRVQgYXBpL25vaV9kdW5nL2dldG9uZS8/bm9pX2R1bmdfaWRcclxuICAgIC8vICAgICAgKi9cclxuXHJcbiAgICAvLyAgICAgZ2V0T25lID0gKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkID0+IHtcclxuICAgIC8vICAgICAgICAgbGV0IGlkID0gcmVxLnF1ZXJ5LnVzZXJfaWQ7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGlkKVxyXG4gICAgLy8gICAgICAgICBpZiAoIWlkKSB7XHJcbiAgICAvLyAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZXJyb3I6ICdi4buLIGzhu5dpJ1xyXG4gICAgLy8gICAgICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgIGxldCBwcm9taXNlUmVzdWx0ID0gdGhpcy5fdGludHVjUmVwby5nZXRPbmUoaWQpXHJcbiAgICAvLyAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucm93Q291bnQgPiAwKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGxldCBub2lkdW5nID0gcmVzdWx0LnJvd3MubWFwKHIgPT4gdGhpcy5yb3dNYXBwZXIocikpWzBdO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4geyByZXN1bHQ6IG5vaWR1bmcgfTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA0MDAsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjoge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yX3R5cGU6IFZBUklBQkxFUy5FcnJvck1lc3NhZ2UuTk9fREFUQSxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBWQVJJQUJMRVMuRXJyb3JNZXNzYWdlLk5PX0RBVEFfV0lUSF9JRChpZClcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAvLyAgICAgICAgIENvbnRyb2xsZXJVdGlsLnJlc292bGVSZXNwb25zZShyZXMsIHByb21pc2VSZXN1bHQpO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgLyoqXHJcbiAgICAvLyAgICAgICogQGF1dGhvciBOaOG6rXQgQW5oIDE3LzA0LzIwMTdcclxuICAgIC8vICAgICAgKiBcclxuICAgIC8vICAgICAgKiBs4bqleSAxIGRhbmggc8OhY2ggbmjhu69uZyBwaOG6p24gdOG7rSBk4buvIGxp4buHdSDEkeG7qW5nIMSR4bqndVxyXG4gICAgLy8gICAgICAqIFxyXG4gICAgLy8gICAgICAqIEdFVCBhcGkvbm9pX2R1bmcvZ2V0dG9wL3RvcD9zdGFuZGFyZD1jb2xfbmFtZSswJj9vZmZzZXQ9MFxyXG4gICAgLy8gICAgICAqIGFwaS90aW5fdHVjL2dldHRvcD9zdGFuZGFyZD10aW5fdHVjX2lkJTJiMSZvZmZzZXQ9MFxyXG4gICAgLy8gICAgICAqL1xyXG5cclxuICAgIC8vICAgICBnZXRUb3AgPSAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQgPT4ge1xyXG4gICAgLy8gICAgICAgICBsZXQgcHJvbWlzZVJlc3VsdCA9IHRoaXMuX3RpbnR1Y1JlcG8uZ2V0VG9wKClcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgbGV0IG5vaWR1bmdzID0gcmVzdWx0LnJvd3M7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobm9pZHVuZ3MpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiB7IHJlc3VsdDogbm9pZHVuZ3MgfTtcclxuICAgIC8vICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIC8vICAgICAgICAgQ29udHJvbGxlclV0aWwucmVzb3ZsZVJlc3BvbnNlKHJlcywgcHJvbWlzZVJlc3VsdCk7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuXHJcbiAgICAvLyAgICAgc2F2ZSA9IChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogdm9pZCA9PiB7XHJcbiAgICAvLyAgICAgICAgIGxldCBwcm9taXNlUmVzdWx0ID0gdGhpcy5fdGludHVjUmVwby5pbnNlcnQocmVxLmJvZHkpXHJcblxyXG4gICAgLy8gICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgLy8gICAgICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgICAgIENvbnRyb2xsZXJVdGlsLnJlc292bGVSZXNwb25zZShyZXMsIHByb21pc2VSZXN1bHQpO1xyXG4gICAgLy8gICAgIH1cclxuXHJcblxyXG4gICAgLy8gICAgIC8qKlxyXG4gICAgLy8gICAgICAqIEBhdXRob3IgTmjhuq10IEFuaCAxNy8wNC8yMDE3XHJcbiAgICAvLyAgICAgICogXHJcbiAgICAvLyAgICAgICogdXBkYXRlIGThu68gbGnhu4d1IGThu7FhIHbDoG8gaWRcclxuICAgIC8vICAgICAgKiBuaOG6rW4gdsOgbyAxIHJlcS5ib2R5IGPDsyBj4bqldSB0csO6YyBuaMawIGVudGl0eVxyXG4gICAgLy8gICAgICAqIFxyXG4gICAgLy8gICAgICAqIFBPU1QgL2FwaS9ub2lfZHVuZy91cGRhdGVcclxuICAgIC8vICAgICAgKi9cclxuXHJcblxyXG5cclxuICAgIC8vICAgICB1cGRhdGUgPSAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQgPT4ge1xyXG4gICAgLy8gICAgICAgICAvLyBsZXQgaWQgPSByZXEuYm9keS51c2VyX2lkOyAvL2xheSB0dSBraGFjaCBoYW5nXHJcbiAgICAvLyAgICAgICAgIC8vIGxldCB1c2VybmFtZSA9IHJlcS5ib2R5LnVzZXJuYW1lOy8vIGxheSB0dSBraGFjaCBoYW5nXHJcblxyXG4gICAgLy8gICAgICAgICAvLyBpZiAoIXJlcS5ib2R5LnRpbl90dWNfaWQgfHwgIXJlcS5ib2R5LnVzZXJfdXBkYXRlKSB7XHJcbiAgICAvLyAgICAgICAgIC8vICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7XHJcbiAgICAvLyAgICAgICAgIC8vICAgICAgICAgZXJyb3I6IHtcclxuICAgIC8vICAgICAgICAgLy8gICAgICAgICAgICAgZXJyb3JfdHlwZTogVkFSSUFCTEVTLkVycm9yTWVzc2FnZS5NSVNTSU5HX1BBUkFNLFxyXG4gICAgLy8gICAgICAgICAvLyAgICAgICAgICAgICBtZXNzYWdlOiBWQVJJQUJMRVMuRXJyb3JNZXNzYWdlLk5FRURfQ09MVU1OX0lOKFsndXNlcl9pZCcsICdub2lfZHVuZyddLCBbJ2ludCcsICdzdHJpbmcnXSwgJ2JvZHknKVxyXG4gICAgLy8gICAgICAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgLy8gICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgICAvLyB9XHJcblxyXG4gICAgLy8gICAgICAgICBsZXQgcHJvbWlzZVJlc3VsdCA9IHRoaXMuX3RpbnR1Y1JlcG8udXBkYXRlKHJlcS5ib2R5KVxyXG4gICAgLy8gICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnJvd0NvdW50ID4gMCkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4geyByZXN1bHQ6IFtdLCBjb3VudDogcmVzdWx0LnJvd0NvdW50IH07XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogNDAwLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl90eXBlOiBWQVJJQUJMRVMuRXJyb3JNZXNzYWdlLk5PX0RBVEEsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYCR7VkFSSUFCTEVTLkVycm9yTWVzc2FnZS5OT19EQVRBX1dJVEhfSUQocmVxLmJvZHkubm9pX2R1bmdfaWQpfSwga2jDtG5nIGPDsyBnw6wgxJHhu4MgdXBkYXRlYFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgLy8gICAgICAgICBDb250cm9sbGVyVXRpbC5yZXNvdmxlUmVzcG9uc2UocmVzLCBwcm9taXNlUmVzdWx0KTtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIC8qKiBcclxuICAgIC8vICAgICAgKiBAYXV0aG9yIE5o4bqtdCBBbmggMTcvMDQvMjAxN1xyXG4gICAgLy8gICAgICAqIFxyXG4gICAgLy8gICAgICAqIHjDs2EgZOG7ryBsaeG7h3UgZOG7sWEgdGhlbyBpZCBcclxuICAgIC8vICAgICAgKiB0cnV54buBbiB2w6BvIDEgaGF5IG5oaeG7gXUgaWQgKG51bWJlcilcclxuICAgIC8vICAgICAgKiBcclxuICAgIC8vICAgICAgKiBQT1NUIC9hcGkvbm9pX2R1bmcvZGVsZXRlXHJcbiAgICAvLyAgICAgICovXHJcbiAgICAvLyAgICAgZGVsZXRlID0gKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkID0+IHtcclxuICAgIC8vICAgICAgICAgaWYgKCFyZXEuYm9keS51c2VyX2lkKSB7XHJcbiAgICAvLyAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZXJyb3I6IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZXJyb3JfdHlwZTogVkFSSUFCTEVTLkVycm9yTWVzc2FnZS5NSVNTSU5HX1BBUkFNLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBWQVJJQUJMRVMuRXJyb3JNZXNzYWdlLk5FRURfQ09MVU1OX0lOKFsndXNlcl9pZCddLCBbJ23huqNuZyBpbnQnXSwgJ2JvZHknKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICBsZXQgcHJvbWlzZVJlc3VsdCA9IHRoaXMuX3RpbnR1Y1JlcG8uZGVsZXRlKHJlcS5ib2R5LnVzZXJfaWQpXHJcbiAgICAvLyAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucm93Q291bnQgPiAwKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHJlc3VsdDogW10sIGNvdW50OiByZXN1bHQucm93Q291bnQgfTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA0MDAsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjoge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yX3R5cGU6IFZBUklBQkxFUy5FcnJvck1lc3NhZ2UuTk9fREFUQSxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBgJHtWQVJJQUJMRVMuRXJyb3JNZXNzYWdlLk5PX0RBVEFfV0lUSF9JRChyZXEuYm9keS51c2VyX2lkKX0sIGtow7RuZyBjw7MgZ8OsIMSR4buDIGRlbGV0ZWBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICB9KVxyXG5cclxuICAgIC8vICAgICAgICAgQ29udHJvbGxlclV0aWwucmVzb3ZsZVJlc3BvbnNlKHJlcywgcHJvbWlzZVJlc3VsdCk7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuXHJcbiAgICAvLyAgICAgLyoqXHJcbiAgICAvLyAgICAgICogQGF1dGhvciBOaOG6rXQgQW5oIDE3LzA0LzIwMTdcclxuICAgIC8vICAgICAgKiBcclxuICAgIC8vICAgICAgKiAgYXBpIG5vaV9kdW5nL3NlYXJjaFxyXG4gICAgLy8gICAgICAqIMSRxrBhIHbDoG8gcGFnZSwgcGVyX3BhZ2UsIHbDoCBjw6FjIGPhu5l0IHrhu5tpIGdpw6EgdHLhu4sgY+G6p24gdMOsbVxyXG4gICAgLy8gICAgICAqIG7hur91IGNo4buJIGPDsyBwYWdlIHbDoCBwZXJfcGFnZSB0aMOsIHPhur0gdHLhuqMgeuG7gSBo4bq/dFxyXG4gICAgLy8gICAgICAqIFxyXG4gICAgLy8gICAgICAqIFxyXG4gICAgLy8gICAgICAqIFBPU1QgL2FwaS9ub2lfZHVuZy9zZWFyY2hcclxuICAgIC8vICAgICAgKi9cclxuICAgIC8vICAgICAvLyBzZWFyY2ggPSAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQgPT4ge1xyXG4gICAgLy8gICAgIC8vICAgICBsZXQgb2JqID0gcmVxLmJvZHk7XHJcbiAgICAvLyAgICAgLy8gICAgIGxldCBsaW1pdCA9IG9iai5wZXJfcGFnZSB8fCAxMDsgLy9naW9pIGhhbiBubyBsYSAxMCB0cmFuZ1xyXG4gICAgLy8gICAgIC8vICAgICBsZXQgcGFnZSA9IG9iai5wYWdlOyAvL3RyYW5nXHJcbiAgICAvLyAgICAgLy8gICAgIGxldCBvcmRlciA9IG9iai5vcmRlciB8fCAndGluX3R1Y19pZCswJzsgLy9waGFuIGNhbiBzZWFyY2hcclxuICAgIC8vICAgICAvLyAgICAgbGV0IGN1cnJlbnRfc3RhdHVzID0gb2JqLmN1cnJlbnRfc3RhdHVzO1xyXG4gICAgLy8gICAgIC8vICAgICBsZXQgb2Zmc2V0O1xyXG4gICAgLy8gICAgIC8vICBpZighcGFnZSB8fCBwYWdlID09PSAxKSB7XHJcbiAgICAvLyAgICAgLy8gICAgICAgICBvZmZzZXQgPSAwOy8vbmV1IGNoaSBjbyAxIHRyYW5nICB0aGkgbGF5IHR1IDAgLCBsYSBsYXkgaGV0IGJhdCBkYXUgIDBcclxuICAgIC8vICAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIC8vIGVsc2V7XHJcbiAgICAvLyAgICAgLy8gICAgICAgICBvZmZzZXQgPSBsaW1pdCAqIChwYWdlIC0gMSk7XHJcbiAgICAvLyAgICAgLy8gICAgICAgICAvL25ldSBsb24gaG9uIDEgdGhpIGxheSAxMCooNS0xKSA0MCBjbyBuZ2hpYSBsYSBsYXkgdHUgZG9uZyA0MCBjaHUga2hvbmcgcGhhaSBsYXkgdHUgZFxyXG4gICAgLy8gICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgLy8gICAgIGRlbGV0ZSBvYmoucGFnZTtcclxuICAgIC8vICAgICAvLyAgICAgZGVsZXRlIG9iai5wZXJfcGFnZTtcclxuICAgIC8vICAgICAvLyAgICAgZGVsZXRlIG9iai5vcmRlcjtcclxuICAgIC8vICAgICAvLyAgICAgaWYgKF8uaXNFbXB0eShjdXJyZW50X3N0YXR1cykpIHtcclxuICAgIC8vICAgICAvLyAgICAgICAgIGRlbGV0ZSBvYmouY3VycmVudF9zdGF0dXM7XHJcbiAgICAvLyAgICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgLy8gICAgIGxldCBwcm9taXNlTnVtYmVyT2ZSb3cgPSB0aGlzLl90aW50dWNSZXBvLmNvdW50KG9iaik7XHJcbiAgICAvLyAgICAgLy8gICAgIGxldCBwcm9taXNlUmVzdWx0ID0gdGhpcy5fdGludHVjUmVwby5zZWFyY2gob2JqLCBvcmRlciwgbGltaXQsIG9mZnNldClcclxuICAgIC8vICAgICAvLyAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAvLyAgICAgLy8gICAgICAgICAgICAgbGV0IG5vaWR1bmdzID0gcmVzdWx0LnJvd3MubWFwKHIgPT4gdGhpcy5yb3dNYXBwZXIocikpO1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgICAgIHJldHVybiBub2lkdW5ncztcclxuICAgIC8vICAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgLy8gICAgICAgICAgLnRoZW4obm9pZHVuZ3MgPT4ge1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgICAgIHJldHVybiBwcm9taXNlTnVtYmVyT2ZSb3cudGhlbihudW1iZXJPZlJvdyA9PiB7XHJcbiAgICAvLyAgICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiB7IHJlc3VsdDogbm9pZHVuZ3MsIG51bWJlcl9vZl9hbGxfZGF0YTogbnVtYmVyT2ZSb3cucm93c1swXSB9O1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgLy8gICAgICAgICAgfSk7XHJcblxyXG4gICAgLy8gICAgIC8vICAgICBDb250cm9sbGVyVXRpbC5yZXNvdmxlUmVzcG9uc2UocmVzLCBwcm9taXNlUmVzdWx0KTtcclxuICAgIC8vICAgICAvLyB9XHJcbiAgICAvLyAgICAgc2VhcmNoID0gKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkID0+IHtcclxuICAgIC8vICAgICAgICAgbGV0IG9iaiA9IHJlcS5ib2R5O1xyXG4gICAgLy8gICAgICAgICBsZXQgbGltaXQgPSBvYmoucGVyX3BhZ2UgfHwgMjtcclxuICAgIC8vICAgICAgICAgbGV0IHBhZ2UgPSBvYmoucGFnZTtcclxuICAgIC8vICAgICAgICAgbGV0IG9yZGVyID0gb2JqLm9yZGVyIHx8ICd1c2VyX2lkKzAnO1xyXG4gICAgLy8gICAgICAgICBsZXQgY3VycmVudF9zdGF0dXMgPSBvYmouY3VycmVudF9zdGF0dXM7XHJcbiAgICAvLyAgICAgICAgIGxldCBvZmZzZXQ7XHJcbiAgICAvLyAgICAgICAgIGlmICghcGFnZSB8fCBwYWdlID09PSAxKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBvZmZzZXQgPSAwO1xyXG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgb2Zmc2V0ID0gbGltaXQgKiAocGFnZSAtIDEpO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIGRlbGV0ZSBvYmoucGFnZTtcclxuICAgIC8vICAgICAgICAgZGVsZXRlIG9iai5wZXJfcGFnZTtcclxuICAgIC8vICAgICAgICAgZGVsZXRlIG9iai5vcmRlcjtcclxuICAgIC8vICAgICAgICAgaWYgKF8uaXNFbXB0eShjdXJyZW50X3N0YXR1cykpIHtcclxuICAgIC8vICAgICAgICAgICAgIGRlbGV0ZSBvYmouY3VycmVudF9zdGF0dXM7XHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgIC8vIGxldCBwcm9taXNlTnVtYmVyT2ZSb3cgPSB0aGlzLl90aW50dWNSZXBvLmNvdW50KG9iaik7XHJcbiAgICAvLyAgICAgICAgIGxldCBwcm9taXNlUmVzdWx0ID0gdGhpcy5fdGludHVjUmVwby5zZWFyY2gob2JqLCBvcmRlciwgbGltaXQsIG9mZnNldClcclxuICAgIC8vICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgbGV0IG5vaWR1bmdzID0gcmVzdWx0LnJvd3MubWFwKHIgPT4gdGhpcy5yb3dNYXBwZXIocikpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiBub2lkdW5ncztcclxuICAgIC8vICAgICAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgIC8vIC50aGVuKG5vaWR1bmdzID0+IHtcclxuICAgIC8vICAgICAgICAgLy8gICAgIHJldHVybiBwcm9taXNlTnVtYmVyT2ZSb3cudGhlbihudW1iZXJPZlJvdyA9PiB7XHJcbiAgICAvLyAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIHsgcmVzdWx0OiBub2lkdW5ncywgbnVtYmVyX29mX2FsbF9kYXRhOiBudW1iZXJPZlJvdy5yb3dzWzBdIH07XHJcbiAgICAvLyAgICAgICAgIC8vICAgICB9KVxyXG4gICAgLy8gICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAvLyAgICAgICAgIENvbnRyb2xsZXJVdGlsLnJlc292bGVSZXNwb25zZShyZXMsIHByb21pc2VSZXN1bHQpO1xyXG4gICAgLy8gICAgIH1cclxuXHJcblxyXG4gICAgLy8gICAgIC8qKlxyXG4gICAgLy8gICAgICAqIC9hcGkvbm9pX2R1bmcvc2Vlaz9pZD0yJnBlcl9wYWdlPTEwJnRpbWU9JzIwMTctMDItMDEnJnVwcGVyQm91bmQ9dHJ1ZVxyXG4gICAgLy8gICAgICAqL1xyXG5cclxuXHJcblxyXG4gICAgLy8gICAgIC8qICAgIFxyXG4gICAgLy8gICAgICAgIHB1YmxpYyBzZWVrID0gKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkID0+IHtcclxuICAgIC8vICAgICAgICAgICAgbGV0IGlkID0gcmVxLnF1ZXJ5LmlkIHx8IG51bGw7XHJcbiAgICAvLyAgICAgICAgICAgIGxldCBwZXJfcGFnZSA9IHJlcS5xdWVyeS5wZXJfcGFnZTtcclxuICAgIC8vICAgICAgICAgICAgbGV0IG9wZXJhdG9yO1xyXG4gICAgLy8gICAgICAgICAgICBpZiAocmVxLnF1ZXJ5LnVwcGVyX2JvdW5kICYmIHJlcS5xdWVyeS51cHBlcl9ib3VuZCA9PT0gJ3RydWUnKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICBvcGVyYXRvciA9IE9wZXJhdG9yRW51bS5VUFBFUkJPVU5EO1xyXG4gICAgLy8gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgb3BlcmF0b3IgPSBPcGVyYXRvckVudW0uTE9XRVJCT1VORDtcclxuICAgIC8vICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAvLyAgICAgICAgICAgIGxldCBwcm9taXNlUmVzdWx0ID0gdGhpcy5fdGludHVjUmVwby5zZWVrKHBlcl9wYWdlLCBvcGVyYXRvciwgaWQpXHJcbiAgICAvLyAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgIGxldCBub2lkdW5ncyA9IHJlc3VsdC5yb3dzLm1hcChyID0+IHRoaXMucm93TWFwcGVyKHIpKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICByZXR1cm4geyByZXN1bHQ6IG5vaWR1bmdzIH07XHJcbiAgICAvLyAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgIENvbnRyb2xsZXJVdGlsLnJlc292bGVSZXNwb25zZShyZXMsIHByb21pc2VSZXN1bHQpO1xyXG4gICAgLy8gICAgICAgIH1cclxuICAgIC8vICAgICAgICAqL1xyXG5cclxuICAgIC8vICAgICBzZWVrID0gKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkID0+IHtcclxuICAgIC8vICAgICAgICAgbGV0IHByb21pc2VSZXN1bHQgPSB0aGlzLl90aW50dWNSZXBvLmluc2VydChyZXEuYm9keSlcclxuICAgIC8vICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGlmIChyZXN1bHQucm93Q291bnQgPiAwKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIHsgcmVzdWx0OiBbXSwgY291bnQ6IHJlc3VsdC5yb3dDb3VudCB9O1xyXG4gICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDQwMCxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yX3R5cGU6IFZBUklBQkxFUy5FcnJvck1lc3NhZ2UuTk9fREFUQSxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGAke1ZBUklBQkxFUy5FcnJvck1lc3NhZ2UuTk9fREFUQV9XSVRIX0lEKHJlcS5ib2R5LnVzZXJfaWQpfSwga2jDtG5nIGPDsyBnw6wgxJHhu4MgdXBkYXRlYFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9KTtcclxuXHJcbiAgICAvLyAgICAgQ29udHJvbGxlclV0aWwucmVzb3ZsZVJlc3BvbnNlKHJlcywgcHJvbWlzZVJlc3VsdCk7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICAvKipcclxuICAgIC8vICAgICAgKiBAYXV0aG9yIE5o4bqtdCBBbmggMTcvMDQvMjAxN1xyXG4gICAgLy8gICAgICAqIFxyXG4gICAgLy8gICAgICAqIGNodXnhu4NuIGvhur90IHF14bqjIHRydXkgduG6pW4gdGjDoG5oIE9iamVjdFxyXG4gICAgLy8gICAgICAqIFxyXG4gICAgLy8gICAgICAqIEBwcml2YXRlXHJcbiAgICAvLyAgICAgICogQHBhcmFtIHthbnl9IHF1ZXJ5UmVzdWx0IGvhur90IHF14bqjIHRydXkgduG6pW5cclxuICAgIC8vICAgICAgKiBAcmV0dXJucyB7dGludHVjfSBcclxuICAgIC8vICAgICAgKiBcclxuICAgIC8vICAgICAgKi9cclxuICAgIC8vICAgICBwcml2YXRlIHJvd01hcHBlcihxdWVyeVJlc3VsdCk6IFRpblR1YyB7XHJcbiAgICAvLyAgICAgICAgIGxldCB0aW50dWMgPSBuZXcgVGluVHVjKCk7XHJcbiAgICAvLyAgICAgICAgIHRpbnR1Yy51c2VyX2lkID0gcXVlcnlSZXN1bHQudXNlcl9pZDtcclxuICAgIC8vICAgICAgICAgdGludHVjLnVzZXJuYW1lID0gcXVlcnlSZXN1bHQudXNlcm5hbWU7XHJcbiAgICAvLyAgICAgICAgIHRpbnR1Yy51c2VyX3VwZGF0ZSA9IHF1ZXJ5UmVzdWx0LnVzZXJfdXBkYXRlO1xyXG5cclxuICAgIC8vICAgICAgICAgcmV0dXJuIHRpbnR1YztcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHNhdmUgPSAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQgPT4ge1xyXG5cclxuICAgICAgICBsZXQgcHJvbWlzZVJlc3VsdCA9IHRoaXMuX21vbmFuUmVwby5zYXZlKHJlcS5ib2R5LmlkcylcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucm93Q291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vaWR1bmcgPSByZXN1bHQucm93cztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyByZXN1bHQ6IG5vaWR1bmcgfTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA0MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl90eXBlOiBWQVJJQUJMRVMuRXJyb3JNZXNzYWdlLk5PX0RBVEEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBgJHtWQVJJQUJMRVMuRXJyb3JNZXNzYWdlLk5PX0RBVEFfV0lUSF9JRChyZXEuYm9keS5ub2lfZHVuZ19pZCl9LCBraMO0bmcgY8OzIGfDrCDEkeG7gyB1cGRhdGVgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBDb250cm9sbGVyVXRpbC5yZXNvdmxlUmVzcG9uc2UocmVzLCBwcm9taXNlUmVzdWx0KTtcclxuICAgIH1cclxufSJdfQ==
