"use strict";
/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.DB_CONNECTION_STRING = process.env.NODE_ENV === 'production' ? process.env.dbURI : "mongodb://localhost:27017/quickStart";
    return Constants;
}());
Object.seal(Constants);
module.exports = Constants;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9jb25zdGFudHMvY29uc3RhbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUVIO0lBQUE7SUFFQSxDQUFDO0lBRFUsOEJBQW9CLEdBQVcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsc0NBQXNDLENBQUM7SUFDN0ksZ0JBQUM7Q0FGRCxBQUVDLElBQUE7QUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3ZCLGlCQUFTLFNBQVMsQ0FBQyIsImZpbGUiOiJjb25maWcvY29uc3RhbnRzL2NvbnN0YW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IE1vaXouS2FjaHdhbGEgb24gMTUtMDYtMjAxNi5cclxuICovXHJcblxyXG5jbGFzcyBDb25zdGFudHMge1xyXG4gICAgc3RhdGljIERCX0NPTk5FQ1RJT05fU1RSSU5HOiBzdHJpbmcgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gcHJvY2Vzcy5lbnYuZGJVUkkgOiBcIm1vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvcXVpY2tTdGFydFwiO1xyXG59XHJcbk9iamVjdC5zZWFsKENvbnN0YW50cyk7XHJcbmV4cG9ydCA9IENvbnN0YW50czsiXX0=
