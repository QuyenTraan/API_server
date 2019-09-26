"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jwt-simple");
var fs = require("fs");
var controllers_1 = require("../controllers");
var path = require("path");
/**
 * middleware dùng để chứng thực request
 */
var AuthValidator = /** @class */ (function () {
    function AuthValidator() {
        this.validate = function (req, res, next) {
            var token = req.headers['x-access-token'];
            var key = req.headers['x-key'];
            var secretkey = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'config', 'json-config', 'secret-key.json'), 'utf8'));
            if (token || key) {
                try {
                    var decoded = jwt.decode(token, secretkey.key);
                    if (decoded.exp <= Date.now()) {
                        res.status(400);
                        res.json({
                            status: 400,
                            message: "Token expired"
                        });
                        return;
                    }
                    next();
                }
                catch (error) {
                    res.status(500);
                    res.json({
                        status: 500,
                        message: "Có lỗi xảy ra, xin quay lại sau",
                        err: error
                    });
                }
            }
            else {
                res.status(401);
                res.json({
                    "status": 401,
                    "message": "Invalid Token or Key"
                });
                return;
            }
        };
        this._authController = new controllers_1.AuthController();
    }
    return AuthValidator;
}());
exports.default = AuthValidator;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmUvYXV0aC12YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnQ0FBbUM7QUFFbkMsdUJBQTBCO0FBQzFCLDhDQUFnRDtBQUNoRCwyQkFBOEI7QUFFOUI7O0dBRUc7QUFDSDtJQUlJO1FBS0EsYUFBUSxHQUFHLFVBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCO1lBQy9FLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUMxQyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQy9CLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFFNUgsSUFBSSxLQUFLLElBQUksR0FBRyxFQUFFO2dCQUNkLElBQUk7b0JBQ0EsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNoRCxJQUFJLE9BQU8sQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFO3dCQUMzQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNoQixHQUFHLENBQUMsSUFBSSxDQUFDOzRCQUNMLE1BQU0sRUFBRSxHQUFHOzRCQUNYLE9BQU8sRUFBRSxlQUFlO3lCQUMzQixDQUFDLENBQUM7d0JBQ0gsT0FBTztxQkFDVjtvQkFDRCxJQUFJLEVBQUUsQ0FBQztpQkFDVjtnQkFBQyxPQUFPLEtBQUssRUFBRTtvQkFDWixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNoQixHQUFHLENBQUMsSUFBSSxDQUFDO3dCQUNMLE1BQU0sRUFBRSxHQUFHO3dCQUNYLE9BQU8sRUFBRSxpQ0FBaUM7d0JBQzFDLEdBQUcsRUFBRSxLQUFLO3FCQUNiLENBQUMsQ0FBQztpQkFDTjthQUNKO2lCQUFNO2dCQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLEdBQUcsQ0FBQyxJQUFJLENBQUM7b0JBQ0wsUUFBUSxFQUFFLEdBQUc7b0JBQ2IsU0FBUyxFQUFFLHNCQUFzQjtpQkFDcEMsQ0FBQyxDQUFDO2dCQUNILE9BQU87YUFDVjtRQUNMLENBQUMsQ0FBQTtRQXJDRyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksNEJBQWMsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFxQ0wsb0JBQUM7QUFBRCxDQTNDQSxBQTJDQyxJQUFBIiwiZmlsZSI6Im1pZGRsZXdhcmUvYXV0aC12YWxpZGF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0ID0gcmVxdWlyZSgnand0LXNpbXBsZScpO1xyXG5pbXBvcnQgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcclxuaW1wb3J0IGZzID0gcmVxdWlyZSgnZnMnKTtcclxuaW1wb3J0IHsgQXV0aENvbnRyb2xsZXIgfSBmcm9tICcuLi9jb250cm9sbGVycyc7XHJcbmltcG9ydCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xyXG5cclxuLyoqXHJcbiAqIG1pZGRsZXdhcmUgZMO5bmcgxJHhu4MgY2jhu6luZyB0aOG7sWMgcmVxdWVzdFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aFZhbGlkYXRvciB7XHJcblxyXG4gICAgcHJpdmF0ZSBfYXV0aENvbnRyb2xsZXI6IEF1dGhDb250cm9sbGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2F1dGhDb250cm9sbGVyID0gbmV3IEF1dGhDb250cm9sbGVyKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHZhbGlkYXRlID0gKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IGV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbiAgICAgICAgbGV0IHRva2VuID0gcmVxLmhlYWRlcnNbJ3gtYWNjZXNzLXRva2VuJ107XHJcbiAgICAgICAgbGV0IGtleSA9IHJlcS5oZWFkZXJzWyd4LWtleSddO1xyXG4gICAgICAgIGxldCBzZWNyZXRrZXkgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4nLCAnY29uZmlnJywgJ2pzb24tY29uZmlnJywgJ3NlY3JldC1rZXkuanNvbicpLCAndXRmOCcpKTtcclxuXHJcbiAgICAgICAgaWYgKHRva2VuIHx8IGtleSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRlY29kZWQgPSBqd3QuZGVjb2RlKHRva2VuICwgc2VjcmV0a2V5LmtleSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVjb2RlZC5leHAgPD0gRGF0ZS5ub3coKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKTtcclxuICAgICAgICAgICAgICAgICAgICByZXMuanNvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogNDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlRva2VuIGV4cGlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5leHQoKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKTtcclxuICAgICAgICAgICAgICAgIHJlcy5qc29uKHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDUwMCxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkPDsyBs4buXaSB44bqjeSByYSwgeGluIHF1YXkgbOG6oWkgc2F1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyOiBlcnJvclxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMSk7XHJcbiAgICAgICAgICAgIHJlcy5qc29uKHtcclxuICAgICAgICAgICAgICAgIFwic3RhdHVzXCI6IDQwMSxcclxuICAgICAgICAgICAgICAgIFwibWVzc2FnZVwiOiBcIkludmFsaWQgVG9rZW4gb3IgS2V5XCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=
