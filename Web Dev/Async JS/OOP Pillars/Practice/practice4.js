// ### Device → Phone / Laptop (Method Override)
// **Goal:** Practice `extends` and overriding instance methods.

// **Classes:**
// - `Device(name)` → `info()`
// - `Phone(name, os)` → override `info()`
// - `Laptop(name, ram)` → override `info()`

//     **Acceptance Criteria:**
// - `super` used only in constructor where needed.
// - Output clearly identifies type and details.


// B1: Device → Phone/Laptop
class Device {
    // TODO: constructor(name)
    constructor(name) {
        this.name = name;
    }
    // TODO: info()
    info() {
        console.log(`This device is ${this.name}`);
    }
}

class Phone extends Device {
    // TODO: constructor(name, os)
    constructor(name, os) {
        super(name);
        this.os = os;
    }
    // TODO: info() // override
    info() {
        console.log(`Device: ${this.name}, OS: ${this.os}`);
    }
}

class Laptop extends Device {
    // TODO: constructor(name, ram)
    constructor(name, ram) {
        super(name);
        this.ram = ram;
    }
    // TODO: info() // override
    info() {
        console.log(`Device: ${this.name}, RAM: ${this.ram}`);
    }
}

// TODO: demo with multiple instances
let d1 = new Phone("Samsung", "One UI");
let d2 = new Laptop("Samsung", "16 GB");
d1.info();
d2.info();