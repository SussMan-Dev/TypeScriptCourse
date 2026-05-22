// Access modifiers in TypeScript:
// public: can be accessed anywhere, inside the class, in child classes, and from outside objects.
// private: can only be accessed inside the class where it is declared.
// protected: can be accessed inside the class and its child classes, but not from outside objects.
class Dog{
    public name:string
    private age:number
    protected color:string
    constructor(name:string,age:number,color:string){
        this.name = name,
        this.age = age,
        this.color = color
    }
}
class Husky extends Dog{
    showColor(){
        console.log(this.color);
    }
}
let newDog = new Dog("Dog1",25,"black")
console.log(newDog.name);
// console.log(newDog.age); //Property 'age' is private and only accessible within class 'Dog'.
// console.log(newDog.color); //Property 'color' is protected and only accessible within class 'Dog' and its subclasses.

let newHusky = new Husky("Husky1",3,"white")
newHusky.showColor()