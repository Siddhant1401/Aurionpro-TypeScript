import { Shape } from "./Shape";
import { Cicle } from "./Circle";
import { Rectangle } from "./Rectangle";

let circle = new Cicle(10,20,30);
let rectangle = new Rectangle(10,20,30,40);

let shapes : Shape[]=[];

shapes.push(circle);
shapes.push(rectangle);

shapes.forEach(shape=>{
    console.log("Info : "+shape.getInfo());
    console.log("Area : "+shape.calculateArea());
    console.log("----------------");
})