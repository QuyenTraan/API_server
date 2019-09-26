"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sendo_schema_1 = require("./sendo-schema");
/**
 * Middleware dùng cho validate toàn bộ TinTuc api
 */
var TinTucValidator = /** @class */ (function () {
    function TinTucValidator() {
        var _this = this;
        this._schema = new sendo_schema_1.SenDoSchema();
        this.validate = function (req, res, next) {
            req.check(_this._schema.schema);
            req.getValidationResult().then(function (result) {
                if (result.isEmpty()) {
                    next();
                }
                else {
                    res.status(400).json(result.array());
                }
            });
        };
    }
    return TinTucValidator;
}());
exports.default = TinTucValidator;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmUvdGludHVjLW1pZGRsZXdhcmUvc2VuZG8tdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsK0NBQTZDO0FBRTdDOztHQUVHO0FBQ0g7SUFBQTtRQUFBLGlCQWFDO1FBWlcsWUFBTyxHQUFHLElBQUksMEJBQVcsRUFBRSxDQUFDO1FBQ3BDLGFBQVEsR0FBRyxVQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjtZQUMvRSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDL0IsR0FBRyxDQUFDLG1CQUFtQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtnQkFDakMsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUU7b0JBQ2xCLElBQUksRUFBRSxDQUFDO2lCQUNWO3FCQUFNO29CQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2lCQUN4QztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUEiLCJmaWxlIjoibWlkZGxld2FyZS90aW50dWMtbWlkZGxld2FyZS9zZW5kby12YWxpZGF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcclxuaW1wb3J0IHsgU2VuRG9TY2hlbWEgfSBmcm9tICcuL3NlbmRvLXNjaGVtYSc7XHJcblxyXG4vKipcclxuICogTWlkZGxld2FyZSBkw7luZyBjaG8gdmFsaWRhdGUgdG/DoG4gYuG7mSBUaW5UdWMgYXBpXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW5UdWNWYWxpZGF0b3Ige1xyXG4gICAgcHJpdmF0ZSBfc2NoZW1hID0gbmV3IFNlbkRvU2NoZW1hKCk7XHJcbiAgICB2YWxpZGF0ZSA9IChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xyXG4gICAgICAgIHJlcS5jaGVjayh0aGlzLl9zY2hlbWEuc2NoZW1hKTtcclxuICAgICAgICByZXEuZ2V0VmFsaWRhdGlvblJlc3VsdCgpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5pc0VtcHR5KCkpIHtcclxuICAgICAgICAgICAgICAgIG5leHQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHJlc3VsdC5hcnJheSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxufSJdfQ==
