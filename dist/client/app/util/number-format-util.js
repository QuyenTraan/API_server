"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberFormatUtil = /** @class */ (function () {
    function NumberFormatUtil() {
    }
    // format a number to decimal
    NumberFormatUtil.intFormat = function (n) {
        var regex = /(\d)((\d{3}\.?)+)$/;
        n = n.split('.').join('');
        while (regex.test(n)) {
            n = n.replace(regex, '$1.$2');
        }
        return n;
    };
    // cut the real number and decimal point, and format the real number
    NumberFormatUtil.numFormat = function (n) {
        var pointReg = /([\d\.,]*)\,(\d*)$/, f;
        if (pointReg.test(n)) {
            f = RegExp.$2;
            return this.intFormat(RegExp.$1) + ',' + f;
        }
        return this.intFormat(n);
    };
    return NumberFormatUtil;
}());
exports.NumberFormatUtil = NumberFormatUtil;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91dGlsL251bWJlci1mb3JtYXQtdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBQUE7SUF3QkEsQ0FBQztJQXZCRyw2QkFBNkI7SUFDZCwwQkFBUyxHQUF4QixVQUF5QixDQUFDO1FBQ3RCLElBQUksS0FBSyxHQUFHLG9CQUFvQixDQUFDO1FBRWpDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUUxQixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ2pDO1FBRUQsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsb0VBQW9FO0lBQ3RELDBCQUFTLEdBQXZCLFVBQXdCLENBQUM7UUFDckIsSUFBSSxRQUFRLEdBQUcsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO1FBRXZDLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNsQixDQUFDLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztZQUNkLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUM5QztRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQXhCQSxBQXdCQyxJQUFBO0FBeEJZLDRDQUFnQiIsImZpbGUiOiJhcHAvdXRpbC9udW1iZXItZm9ybWF0LXV0aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTnVtYmVyRm9ybWF0VXRpbCB7XHJcbiAgICAvLyBmb3JtYXQgYSBudW1iZXIgdG8gZGVjaW1hbFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW50Rm9ybWF0KG4pIHtcclxuICAgICAgICBsZXQgcmVnZXggPSAvKFxcZCkoKFxcZHszfVxcLj8pKykkLztcclxuXHJcbiAgICAgICAgbiA9IG4uc3BsaXQoJy4nKS5qb2luKCcnKTtcclxuXHJcbiAgICAgICAgd2hpbGUgKHJlZ2V4LnRlc3QobikpIHtcclxuICAgICAgICAgICAgbiA9IG4ucmVwbGFjZShyZWdleCwgJyQxLiQyJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjdXQgdGhlIHJlYWwgbnVtYmVyIGFuZCBkZWNpbWFsIHBvaW50LCBhbmQgZm9ybWF0IHRoZSByZWFsIG51bWJlclxyXG4gICAgcHVibGljIHN0YXRpYyBudW1Gb3JtYXQobikge1xyXG4gICAgICAgIGxldCBwb2ludFJlZyA9IC8oW1xcZFxcLixdKilcXCwoXFxkKikkLywgZjtcclxuXHJcbiAgICAgICAgaWYgKHBvaW50UmVnLnRlc3QobikpIHtcclxuICAgICAgICAgICAgZiA9IFJlZ0V4cC4kMjtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50Rm9ybWF0KFJlZ0V4cC4kMSkgKyAnLCcgKyBmO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnRGb3JtYXQobik7XHJcbiAgICB9XHJcbn0iXX0=
