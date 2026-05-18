// 1. Union Type
// this is way you declare the variable that having 2 or more types instead of using any

let unionVariable: number|string
// console.log(typeof(unionVariable)); //Variable 'unionVariable' is used before being assigned.

unionVariable = 10
console.log(unionVariable);
unionVariable = "hihi"
console.log(unionVariable);

//extra
//union type is not only use for primitive, it can be use in type declaration, for example
type isGirl = "yes"|"no"
let isWritterGirl:isGirl = "no"
console.log(isWritterGirl);


// 2. Enum
// Enum is a type that contains a list of predefined values.
enum isHandSome{
    handSome = "you are handsome man",
    notHandSome = "you are gay"
}
let DucHuy :isHandSome = isHandSome.handSome
console.log(typeof(DucHuy));
console.log(DucHuy);

// Union types and enums can both limit values,
// so why do we need to learn enums if union types already exist?

// Union types are easy to use when the number of values is small.
// But when the list gets bigger, writing everything in one line becomes hard to manage.
// That's one reason enums are useful.

// Another important difference is that union types disappear after compilation
// because JavaScript does not understand TypeScript types.

// Enums, however, are compiled into real JavaScript objects
// that still exist at runtime.
