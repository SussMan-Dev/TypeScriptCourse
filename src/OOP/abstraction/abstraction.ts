// Abstraction means hiding unnecessary details and showing only what is needed.
// An abstract class can contain normal methods and abstract methods.
// Abstract methods do not have a body, so child classes must implement them.
abstract class APerson {
    protected _name: string;

    constructor(name: string) {
        this._name = name;
    }

    introduce(): void {
        console.log(`Hello, my name is ${this._name}`);
    }

    abstract doWork(): void;
}

class AStudent extends APerson {
    doWork(): void {
        console.log(`${this._name} is studying TypeScript`);
    }
}

class ATeacher extends APerson {
    doWork(): void {
        console.log(`${this._name} is teaching OOP`);
    }
}

// You cannot create an object directly from an abstract class.
// const person = new Person("An"); // Cannot create an instance of an abstract class.

const astudent = new AStudent("An");
const ateacher = new ATeacher("Loi");

astudent.introduce();
astudent.doWork();

ateacher.introduce();
ateacher.doWork();

let anbeoo = {
    name: "123",
    getName(name:string){
        console.log(name);
        
    }
}
console.log(anbeoo);

console.log(astudent);

