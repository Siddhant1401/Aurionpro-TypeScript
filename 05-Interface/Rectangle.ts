import { Shape } from "./Shape";

export class Rectangle implements Shape{

    constructor(private height:number,private width:number){
    }

    public calculateArea(): number {
        return this.height*this.width;
    }
}