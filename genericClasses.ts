class Person {
    name : string;
    constructor(name: string){
        this.name = name;
    }
}
class Stack<T>{
    private array : T[];

    constructor(){
        this.array =[];
    }

    push(x :T): void{
        this.array.push(x);
    }

    pop(): void{
        this.array.pop();
    }

    top() :T{
        return this.array[this.array.length - 1];
    }

    display():void{
        console.log(this.array);
    }
}

let c1 = new Stack<Person>();
c1.push(new Person("Lakshmi"));
c1.push(new Person("Drishit"));

c1.display();