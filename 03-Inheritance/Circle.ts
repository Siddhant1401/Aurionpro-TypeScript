import { Shape } from "./Shape";

export class Cicle extends Shape{
    constructor(theX:number,theY:number,private radius:number){
        super(theX,theY);
    }

    public getInfo(): string {
        return super.getInfo()+`radius:${this.radius}`;
    }
}