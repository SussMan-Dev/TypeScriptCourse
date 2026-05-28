// Abstraction means hiding unnecessary details and showing only what is needed.
// An abstract class can contain normal methods and abstract methods.
// Abstract methods do not have a body, so child classes must implement them.
abstract class AbstractPerson {
    protected _name: string;

    constructor(name: string) {
        this._name = name;
    }

    introduce(): void {
        console.log(`Hello, my name is ${this._name}`);
    }

    abstract doWork(): void;
}

class Learner extends AbstractPerson {
    doWork(): void {
        console.log(`${this._name} is studying TypeScript`);
    }
}

class Instructor extends AbstractPerson {
    doWork(): void {
        console.log(`${this._name} is teaching OOP`);
    }
}

// You cannot create an object directly from an abstract class.
// const person = new AbstractPerson("An"); // Cannot create an instance of an abstract class.

const learner = new Learner("An");
const instructor = new Instructor("Loi");

learner.introduce();
learner.doWork();

instructor.introduce();
instructor.doWork();
