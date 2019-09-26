"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var fs = require("fs");
var SenDoController = /** @class */ (function () {
    function SenDoController() {
        this.getOne = function (req, res) {
            var keys = fs.readFileSync(path.join(__dirname, '..', '..', 'server', 'bin', 'crm-loai.json'), 'utf-8');
            res.status(200).json({
                result: JSON.parse(keys)
            });
        };
    }
    return SenDoController;
}());
exports.default = SenDoController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3NlbmRvLWNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQSwyQkFBNkI7QUFDN0IsdUJBQXlCO0FBSXpCO0lBQUE7UUFLSyxXQUFNLEdBQUcsVUFBQyxHQUFvQixFQUFFLEdBQXFCO1lBQ2xELElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLGVBQWUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBRXhHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7YUFDM0IsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFBO0lBRUwsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUEiLCJmaWxlIjoiY29udHJvbGxlcnMvc2VuZG8tY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5pbXBvcnQgeyBJQmFzZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9iYXNlLWNvbnRyb2xsZXJcIjtcclxuXHJcbmltcG9ydCB7IFZBUklBQkxFUywgQ29udHJvbGxlclV0aWwsIE9wZXJhdG9yRW51bSB9IGZyb20gJy4uL3V0aWwnO1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbkRvQ29udHJvbGxlciBpbXBsZW1lbnRzIElCYXNlQ29udHJvbGxlciB7XHJcbiAgICBnZXRUb3A6IGV4cHJlc3MuUmVxdWVzdEhhbmRsZXI7XHJcbiAgICBzZWFyY2g6IGV4cHJlc3MuUmVxdWVzdEhhbmRsZXI7XHJcbiAgIFxyXG5cclxuICAgICBnZXRPbmUgPSAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGxldCBrZXlzID0gZnMucmVhZEZpbGVTeW5jKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLicsICcuLicsICdzZXJ2ZXInLCAnYmluJywgJ2NybS1sb2FpLmpzb24nKSwgJ3V0Zi04Jyk7XHJcblxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgICAgICAgcmVzdWx0OiBKU09OLnBhcnNlKGtleXMpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICBcclxufSJdfQ==
