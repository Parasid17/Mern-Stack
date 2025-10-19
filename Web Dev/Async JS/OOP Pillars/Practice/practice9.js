// ### Shape Areas (Override `area()`)
// **Goal:** Return numeric areas polymorphically.

// **Classes:**
// - `Shape` → `area()` default 0
// - `Circle(r)` → override
// - `Rectangle(w, h)` → override
// - `Triangle(b, h)` → override (`0.5 * b * h`)

//     **Acceptance Criteria:**
// - Sum total area of a mixed array in one loop.



// C3: Shape Areas
class Shape {
    // TODO: area()
    area() {
        console.log("Calculate Area");
    }
}
class Circle extends Shape {
    // TODO: constructor(r)
    constructor(r) {
        super();
        this.r = r;
    }
    // TODO: area()
    area() {
        console.log(`Area of Circle: ${Math.PI * this.r * this.r}`);
    }
}
class Rectangle extends Shape {
    // TODO: constructor(w, h)
    constructor(w, h) {
        super();
        this.w = w;
        this.h = h;
    }
    // TODO: area()
    area() {
        console.log(`Area of Rectangle: ${this.w * this.h}`);
    }
}
class Triangle extends Shape {
    // TODO: constructor(b, h)
    constructor(b, h) {
        super();
        this.b = b;
        this.h = h;
    }
    // TODO: area()
    area() {
        console.log(`Area of Triangle: ${0.5 * this.b * this.h}`);
    }
}

// TODO: demo: array of shapes → compute total area
const arr = [new Shape(), new Circle(3), new Rectangle(4,6), new Triangle(3,4)];

arr.forEach(a => {
    a.area();
});