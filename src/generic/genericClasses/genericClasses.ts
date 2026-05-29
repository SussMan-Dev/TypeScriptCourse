// Why should we use generic in a class?
// Generic helps the class become more flexible and reusable.
// Instead of fixing the type of properties like string or number,
// we can let the user decide the type when creating an object.
//
// Benefits:
// 1. Reusable: one class can work with many different data types.
// 2. Type-safe: TypeScript still checks the correct type.
// 3. Easy to maintain: we don't need to create many similar classes
//    for different types of data.

// normal class
// class ITsupport {
//     name: string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }

// class with generic
class ITsupport<T, U> {
    name: T;
    age: U;

    constructor(name: T, age: U) {
        this.name = name;
        this.age = age;
    }

    info(): void {
        console.log(`${this.name}, ${this.age}`);
    }
}

const itsp = new ITsupport<string, number>("Duc Huy", 20);
itsp.info();