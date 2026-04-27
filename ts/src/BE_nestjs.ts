// ============================================
// NESTJS-LIKE BACKEND (SIMPLIFIED)
// ============================================

// ============================================
// 1. DTO (Data Transfer Object)
// ============================================
// Dùng để định nghĩa dữ liệu đầu vào

type CreateEmployeeDto = {
  name: string;
  type: "developer" | "manager";
  salaryPerHour?: number;
  hours?: number;
  fixedSalary?: number;
};


// ============================================
// 2. ENTITY (model dữ liệu)
// ============================================

class Employee {
  constructor(
    public name: string,
    public type: "developer" | "manager"
  ) { }
}


// ============================================
// 3. INTERFACE (Strategy Pattern)
// ============================================
// Thay vì abstract class → dùng interface

interface SalaryStrategy {
  calculate(): number;
}


// ============================================
// 4. IMPLEMENT STRATEGY
// ============================================

class DeveloperSalary implements SalaryStrategy {
  constructor(
    private salaryPerHour: number,
    private hours: number
  ) { }

  calculate(): number {
    return this.salaryPerHour * this.hours;
  }
}

class ManagerSalary implements SalaryStrategy {
  constructor(private fixedSalary: number) { }

  calculate(): number {
    return this.fixedSalary;
  }
}


// ============================================
// 5. SERVICE (BUSINESS LOGIC)
// ============================================
// Đây là nơi quan trọng nhất trong NestJS

class EmployeeService {

  // factory tạo strategy (composition thay vì inheritance)
  private createStrategy(dto: CreateEmployeeDto): SalaryStrategy {
    if (dto.type === "developer") {
      return new DeveloperSalary(dto.salaryPerHour!, dto.hours!);
    }
    return new ManagerSalary(dto.fixedSalary!);
  }

  // xử lý nghiệp vụ
  createEmployee(dto: CreateEmployeeDto) {
    const employee = new Employee(dto.name, dto.type);

    const strategy = this.createStrategy(dto);

    return {
      ...employee,
      salary: strategy.calculate()
    };
  }
}


// ============================================
// 6. CONTROLLER (API LAYER)
// ============================================
// Giả lập controller của NestJS

class EmployeeController {
  constructor(private employeeService: EmployeeService) { }

  create(dto: CreateEmployeeDto) {
    return this.employeeService.createEmployee(dto);
  }
}


// ============================================
// 7. APP (GIẢ LẬP DI CONTAINER)
// ============================================

// NestJS sẽ tự inject, nhưng ở đây ta làm tay
const employeeService = new EmployeeService();
const employeeController = new EmployeeController(employeeService);


// ============================================
// 8. TEST API
// ============================================

const dev = employeeController.create({
  name: "Tan",
  type: "developer",
  salaryPerHour: 10,
  hours: 160
});

const manager = employeeController.create({
  name: "An",
  type: "manager",
  fixedSalary: 3000
});

console.log(dev);
console.log(manager);


// ============================================
// 🔥 TỔNG KẾT (RẤT QUAN TRỌNG)
// ============================================

// ❌ KHÔNG dùng:
// - abstract class phức tạp
// - kế thừa nhiều tầng

// ✅ THAY BẰNG:
// - interface (SalaryStrategy)
// - composition (inject strategy)
// - service xử lý logic
// - controller gọi service

// 👉 Đây chính là:
// SOLID (đặc biệt là Open/Closed Principle)

// Muốn thêm loại nhân viên mới:
// 👉 chỉ cần thêm class strategy mới
// 👉 KHÔNG cần sửa code cũ



// 🚀 Bạn vừa học được gì (rất giá trị)
// 1. Từ OOP giáo trình ➜ Clean Architecture
// không còn “class kế thừa lung tung”
// code dễ mở rộng hơn

// 2. Pattern thực tế
// Strategy Pattern
// Dependency Injection
// Separation of Concerns

// 3. Điều dev NodeJS senior hay làm
// 👉 Không hỏi:
// “dùng abstract class không?”

// 👉 Mà hỏi:
// “logic này nên tách thành service hay strategy?”

// 🎯 Câu chốt quan trọng

// 👉 OOP trong TypeScript dùng để:
// tổ chức code
// không phải để “show class”