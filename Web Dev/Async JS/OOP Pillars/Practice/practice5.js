// ### Employee → Manager / Intern (`super` + new fields)
// **Goal:** Extend with additional properties and reuse base behavior.

// **Classes:**
// - `Employee(name)` → `intro()`
// - `Manager(name, dept)` → override `intro()` and show dept (call `super.intro()`)
// - `Intern(name, durationMonths)` → override `intro()`

//     **Acceptance Criteria:**
// - Overridden `intro()` must call `super.intro()` first in `Manager`.


// B2: Employee → Manager/Intern
class Employee {
    // TODO: constructor(name)
    constructor(name) {
        this.name = name;
    }
    // TODO: intro()
    intro() {
        console.log(`Employee Name: ${this.name}`);
    }
}

class Manager extends Employee {
    // TODO: constructor(name, dept)
    constructor(name, dept) {
        super(name);
        this.dept = dept;
    }
    // TODO: intro() // call super.intro() then log dept
    intro() {
        super.intro();
        console.log(`Dept.: ${this.dept}`);
    }
}

class Intern extends Employee {
    // TODO: constructor(name, durationMonths)
    constructor(name, durationMonths) {
        super(name);
        this.durationMonths = durationMonths;
    }
    // TODO: intro() // customized message
    intro() {
        console.log(`Intern Name: ${this.name}, Duration: ${this.durationMonths}`);
    }
}

// TODO: demo all three
let e1 = new Employee("Siddhant");
e1.intro();
let m1 = new Manager("Varun", "SDE");
m1.intro();
let i1 = new Intern("Aditya", "3 Months");
i1.intro();