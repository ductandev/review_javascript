// =============================================
//            ✅ JavaScript (OOP chuẩn)
// =============================================

class Animal {
  constructor(name) {
    this.name = name; // public
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this._breed = breed; // "protected-like" (JS không có protected thật)
  }

  // 🔰	Đóng gói - encapsulation (getter)
  get breed() {
    return this._breed;
  }

  // 🔰	Đa hình - polymorphism (override)
  speak() {
    console.log(`${this.name} barks`);
  }
}

// sử dụng
const dog = new Dog("Buddy", "Husky");
dog.speak();             // Buddy barks
console.log(dog.breed);  // Husky