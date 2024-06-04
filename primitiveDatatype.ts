/* types in typescript
Primitive Datatypes in JS
1. number
2. string
3. boolean
4. undefined
5. null
6. Big int
7. symbol

var <var_name> : number = value; //type signature or annotation

*/
let id : number = 25;
let firstName = "lakshmi";
//firstName = false; throws error

//union of types
let userId : number | string = 26;

/*
arrays
let var_name : type[] = [val1, val2, val3];
*/
let array : number[] = [1, 2, 3];
let array1 : any[] = [1, 2, 3, false, null];
let array2 : (number | string |boolean)[] = [1, 2, 3, true, "str"];

//arrays in the form of type tuple
let data : [number , string , boolean] = [1, "str", true];


