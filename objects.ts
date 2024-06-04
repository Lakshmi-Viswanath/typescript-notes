/*
Define object in 2 ways
1. classes
2. interface
*/
interface Product {
    name : string,
    price : number,
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

class Car {
    name : string;
    constructor(name :string){
        this.name = name;
    }
    display(){
        console.log("class object",this.name);
    }
}

let c1 = new Car("lakshmi");
console.log(c1.display());