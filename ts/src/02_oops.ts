// ============================================
// FULL OOP TYPECRIPT (COMMENT CHI TIẾT)
// ============================================


// ============================================
// 1. INTERFACE (Contract)
// ============================================
// Interface dùng để định nghĩa "hợp đồng"
// Bất kỳ class nào implements interface này
// đều BẮT BUỘC phải có method work()

interface Workable {
  work(): void; // method không có body
}


// ============================================
// 2. ABSTRACT CLASS (ABSTRACTION)
// ============================================
// Abstract class dùng làm "khuôn mẫu chung"
// ❌ Không thể new trực tiếp
// ✅ Class con phải kế thừa (extends)

abstract class Employee {
  // protected:
  // - truy cập được trong class này
  // - và trong class con
  protected name: string;

  // static:
  // - thuộc về class, không thuộc instance
  // - gọi bằng: Employee.company
  static company: string = "ABC Corp";

  constructor(name: string) {
    this.name = name;
  }

  // abstract method:
  // - KHÔNG có body
  // - class con bắt buộc phải implement
  abstract calculateSalary(): number;

  // method bình thường (có body)
  introduce(): void {
    console.log(`Hi, I am ${this.name}`);
  }

  // static method
  static getCompany(): string {
    return Employee.company;
  }
}


// ============================================
// 3. DEVELOPER CLASS
// ============================================
// Thể hiện:
// - Inheritance (extends)
// - Encapsulation (private + getter/setter)
// - Polymorphism (override method)

class Developer extends Employee implements Workable {
  // private:
  // - chỉ truy cập bên trong class này
  private _salaryPerHour: number;
  private _hours: number;

  // readonly:
  // - chỉ được gán 1 lần
  // - giống "final" trong Java
  readonly role: string = "Developer";

  constructor(name: string, salaryPerHour: number, hours: number) {
    super(name); // gọi constructor class cha
    this._salaryPerHour = salaryPerHour;
    this._hours = hours;
  }

  // ========================
  // Getter (Encapsulation)
  // ========================
  // Cho phép đọc giá trị
  get salaryPerHour(): number {
    return this._salaryPerHour;
  }

  // ========================
  // Setter (Encapsulation)
  // ========================
  // Cho phép set giá trị + validate
  set salaryPerHour(value: number) {
    if (value <= 0) {
      throw new Error("Salary must be > 0");
    }
    this._salaryPerHour = value;
  }

  // ========================
  // Polymorphism (override)
  // ========================
  // Cùng tên method nhưng logic khác
  calculateSalary(): number {
    return this._salaryPerHour * this._hours;
  }

  // implement từ interface
  work(): void {
    console.log(`${this.name} is coding...`);
  }
}


// ============================================
// 4. MANAGER CLASS
// ============================================
// Thể hiện polymorphism + encapsulation

class Manager extends Employee implements Workable {
  private _fixedSalary: number;

  constructor(name: string, fixedSalary: number) {
    super(name);
    this._fixedSalary = fixedSalary;
  }

  // getter
  get fixedSalary(): number {
    return this._fixedSalary;
  }

  // setter
  set fixedSalary(value: number) {
    if (value < 0) {
      throw new Error("Invalid salary");
    }
    this._fixedSalary = value;
  }

  // override method (đa hình)
  calculateSalary(): number {
    return this._fixedSalary;
  }

  work(): void {
    console.log(`${this.name} is managing...`);
  }
}


// ============================================
// 5. METHOD OVERLOADING (TypeScript style)
// ============================================
// TypeScript không có overloading thật như Java
// → chỉ là "giả lập" bằng nhiều signature

class MathUtil {
  // khai báo kiểu (overload signature)
  static add(a: number, b: number): number;
  static add(a: string, b: string): string;

  // implementation thật
  static add(a: any, b: any): any {
    return a + b;
  }
}


// ============================================
// 6. MAIN PROGRAM
// ============================================

// Polymorphism:
// dùng kiểu cha (Employee)
// nhưng chứa nhiều class con khác nhau

const employees: Employee[] = [
  new Developer("Tan", 10, 160),
  new Manager("An", 3000)
];

employees.forEach(emp => {
  // method từ class cha
  emp.introduce();

  // polymorphism:
  // mỗi class con tính khác nhau
  console.log("Salary:", emp.calculateSalary());
});


// ============================================
// 7. STATIC USAGE
// ============================================

console.log("Company:", Employee.getCompany());


// ============================================
// 8. GETTER / SETTER USAGE
// ============================================

const dev = new Developer("Tuan", 20, 100);

// setter (có validate)
dev.salaryPerHour = 25;

// getter
console.log(dev.salaryPerHour);


// ============================================
// 9. OVERLOADING USAGE
// ============================================

console.log(MathUtil.add(1, 2));       // number
console.log(MathUtil.add("a", "b"));   // string



// ============================================
// 🔥 TỔNG KẾT OOP (FULL)
// ============================================

// 1. Encapsulation (Đóng gói)
// - private: _salaryPerHour, _hours, _fixedSalary
// - protected: name
// - getter/setter: kiểm soát truy cập

// 2. Inheritance (Kế thừa)
// - Developer, Manager extends Employee

// 3. Abstraction (Trừu tượng)
// - abstract class Employee
// - abstract method calculateSalary()

// 4. Polymorphism (Đa hình)
// - cùng method calculateSalary()
// - nhưng mỗi class xử lý khác nhau

// 5. Interface
// - Workable ép class phải có method work()

// 6. Static
// - thuộc về class, không thuộc object

// 7. Readonly
// - role không thay đổi sau khi khởi tạo

// 8. Overloading (giả lập)
// - nhiều kiểu input cho cùng 1 function