function sum():void{
    //no return type
}

console.log(sum())

function sum1() : (number | string){
    return 10;
}
console.log(sum1())