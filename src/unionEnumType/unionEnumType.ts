// 1. Union Type
// this is way you declare the variable that having 2 or more types instead of using any

let unionVariable: number|string
// console.log(typeof(unionVariable)); //Variable 'unionVariable' is used before being assigned.

unionVariable = 10
console.log(unionVariable);
unionVariable = "hihi"
console.log(unionVariable);

// 2. Enum
// Enum is a type that contains a list of predefined values.
enum isHandSome{
    handSome = "you are handsome man",
    notHandSome = "you are gay"
}
let DucHuy :isHandSome = isHandSome.handSome
console.log(typeof(DucHuy));
console.log(DucHuy);
