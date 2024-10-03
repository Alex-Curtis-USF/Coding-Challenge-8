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
}

let engineering = new Department("Engineering");
let marketing = new Department("Marketing");

engineering.addEmployee(jim);
marketing.addEmployee(amanda);

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

