import { Shape } from "./Shape";

export class Cicle implements Shape{
    constructor(private radius:number){
    }

    public calculateArea(): number {
        return 3.14*this.radius*this.radius;
    }
}