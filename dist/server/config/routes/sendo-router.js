"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var controllers_1 = require("../../controllers");
var router = express.Router();
var SenDoRouter = /** @class */ (function () {
    function SenDoRouter() {
        this._sendoCtr = new controllers_1.SenDoController();
    }
    Object.defineProperty(SenDoRouter.prototype, "routes", {
        get: function () {
            router.get("/getone", this._sendoCtr.getOne);
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return SenDoRouter;
}());
exports.default = SenDoRouter;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9yb3V0ZXMvc2VuZG8tcm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQW9DO0FBRXBDLGlEQUFvRDtBQUlwRCxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDOUI7SUFHSTtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSw2QkFBZSxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUdELHNCQUFJLCtCQUFNO2FBQVY7WUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRzdDLE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBQ0wsa0JBQUM7QUFBRCxDQWRBLEFBY0MsSUFBQSIsImZpbGUiOiJjb25maWcvcm91dGVzL3NlbmRvLXJvdXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XHJcblxyXG5pbXBvcnQgeyBTZW5Eb0NvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi9jb250cm9sbGVycyc7XHJcblxyXG5pbXBvcnQgYm9keVBhcnNlciA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTtcclxuXHJcbmxldCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZW5Eb1JvdXRlciB7XHJcbiAgICBwcml2YXRlIF9zZW5kb0N0cjogU2VuRG9Db250cm9sbGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX3NlbmRvQ3RyID0gbmV3IFNlbkRvQ29udHJvbGxlcigpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXQgcm91dGVzKCkge1xyXG4gICAgICAgIHJvdXRlci5nZXQoXCIvZ2V0b25lXCIsIHRoaXMuX3NlbmRvQ3RyLmdldE9uZSk7XHJcbiAgICBcclxuXHJcbiAgICAgICAgcmV0dXJuIHJvdXRlcjtcclxuICAgIH1cclxufVxyXG4iXX0=
