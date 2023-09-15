import { Shape } from "./Shape";

export class Cicle extends Shape{
    constructor(theX:number,theY:number,private radius:number){
        super(theX,theY);
    }

    public getInfo(): string {
        return super.getInfo()+`radius:${this.radius}`;
    }

    public calculateArea(): number {
        return 3.14*this.radius*this.radius;
    }
}