// if you didnt know what is function, go to javaScripts course
// with type + javascript, now you can control the output value exactly 

//btw we got 3 ways to declare the function
// arrow function
const yourName = (name:string): string => {
    return name
}
console.log(yourName("huy"))

//function declaration
function Age(age:number):number{
    return age
}
console.log(Age(20));

// function expresstion
const major = function(major:string):string{
    return major
} 
console.log(major("IT"));

console.log(`your name is ${yourName("huy")} and you are ${Age(20)} years old and your major is ${major("IT")}`);



