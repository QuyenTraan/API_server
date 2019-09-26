"use strict";
/**
 * created by hong duc 29/12/2016
 */
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jwt-simple");
var path = require("path");
var secretkey = require(path.join(__dirname, '..', 'config', 'json-config', 'secret-key.json'));
/**
 * controller quản lý chứng thực user
 */
var AuthController = /** @class */ (function () {
    function AuthController() {
        var _this = this;
        this.login = function (req, res) {
            var username = req.body.username || '';
            var password = req.body.password || '';
            if (!username || !password) {
                res.status(401);
                res.json({
                    status: 401,
                    message: 'sai username hoặc password'
                });
                return;
            }
            var userObj = _this.validate(username, password);
            if (!userObj) {
                res.status(401);
                res.json({
                    status: 401,
                    message: 'sai username hoặc password'
                });
                return;
            }
            else {
                res.json(_this.genToken(userObj));
            }
        };
        this.validate = function (username, password) {
            if (username === 'test' && password === 'test') {
                var userObj = {
                    name: 'test',
                    role: 'admin',
                    username: username
                };
                return userObj;
            }
            return null;
        };
        this.validateUser = function (username) {
        };
        this.genToken = function (user) {
            var expires = _this.expiresIn(7); // 7 days
            var token = jwt.encode({
                exp: expires
            }, secretkey.key);
            return {
                token: token,
                expires: expires,
                user: user
            };
        };
        this.expiresIn = function (numDays) {
            var date = new Date();
            return date.setDate(date.getDate() + numDays);
        };
    }
    return AuthController;
}());
exports.default = AuthController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2F1dGgtY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7O0FBR0gsZ0NBQW1DO0FBQ25DLDJCQUE4QjtBQUM5QixJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0FBRWhHOztHQUVHO0FBQ0g7SUFBQTtRQUFBLGlCQStEQztRQTdERyxVQUFLLEdBQUcsVUFBQyxHQUFvQixFQUFFLEdBQXFCO1lBQ2hELElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztZQUN2QyxJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7WUFFdkMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDeEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDaEIsR0FBRyxDQUFDLElBQUksQ0FBQztvQkFDTCxNQUFNLEVBQUUsR0FBRztvQkFDWCxPQUFPLEVBQUUsNEJBQTRCO2lCQUN4QyxDQUFDLENBQUM7Z0JBQ0gsT0FBTzthQUNWO1lBRUQsSUFBSSxPQUFPLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFFaEQsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDVixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQixHQUFHLENBQUMsSUFBSSxDQUFDO29CQUNMLE1BQU0sRUFBRSxHQUFHO29CQUNYLE9BQU8sRUFBRSw0QkFBNEI7aUJBQ3hDLENBQUMsQ0FBQztnQkFDSCxPQUFPO2FBQ1Y7aUJBQU07Z0JBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDcEM7UUFHTCxDQUFDLENBQUE7UUFFTyxhQUFRLEdBQUcsVUFBQyxRQUFnQixFQUFFLFFBQWdCO1lBQ2xELElBQUksUUFBUSxLQUFLLE1BQU0sSUFBSSxRQUFRLEtBQUssTUFBTSxFQUFFO2dCQUM1QyxJQUFJLE9BQU8sR0FBRztvQkFDVixJQUFJLEVBQUUsTUFBTTtvQkFDWixJQUFJLEVBQUUsT0FBTztvQkFDYixRQUFRLEVBQUUsUUFBUTtpQkFDckIsQ0FBQztnQkFDRixPQUFPLE9BQU8sQ0FBQzthQUNsQjtZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FBQTtRQUVELGlCQUFZLEdBQUcsVUFBQyxRQUFnQjtRQUVoQyxDQUFDLENBQUE7UUFFTyxhQUFRLEdBQUcsVUFBQyxJQUFJO1lBQ3BCLElBQUksT0FBTyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO1lBQzFDLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7Z0JBQ25CLEdBQUcsRUFBRSxPQUFPO2FBQ2YsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEIsT0FBTztnQkFDSCxLQUFLLEVBQUUsS0FBSztnQkFDWixPQUFPLEVBQUUsT0FBTztnQkFDaEIsSUFBSSxFQUFFLElBQUk7YUFDYixDQUFDO1FBQ04sQ0FBQyxDQUFBO1FBRU8sY0FBUyxHQUFHLFVBQUMsT0FBZTtZQUNoQyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ3RCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0EvREEsQUErREMsSUFBQSIsImZpbGUiOiJjb250cm9sbGVycy9hdXRoLWNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogY3JlYXRlZCBieSBob25nIGR1YyAyOS8xMi8yMDE2XHJcbiAqL1xyXG5cclxuaW1wb3J0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XHJcbmltcG9ydCBqd3QgPSByZXF1aXJlKCdqd3Qtc2ltcGxlJyk7XHJcbmltcG9ydCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xyXG5sZXQgc2VjcmV0a2V5ID0gcmVxdWlyZShwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4nLCAnY29uZmlnJywgJ2pzb24tY29uZmlnJywgJ3NlY3JldC1rZXkuanNvbicpKTtcclxuXHJcbi8qKlxyXG4gKiBjb250cm9sbGVyIHF14bqjbiBsw70gY2jhu6luZyB0aOG7sWMgdXNlclxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aENvbnRyb2xsZXIge1xyXG5cclxuICAgIGxvZ2luID0gKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpID0+IHtcclxuICAgICAgICBsZXQgdXNlcm5hbWUgPSByZXEuYm9keS51c2VybmFtZSB8fCAnJztcclxuICAgICAgICBsZXQgcGFzc3dvcmQgPSByZXEuYm9keS5wYXNzd29yZCB8fCAnJztcclxuXHJcbiAgICAgICAgaWYgKCF1c2VybmFtZSB8fCAhcGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDEpO1xyXG4gICAgICAgICAgICByZXMuanNvbih7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IDQwMSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdzYWkgdXNlcm5hbWUgaG/hurdjIHBhc3N3b3JkJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHVzZXJPYmogPSB0aGlzLnZhbGlkYXRlKHVzZXJuYW1lLCBwYXNzd29yZCk7XHJcblxyXG4gICAgICAgIGlmICghdXNlck9iaikge1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMSk7XHJcbiAgICAgICAgICAgIHJlcy5qc29uKHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogNDAxLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ3NhaSB1c2VybmFtZSBob+G6t2MgcGFzc3dvcmQnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzLmpzb24odGhpcy5nZW5Ub2tlbih1c2VyT2JqKSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZSA9ICh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXJuYW1lID09PSAndGVzdCcgJiYgcGFzc3dvcmQgPT09ICd0ZXN0Jykge1xyXG4gICAgICAgICAgICBsZXQgdXNlck9iaiA9IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICd0ZXN0JyxcclxuICAgICAgICAgICAgICAgIHJvbGU6ICdhZG1pbicsXHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZXJPYmo7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlVXNlciA9ICh1c2VybmFtZTogc3RyaW5nKSA9PiB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2VuVG9rZW4gPSAodXNlcikgPT4ge1xyXG4gICAgICAgIGxldCBleHBpcmVzID0gdGhpcy5leHBpcmVzSW4oNyk7IC8vIDcgZGF5c1xyXG4gICAgICAgIGxldCB0b2tlbiA9IGp3dC5lbmNvZGUoe1xyXG4gICAgICAgICAgICBleHA6IGV4cGlyZXNcclxuICAgICAgICB9LCBzZWNyZXRrZXkua2V5KTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0b2tlbjogdG9rZW4sXHJcbiAgICAgICAgICAgIGV4cGlyZXM6IGV4cGlyZXMsXHJcbiAgICAgICAgICAgIHVzZXI6IHVzZXJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXhwaXJlc0luID0gKG51bURheXM6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICByZXR1cm4gZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgbnVtRGF5cyk7XHJcbiAgICB9XHJcbn0iXX0=
