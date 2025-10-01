// Assignment 1 :-  30/09/2025
// ### Description: Make a small object to store a person’s name and age, and provide two methods: one to update the age and one to return a short info string.

// ### TODOs
// - TODO 1: Create an object with `name` and `age`.
// - TODO 2: Add `setAge(newAge)` to change `age`.
// - TODO 3: Add `info()` to return `"Name (Age)"`.


let obj = {
    name: "Sid",
    age: "20",

    setAge: function(newAge) {
        this.age = newAge;
    },

    info: function() {
        console.log(this.name,"(", this.age, ")");
    }
}

console.log(obj.age);

obj.setAge(23);
obj.info();