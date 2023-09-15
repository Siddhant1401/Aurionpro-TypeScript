"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cicle = void 0;
var Cicle = /** @class */ (function () {
    function Cicle(radius) {
        this.radius = radius;
    }
    Cicle.prototype.calculateArea = function () {
        return 3.14 * this.radius * this.radius;
    };
    return Cicle;
}());
exports.Cicle = Cicle;
