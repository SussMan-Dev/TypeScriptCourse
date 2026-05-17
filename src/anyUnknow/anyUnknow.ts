// any tells TypeScript to disable type checking for this variable
let a: any;

// switching types easily
a = 10;
a = "hello";
console.log(typeof(a));
console.log(a.toUpperCase()); //it can use function of string prototype in this example because its type is string

// output: 
// string
// HELLO

// When should you use 'any'?

// 1. When migrating code from JavaScript to TypeScript,
// because you don't want to declare all data types again.

// 2. When the input data type is unpredictable.

// 3. When you need temporary code for testing or presentation.

// unknow is a data type more safety than any, you need to check the data type of it then you can move to the next step
let b: unknown
b =10
console.log(typeof(b));

// console.log(b.toUpperCase());

// output: 
// number
//error: 'b' is of type 'unknown'.

if(typeof(b) == "number"){
    console.log("Now I'm number type");
    
}
