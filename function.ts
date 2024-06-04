function sum2 (a: number, b : number) :number {
    return a+b;
}

console.log(sum2(10, 10));

function sum3 (a: number, b? : number) :number {
    return a+ (b || 0 );
}

console.log(sum3(100)); // all paramaters are mandatory in ts . u can make it optional by ?
