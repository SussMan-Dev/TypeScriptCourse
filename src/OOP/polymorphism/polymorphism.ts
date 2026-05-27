// Polymorphism means different classes can be treated through the same type.
// Here, any class that implements SoundMaker can be used as a SoundMaker.
interface SoundMaker {
    makeSound(): void;
}

class Loi implements SoundMaker {
    makeSound(): void {
        console.log("Loi is making a sound");
    }
}

class An implements SoundMaker {
    makeSound(): void {
        console.log("An is making a sound");
    }
}

const an1 = new An();
const loi1 = new Loi();

// This array can store different classes because both An and Loi follow SoundMaker.
const arr: SoundMaker[] = [an1, loi1];

arr.forEach((person) => {
    // The same method call behaves differently depending on the real object.
    person.makeSound();
});
