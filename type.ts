type Details = {name : string , age:number, address? : string}

let person : Details = {
    name : "lakshmi",
    age: 20
}

// Can type and interfaces represent functions ?

type logger = (msg: string, errorCode: number) => void;

interface loggerInterface {
    (msg: string, errorCode: number): void;
}


// Defining unions is possible with type but not interfaces

type unionOfstrandnum = number | string;


interface ComplexNumber {
    real: number,
    imaginary: number
}

interface ComplexNumber {
    add: (num: ComplexNumber) => ComplexNumber
}

/**
 * 
 * interface ComplexNumber {
    real: number,
    imaginary: number
    add: (num: ComplexNumber) => ComplexNumber
}
 */