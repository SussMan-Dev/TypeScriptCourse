// Inheritance is one of the 4 attributes of OOP.
// It allows a child class to reuse fields and methods from a parent class.
// For example, the Cat class can use the constructor and sound method from the Animal class.
class Animal {
    protected _name: string;
    
    constructor(name:string){
        this._name = name
    }

    sound(){
        console.log(`the animal named ${this._name} is making a sound`);
    }
}

class Cat extends Animal{
    meow(){
        console.log("meow meow");
    }
}

let newCat =  new Cat("Meo Long Dai")

newCat.sound()
newCat.meow()
