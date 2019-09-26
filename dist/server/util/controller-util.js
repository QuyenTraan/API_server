"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var log_util_1 = require("../util/log-util");
var ControllerUtil = /** @class */ (function () {
    function ControllerUtil() {
    }
    /**
     * @author đức 26/1/2017
     *
     * hàm gộp tất cả những hành giống nhau lại
     */
    ControllerUtil.resovleResponse = function (res, promise) {
        promise
            .then(function (result) {
            var status = result.status;
            delete result.status;
            if (status && status >= 400) {
                res.status(status).json(result);
                return;
            }
            res.status(status || 200).json(result);
        })
            .catch(function (error) {
            log_util_1.LogUtil.error('error khi request:', error);
            res.status(500).json(error);
        });
    };
    return ControllerUtil;
}());
exports.default = ControllerUtil;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvY29udHJvbGxlci11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsNkNBQTJDO0FBRTNDO0lBQUE7SUFzQkEsQ0FBQztJQXJCRzs7OztPQUlHO0lBQ1csOEJBQWUsR0FBN0IsVUFBOEIsR0FBcUIsRUFBRSxPQUFxQjtRQUN0RSxPQUFPO2FBQ0YsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNSLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDM0IsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ3JCLElBQUksTUFBTSxJQUFJLE1BQU0sSUFBSSxHQUFHLEVBQUU7Z0JBQ3pCLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNoQyxPQUFPO2FBQ1Y7WUFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSztZQUNSLGtCQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzNDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0F0QkEsQUFzQkMsSUFBQSIsImZpbGUiOiJ1dGlsL2NvbnRyb2xsZXItdXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7IE1vZGVsQmFzZSB9IGZyb20gJy4uL21vZGVscy9iYXNlLW1vZGVsJztcclxuaW1wb3J0IHsgTG9nVXRpbCB9IGZyb20gJy4uL3V0aWwvbG9nLXV0aWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlclV0aWwge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAYXV0aG9yIMSR4bupYyAyNi8xLzIwMTdcclxuICAgICAqIFxyXG4gICAgICogaMOgbSBn4buZcCB04bqldCBj4bqjIG5o4buvbmcgaMOgbmggZ2nhu5FuZyBuaGF1IGzhuqFpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVzb3ZsZVJlc3BvbnNlKHJlczogZXhwcmVzcy5SZXNwb25zZSwgcHJvbWlzZTogUHJvbWlzZTxhbnk+KTogdm9pZCB7XHJcbiAgICAgICAgcHJvbWlzZVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXR1cyA9IHJlc3VsdC5zdGF0dXM7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgcmVzdWx0LnN0YXR1cztcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgJiYgc3RhdHVzID49IDQwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoc3RhdHVzKS5qc29uKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyhzdGF0dXMgfHwgMjAwKS5qc29uKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBMb2dVdGlsLmVycm9yKCdlcnJvciBraGkgcmVxdWVzdDonLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbihlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19
