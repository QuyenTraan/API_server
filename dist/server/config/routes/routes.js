"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var tintuc_router_1 = require("./tintuc-router");
var monan_router_1 = require("./monan-router");
var sendo_router_1 = require("./sendo-router");
var app = express();
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Object.defineProperty(Routes.prototype, "routes", {
        get: function () {
            app.use('/tin-tuc', new tintuc_router_1.default().routes);
            app.use('/mon-an', new monan_router_1.default().routes);
            app.use('/sen-do', new sendo_router_1.default().routes);
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return Routes;
}());
exports.default = Routes;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9yb3V0ZXMvcm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQW9DO0FBR3BDLGlEQUEyQztBQUMzQywrQ0FBeUM7QUFDekMsK0NBQXlDO0FBRXpDLElBQUksR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBQ3BCO0lBQUE7SUFPQSxDQUFDO0lBTk8sc0JBQUksMEJBQU07YUFBVjtZQUNRLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksdUJBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQy9DLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksc0JBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdDLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksc0JBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdDLE9BQU8sR0FBRyxDQUFDO1FBQ25CLENBQUM7OztPQUFBO0lBQ1QsYUFBQztBQUFELENBUEEsQUFPQyxJQUFBIiwiZmlsZSI6ImNvbmZpZy9yb3V0ZXMvcm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XHJcbmltcG9ydCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xyXG5cclxuaW1wb3J0IFRpblR1Y1JvdXRlciBmcm9tICcuL3RpbnR1Yy1yb3V0ZXInO1xyXG5pbXBvcnQgTW9uQW5Sb3V0ZXIgZnJvbSAnLi9tb25hbi1yb3V0ZXInO1xyXG5pbXBvcnQgU2VuRG9Sb3V0ZXIgZnJvbSAnLi9zZW5kby1yb3V0ZXInO1xyXG5cclxudmFyIGFwcCA9IGV4cHJlc3MoKTtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVzIHtcclxuICAgICAgICBnZXQgcm91dGVzKCkge1xyXG4gICAgICAgICAgICAgICAgYXBwLnVzZSgnL3Rpbi10dWMnLCBuZXcgVGluVHVjUm91dGVyKCkucm91dGVzKTtcclxuICAgICAgICAgICAgICAgIGFwcC51c2UoJy9tb24tYW4nLCBuZXcgTW9uQW5Sb3V0ZXIoKS5yb3V0ZXMpO1xyXG4gICAgICAgICAgICAgICAgYXBwLnVzZSgnL3Nlbi1kbycsIG5ldyBTZW5Eb1JvdXRlcigpLnJvdXRlcyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBwO1xyXG4gICAgICAgIH1cclxufVxyXG5cclxuIl19
