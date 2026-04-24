// Class trong JavaScript

// Class giúp tạo ra các object có cùng thuộc tính và phương thức.
// Đồng thời tăng tính tái sử dụng code và dễ dàng quản lý code hơn.

// Ôn tập:
// Thuộc tính (Property)
// Phương thức (Method)
// Kế thừa (Inheritance)
// Khai báo thuộc tính
// static

class Engine {
  constructor(engineName) {
    this.engineName = engineName
  }

  startEngine() {
    console.log(`Engine ${this.engineName} is starting...`)
  }
}

class Car extends Engine {
  constructor(engineName, brandCar) {
    super(engineName)
    // Thuộc tính
    this.brandCar = brandCar
  }

  run() {
    console.log(`Car ${this.brandCar} is running...`)
  }
}

// Tạo ra instance từ class Car
const civic = new Car('Vitect 1.5 Turbo', 'Honda Civic')
const camry = new Car('V6 3.5', 'Toyota Camry')

console.log(civic)
console.log(camry)

// Tạo class máy cắt cỏ
class LawnMower extends Engine {
  brandLawnMower = 'Noname'
  constructor(engineName, brandLawnMower) {
    super(engineName)
    // Gán giá trị
    this.brandLawnMower = brandLawnMower
  }
  cutGrass() {
    console.log(`LawnMower ${this.brandLawnMower} is cutting grass...`)
    this.hello()
  }
  static hello() {
    console.log('Hello')
  }
}

const hondaLawnMower = new LawnMower('Honda 4-stroke', 'Honda 4-stroke')
// hondaLawnMower.startEngine()
// hondaLawnMower.cutGrass()
// hondaLawnMower.hello()
// LawnMower.hello()