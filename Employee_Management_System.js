// Create an Employee Class

class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    getDetails() {
        return `${this.name} is a ${this.position} and makes $${this.salary} a year.`
    }
    
}

let jim = new Employee("Jim", 80000, "Developer", "Engineering");
let amanda = new Employee("Amanda", 75000, "Designer", "Marketing");

console.log(jim.getDetails());
console.log(amanda.getDetails());

// Create a Department Class

class Department {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    getDepartmentSalary() {
        return this.employees.reduce((total, employee) => total + employee.salary, 0);
    }
    calculateTotalSalaryWithBonus() {
        return this.employees.reduce((total, employee) => {
            return total + employee.salary + (employee.bonus || 0);
        }, 0);
    }
}


let engineering = new Department("Engineering");
let marketing = new Department("Marketing");

engineering.addEmployee(jim);
marketing.addEmployee(amanda);

console.log(`Total salary for ${engineering.name} department: $${engineering.getDepartmentSalary()}`);
console.log(`Total salary for ${marketing.name} department: $${marketing.getDepartmentSalary()}`);

// Create a Manager Class that Inherits from Employee

class Manager extends Employee {
    constructor(name, salary, position, department, bonus) {
        super(name, salary, position, department);
        this.bonus = bonus;
    }
    getDetails() {
        return `${this.name} is a ${this.position} and makes $${this.salary} a year with a bonus of $${this.bonus} this year.`
    }
}

let kaitlyn = new Manager("Kaitlyn", 100000, "Marketing Manager", "Marketing", 20000);
let james = new Manager("James", 105000, "Engineering Manager", "Engineering", 25000);

console.log(kaitlyn.getDetails());
console.log(james.getDetails());

marketing.addEmployee(kaitlyn);
engineering.addEmployee(james);

// Handle Bonuses for Managers
// The calculation is in the second section

console.log(`Total salary with bonuses for ${engineering.name} department: $${engineering.calculateTotalSalaryWithBonus()}`);
console.log(`Total salary with bonuses for ${marketing.name} department: $${marketing.calculateTotalSalaryWithBonus()}`);

