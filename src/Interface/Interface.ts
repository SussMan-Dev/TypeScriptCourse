// Interface in TypeScript
// An interface is a blueprint used to describe
// the properties and methods of an object.
// It helps enforce type checking and code consistency.
interface Student{
    name:string,
    age: number,
    printInfo():void
}

const newStudent:Student = {
    name:"Duc Huy",
    age:20,
    printInfo():void {
        console.log(`my name is ${this.name} and I'm ${this.age} years old`);
    }
}
newStudent.printInfo()