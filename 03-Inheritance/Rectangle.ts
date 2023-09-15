import { Shape } from "./Shape";

export class Rectangle extends Shape{

    constructor(theX:number,theY:number,private height:number,private width:number){
        super(theX,theY);
    }

    public getInfo(): string {
        //super.getInfo();
        return super.getInfo()+`height:${this.height} and width:${this.width}`;
    }
}