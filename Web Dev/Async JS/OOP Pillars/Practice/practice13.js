// ### Storage Family (Inheritance + Polymorphism)
// **Goal:** Same `save(data)` API with different behaviors.

// **Classes:**
// - `Storage` → `save(data)` (base)
// - `MemoryStorage` → stores into internal array
// - `FileStorage` → logs “saved to file: …”

//     **Acceptance Criteria:**
// - Iterate a mixed array; call `save` uniformly.



// E1: Storage Family
class Storage {
    // TODO: save(data)
    save(data) {
        console.log(`Data: ${data}`);
    }
}
class MemoryStorage extends Storage {
    // TODO: constructor() // internal array
    constructor() {
        super();
        this.arr = [];
    }
    // TODO: save(data)
    save(data) {
        this.arr.push(data);
        console.log(this.arr.length);
    }
}
class FileStorage extends Storage {
    // TODO: save(data)
    save(data) {
        console.log(`saved to file: ${data}`);
    }
}

// TODO: demo: mixed storages saving "hello"
const s1 = new Storage();
s1.save("hello!");
const m1 = new MemoryStorage();
m1.save("hello!");
m1.save("hello!");

const f1 = new FileStorage();
f1.save("hello!");