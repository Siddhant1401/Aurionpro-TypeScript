export class Customer2 {

    constructor(private firstName: string, private lastName: string) {
    }

    public setFirstName(firstName:string){
        this.firstName=firstName;
    }

    public setLastName(lastName:string){
        this.lastName=lastName;
    }

    public getFirstName():string{
        return this.firstName;
    }
    public getLastName():string{
        return this.lastName;
    }
}

// let customer2 = new Customer2("Ram", "Singh");

// console.log(customer2.getFirstName());
// console.log(customer2.getLastName());