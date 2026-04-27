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
  // _ : ❗ Chỉ là quy ước đặt tên
  // # : ✅ Private thật do JavaScript hỗ trợ
  // 🔰 private - (JavaScript KHÔNG hỗ trợ từ khóa private, nhưng có thể dùng # để tạo private field)
  #breed;
  constructor(name, breed) {
    super(name);
    this.#breed = breed; // "protected-like" (JS không có protected thật)
  }

  // 🔰	Đóng gói - encapsulation (getter)
  get breed() {
    return this.#breed;
  }

  // 🔰	Đóng gói - encapsulation (setter)
  set breed(value) {
    this.#breed = value;
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
dog.breed = "Golden Retriever";
console.log(dog.breed);  // Golden Retriever