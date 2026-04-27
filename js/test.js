class Animal {
  constructor(name) {
    this.name = name;
  }

  getSpkeak() {
    console.log(`${this.name} is spkeaking`)
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name)
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} make a sound`)
  }
  getSpkeak() {
    console.log(`${this.name} is override`)
  }
}

const dog = new Dog("Bông", "Mèo")
dog.speak();
dog.getSpkeak();
