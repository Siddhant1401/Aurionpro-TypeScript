"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cicle = void 0;
var Shape_1 = require("./Shape");
var Cicle = /** @class */ (function (_super) {
    __extends(Cicle, _super);
    function Cicle(theX, theY, radius) {
        var _this = _super.call(this, theX, theY) || this;
        _this.radius = radius;
        return _this;
    }
    Cicle.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + "radius:".concat(this.radius);
    };
    Cicle.prototype.calculateArea = function () {
        return 3.14 * this.radius * this.radius;
    };
    return Cicle;
}(Shape_1.Shape));
exports.Cicle = Cicle;
