/*
Define object in 2 ways
1. classes
2. interface
*/
interface Product {
    name : string;
    price : number;
    display() :void;
}

let p1 : Product = {
    name : "Lakshmi",
    price : 45,
    display : () =>{
        console.log("display");
    }
}

console.log(p1);
//-------------------------------------------------------------------------
class Car {
    name : string;
    age : number | undefined;
    constructor(name :string, age? :number){
        this.name = name;
        this.age = age;
    }
    display(): void{
        console.log("class object",this.name, "with age", this.age);
    }
}

let car1 = new Car("lakshmi", 40);
console.log(car1.display());