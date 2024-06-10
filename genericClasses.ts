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

let c1 = new Stack<number>();
c1.push(1);
c1.push(2);
c1.display();