"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var circle = new Circle_1.Cicle(10, 20, 30);
var rectangle = new Rectangle_1.Rectangle(10, 20, 30, 40);
var shapes = [];
shapes.push(circle);
shapes.push(rectangle);
shapes.forEach(function (shape) {
    console.log("Info : " + shape.getInfo());
    console.log("Area : " + shape.calculateArea());
    console.log("----------------");
});
