"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var controllers_1 = require("../../controllers");
var router = express.Router();
var MonAnRouter = /** @class */ (function () {
    function MonAnRouter() {
        this._monanCtr = new controllers_1.MonAnController();
    }
    Object.defineProperty(MonAnRouter.prototype, "routes", {
        get: function () {
            router.get("/getone", this._monanCtr.getOne);
            router.get("/gettop", this._monanCtr.getTop); // get top những dữ liệu đầu tiên
            //get du lieu , truyen vao 1 id
            router.post("/search", this._monanCtr.search); // Tìm kiếm dữ liệu
            router.post("/save", this._monanCtr.save);
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return MonAnRouter;
}());
exports.default = MonAnRouter;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9yb3V0ZXMvbW9uYW4tcm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQW9DO0FBRXBDLGlEQUFvRDtBQUlwRCxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDOUI7SUFHSTtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSw2QkFBZSxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUdELHNCQUFJLCtCQUFNO2FBQVY7WUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdDLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxpQ0FBaUM7WUFDOUUsK0JBQStCO1lBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxtQkFBbUI7WUFDbEUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUUzQyxPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtJQUNMLGtCQUFDO0FBQUQsQ0FqQkEsQUFpQkMsSUFBQSIsImZpbGUiOiJjb25maWcvcm91dGVzL21vbmFuLXJvdXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XHJcblxyXG5pbXBvcnQgeyBNb25BbkNvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi9jb250cm9sbGVycyc7XHJcblxyXG5pbXBvcnQgYm9keVBhcnNlciA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTtcclxuXHJcbmxldCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb25BblJvdXRlciB7XHJcbiAgICBwcml2YXRlIF9tb25hbkN0cjogTW9uQW5Db250cm9sbGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX21vbmFuQ3RyID0gbmV3IE1vbkFuQ29udHJvbGxlcigpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXQgcm91dGVzKCkge1xyXG4gICAgICAgIHJvdXRlci5nZXQoXCIvZ2V0b25lXCIsIHRoaXMuX21vbmFuQ3RyLmdldE9uZSk7XHJcbiAgICAgICAgcm91dGVyLmdldChcIi9nZXR0b3BcIiwgdGhpcy5fbW9uYW5DdHIuZ2V0VG9wKTsgLy8gZ2V0IHRvcCBuaOG7r25nIGThu68gbGnhu4d1IMSR4bqndSB0acOqblxyXG4gICAgICAgICAvL2dldCBkdSBsaWV1ICwgdHJ1eWVuIHZhbyAxIGlkXHJcbiAgICAgICAgIHJvdXRlci5wb3N0KFwiL3NlYXJjaFwiLCB0aGlzLl9tb25hbkN0ci5zZWFyY2gpOyAvLyBUw6xtIGtp4bq/bSBk4buvIGxp4buHdVxyXG4gICAgICAgICByb3V0ZXIucG9zdChcIi9zYXZlXCIsIHRoaXMuX21vbmFuQ3RyLnNhdmUpO1xyXG5cclxuICAgICAgICByZXR1cm4gcm91dGVyO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
