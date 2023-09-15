"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer2 = void 0;
var Customer2 = /** @class */ (function () {
    function Customer2(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Customer2.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Customer2.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Customer2.prototype.getFirstName = function () {
        return this.firstName;
    };
    Customer2.prototype.getLastName = function () {
        return this.lastName;
    };
    return Customer2;
}());
exports.Customer2 = Customer2;
// let customer2 = new Customer2("Ram", "Singh");
// console.log(customer2.getFirstName());
// console.log(customer2.getLastName());
