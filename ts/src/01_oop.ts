// ===============================
// OOP TypeScript - Full Example
// ===============================

// 1. Interface (Contract)
// -----------------------
// Interface định nghĩa "hợp đồng"
// Bất kỳ class nào implements thì bắt buộc phải có method work()
interface Workable {
  work(): void;
}


// 2. Abstract Class (Abstraction)
// -------------------------------
// Abstract class dùng làm "khuôn mẫu"
// Không thể tạo instance trực tiếp từ class này
abstract class Employee {
  // protected: truy cập được trong class và class con
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Abstract method (không có body)
  // Class con bắt buộc phải implement
  abstract calculateSalary(): number;

  // Method thường (có body)
  introduce(): void {
    console.log(`Hi, I am ${this.name}`);
  }
}


// 3. Class Developer (Inheritance + Encapsulation + Polymorphism)
// ---------------------------------------------------------------
class Developer extends Employee implements Workable {
  // private: chỉ truy cập được bên trong class này
  private salaryPerHour: number;
  private hours: number;

  constructor(name: string, salaryPerHour: number, hours: number) {
    super(name); // gọi constructor của class cha
    this.salaryPerHour = salaryPerHour;
    this.hours = hours;
  }

  // Implement abstract method (Polymorphism - override)
  calculateSalary(): number {
    return this.salaryPerHour * this.hours;
  }

  // Implement interface method
  work(): void {
    console.log(`${this.name} is coding...`);
  }
}


// 4. Class Manager (Inheritance + Polymorphism)
// ---------------------------------------------
class Manager extends Employee implements Workable {
  private fixedSalary: number;

  constructor(name: string, fixedSalary: number) {
    super(name);
    this.fixedSalary = fixedSalary;
  }

  // Override method (đa hình)
  calculateSalary(): number {
    return this.fixedSalary;
  }

  work(): void {
    console.log(`${this.name} is managing...`);
  }
}


// 5. Main Program (Polymorphism thực tế)
// --------------------------------------

// Tạo danh sách nhân viên (kiểu Employee)
// 👉 Đây là điểm quan trọng: dùng kiểu cha để chứa nhiều kiểu con khác nhau
const employees: Employee[] = [
  new Developer("Tan", 10, 160),
  new Manager("An", 3000)
];

// Duyệt danh sách
employees.forEach(emp => {
  emp.introduce(); // method từ class cha

  // Polymorphism:
  // cùng 1 method nhưng mỗi class con xử lý khác nhau
  console.log("Salary:", emp.calculateSalary());
});


// ===============================
// Tổng kết OOP trong ví dụ này
// ===============================

// 1. Encapsulation (Đóng gói)
// - private: salaryPerHour, hours, fixedSalary
// - protected: name

// 2. Inheritance (Kế thừa)
// - Developer, Manager extends Employee

// 3. Abstraction (Trừu tượng)
// - abstract class Employee
// - abstract method calculateSalary()

// 4. Polymorphism (Đa hình)
// - cùng method calculateSalary()
// - nhưng Developer và Manager xử lý khác nhau

// 5. Interface
// - Workable: ép class phải có method work()