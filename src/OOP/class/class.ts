class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  greet(): void {
    console.log(`Hello, tôi là ${this.name}`)
  }
}

const p1 = new Person("An", 20)

p1.greet()