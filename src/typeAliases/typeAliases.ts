// Type aliases allow you to create custom types.

// Type alias with union type
type IsGay = "yes" | "no";

let huy: IsGay = "yes"; // autocomplete supported

console.log(huy); // "yes"
console.log(typeof huy); // "string"

// Type alias with object
type Developer = {
  tech: string;
  experienceYears: number;
};

let ducHuy: Developer = {
  tech: "TypeScript",
  experienceYears: 1
};

console.log(ducHuy);
console.log(typeof ducHuy); // "object"

// type aliases to the variable

const student :{
    name:string,
    age: number
} = {
    name:"Kha Banh",
    age:19
}
console.log(student);
