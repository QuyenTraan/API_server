"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var controllers_1 = require("../../controllers");
var middleware_1 = require("../../middleware");
var bodyParser = require("body-parser");
var router = express.Router();
var TinTucRouter = /** @class */ (function () {
    function TinTucRouter() {
        this._tintucCtr = new controllers_1.TinTucController();
    }
    Object.defineProperty(TinTucRouter.prototype, "routes", {
        get: function () {
            router.use(new middleware_1.TinTucValidator().validate);
            router.get("/getone", this._tintucCtr.getOne); //get du lieu , truyen vao 1 id
            router.get("/gettop", this._tintucCtr.getTop); // get top những dữ liệu đầu tiên
            router.post("/search", this._tintucCtr.search); // Tìm kiếm dữ liệu
            router.post("/deletedelete", this._tintucCtr.delete); //xoa du lieu, truyen id vao ( truyen 1 hay theo nhieu id)
            router.post("/save", this._tintucCtr.save); //ko co thi tao du lieu, co roi thi luu lai du lieu moi
            // router.post("/update", this._tintucCtr.update); //ko co thi tao du lieu, co roi thi luu lai du lieu moi
            router.get('/seek', this._tintucCtr.seek); // phân trang theo kiểu seek method
            var urlencodedParser = bodyParser.urlencoded({ extended: false });
            router.post('/getone', urlencodedParser, function (req, res) {
                res.send('id la  ' + req.body.tin_tuc_id);
            });
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return TinTucRouter;
}());
exports.default = TinTucRouter;
Object.seal(TinTucRouter);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9yb3V0ZXMvdGludHVjLXJvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFvQztBQUVwQyxpREFBcUQ7QUFDckQsK0NBQW1EO0FBQ25ELHdDQUEyQztBQUUzQyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDOUI7SUFHSTtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSw4QkFBZ0IsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCxzQkFBSSxnQ0FBTTthQUFWO1lBRUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLDRCQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzQyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsK0JBQStCO1lBQzlFLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxpQ0FBaUM7WUFDaEYsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLG1CQUFtQjtZQUNuRSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsMERBQTBEO1lBQ2hILE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyx1REFBdUQ7WUFDbkcsMEdBQTBHO1lBQzFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxtQ0FBbUM7WUFDOUUsSUFBSSxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7WUFDekUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxHQUFHLEVBQUUsR0FBRztnQkFDbkQsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUMzQyxDQUFDLENBQUMsQ0FBQTtZQUtBLE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBRUwsbUJBQUM7QUFBRCxDQTVCQSxBQTRCQyxJQUFBOztBQUdELE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMiLCJmaWxlIjoiY29uZmlnL3JvdXRlcy90aW50dWMtcm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcclxuXHJcbmltcG9ydCB7IFRpblR1Y0NvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi9jb250cm9sbGVycyc7XHJcbmltcG9ydCB7IFRpblR1Y1ZhbGlkYXRvciB9IGZyb20gJy4uLy4uL21pZGRsZXdhcmUnO1xyXG5pbXBvcnQgYm9keVBhcnNlciA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTtcclxuXHJcbmxldCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW5UdWNSb3V0ZXIge1xyXG4gICAgcHJpdmF0ZSBfdGludHVjQ3RyOiBUaW5UdWNDb250cm9sbGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX3RpbnR1Y0N0ciA9IG5ldyBUaW5UdWNDb250cm9sbGVyKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCByb3V0ZXMoKSB7XHJcblxyXG4gICAgICAgIHJvdXRlci51c2UobmV3IFRpblR1Y1ZhbGlkYXRvcigpLnZhbGlkYXRlKTtcclxuICAgICAgICByb3V0ZXIuZ2V0KFwiL2dldG9uZVwiLCB0aGlzLl90aW50dWNDdHIuZ2V0T25lKTsgLy9nZXQgZHUgbGlldSAsIHRydXllbiB2YW8gMSBpZFxyXG4gICAgICAgIHJvdXRlci5nZXQoXCIvZ2V0dG9wXCIsIHRoaXMuX3RpbnR1Y0N0ci5nZXRUb3ApOyAvLyBnZXQgdG9wIG5o4buvbmcgZOG7ryBsaeG7h3UgxJHhuqd1IHRpw6puXHJcbiAgICAgICAgcm91dGVyLnBvc3QoXCIvc2VhcmNoXCIsIHRoaXMuX3RpbnR1Y0N0ci5zZWFyY2gpOyAvLyBUw6xtIGtp4bq/bSBk4buvIGxp4buHdVxyXG4gICAgICAgIHJvdXRlci5wb3N0KFwiL2RlbGV0ZWRlbGV0ZVwiLCB0aGlzLl90aW50dWNDdHIuZGVsZXRlKTsgLy94b2EgZHUgbGlldSwgdHJ1eWVuIGlkIHZhbyAoIHRydXllbiAxIGhheSB0aGVvIG5oaWV1IGlkKVxyXG4gICAgICAgIHJvdXRlci5wb3N0KFwiL3NhdmVcIiwgdGhpcy5fdGludHVjQ3RyLnNhdmUpOyAvL2tvIGNvIHRoaSB0YW8gZHUgbGlldSwgY28gcm9pIHRoaSBsdXUgbGFpIGR1IGxpZXUgbW9pXHJcbiAgICAgICAgLy8gcm91dGVyLnBvc3QoXCIvdXBkYXRlXCIsIHRoaXMuX3RpbnR1Y0N0ci51cGRhdGUpOyAvL2tvIGNvIHRoaSB0YW8gZHUgbGlldSwgY28gcm9pIHRoaSBsdXUgbGFpIGR1IGxpZXUgbW9pXHJcbiAgICAgICAgcm91dGVyLmdldCgnL3NlZWsnLCB0aGlzLl90aW50dWNDdHIuc2Vlayk7IC8vIHBow6JuIHRyYW5nIHRoZW8ga2nhu4N1IHNlZWsgbWV0aG9kXHJcbiAgICAgICAgdmFyIHVybGVuY29kZWRQYXJzZXIgPSBib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSlcclxucm91dGVyLnBvc3QoJy9nZXRvbmUnLCB1cmxlbmNvZGVkUGFyc2VyLCBmdW5jdGlvbiAocmVxLCByZXMpIHtcclxuICAgICAgICByZXMuc2VuZCgnaWQgbGEgICcgKyByZXEuYm9keS50aW5fdHVjX2lkKVxyXG4gICAgICB9KVxyXG4gICAgXHJcblxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHJvdXRlcjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5PYmplY3Quc2VhbChUaW5UdWNSb3V0ZXIpOyJdfQ==
