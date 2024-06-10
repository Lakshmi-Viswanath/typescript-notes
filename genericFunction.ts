function linearSearch<T>(array :T[], x: T):[number, T]{
    for(let i=0; i < array.length; i++){
        if(array[i] == x) return [i, array[i]];
    }
    return [-1, x];
}

const arr1 : number[] = [1,2,3,4,5];
console.log(linearSearch<number>(arr1, 7));

const arr2 : string[] = ["a", "b", "c","d"];
console.log(linearSearch<string>(arr2, "d"))