"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var supertest = require("supertest");
/**
 * là lớp cơ sở, chạy những việc mà mọi lớp test cần
 *
 */
var TestBase = /** @class */ (function () {
    function TestBase() {
        this.request = supertest('http://localhost:8082');
    }
    TestBase.prototype.handleEnd = function (rej, res, err) {
        if (err) {
            rej(err);
        }
        else {
            res();
        }
    };
    return TestBase;
}());
exports.TestBase = TestBase;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvdGVzdC5iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EscUNBQXdDO0FBRXhDOzs7R0FHRztBQUNIO0lBQUE7UUFDRSxZQUFPLEdBQXdDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBU3BGLENBQUM7SUFQUSw0QkFBUyxHQUFoQixVQUFpQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7UUFDNUIsSUFBSSxHQUFHLEVBQUU7WUFDUCxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDVjthQUFNO1lBQ0wsR0FBRyxFQUFFLENBQUM7U0FDUDtJQUNILENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWcUIsNEJBQVEiLCJmaWxlIjoidGVzdC90ZXN0LmJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXR1cCwgVGVhcmRvd24gfSBmcm9tICdhbHNhdGlhbic7XHJcbmltcG9ydCBzdXBlcnRlc3QgPSByZXF1aXJlKCdzdXBlcnRlc3QnKTtcclxuXHJcbi8qKlxyXG4gKiBsw6AgbOG7m3AgY8ahIHPhu58sIGNo4bqheSBuaOG7r25nIHZp4buHYyBtw6AgbeG7jWkgbOG7m3AgdGVzdCBj4bqnblxyXG4gKiBcclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUZXN0QmFzZSB7XHJcbiAgcmVxdWVzdDogc3VwZXJ0ZXN0LlN1cGVyVGVzdDxzdXBlcnRlc3QuVGVzdD4gPSBzdXBlcnRlc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MicpO1xyXG5cclxuICBwdWJsaWMgaGFuZGxlRW5kKHJlaiwgcmVzLCBlcnIpIHtcclxuICAgIGlmIChlcnIpIHtcclxuICAgICAgcmVqKGVycik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXMoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
