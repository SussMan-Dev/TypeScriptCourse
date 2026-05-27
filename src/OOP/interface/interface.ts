// An interface describes a contract that a class or object must follow.
// It defines required property names, method names, parameter types, and return types.
interface Contract {
    name: string;
    age: number;

    attendanceCheck(): boolean;
}

class Students implements Contract {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    attendanceCheck(): boolean {
        return true;
    }
}

const studentObject: Contract = {
    name: "Đức Huy 2",
    age: 21,

    attendanceCheck(): boolean {
        return true;
    }
};

const newStudent1 = new Students("Đức Huy", 20);
console.log(`Interface with class`);

console.log(newStudent1.name);
console.log(newStudent1.age);
console.log(newStudent1.attendanceCheck());

console.log(`interface with object`);
console.log(studentObject);

