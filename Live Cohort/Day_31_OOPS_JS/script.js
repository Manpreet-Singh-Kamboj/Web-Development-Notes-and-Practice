class Toffee {
  constructor(name) {
    this.name = name;
    // GIving Constant value in Constructor function will lead to extra memory usage.
    // this.price = 10;

    // If we have value in both protoType and Constructor both, we will first try to get it from the constructor and if not found, we will try to get it from the protoType.
    this.price = 34;
  }
}
// Storing it in propType will save memory. as It will be shared across all the objects.
Toffee.prototype.price = 10;
Toffee.prototype.getPrice = function () {
  return this.price;
};

const t1 = new Toffee("Just Jelly");
const t2 = new Toffee("Alpenliebe");

class Employee {
  constructor(name, age, id, salary) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.salary = salary;
  }
}

Employee.prototype.getDetails = function () {
  return `Id: ${this.id}, Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`;
};

// Employee.prototype.getDetails = function () {
//   return `Id: ${this.id}, Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`;
// };

const e1 = new Employee("John", 23, 1, 10000);
const e2 = new Employee("Jane", 24, 2, 20000);
const e3 = new Employee("Jack", 25, 3, 30000);
const employees = [e1, e2, e3];
employees.forEach((e) => console.log(e.getDetails()));
