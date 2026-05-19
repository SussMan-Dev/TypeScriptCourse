// Tuple allows defining an array with fixed element types and order.
// You cannot change the tuple type after it has been declared.
// A tuple is still an Array at runtime, but TypeScript adds type checking for each position.
// Tuples are useful when each element has a specific meaning.

let duchuy:[string,number] = ["huy",20]

duchuy = ["duc",21]

console.log(duchuy[0]);