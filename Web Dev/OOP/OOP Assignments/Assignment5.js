// ## Assignment 6 :-
// ### Description: Connect three plain objects for property lookups: `child -> parent -> grand`. Show that the child can access values from the chain and can override a property.

// ### TODOs
// - TODO 1: Create `grand`, `parent`, `child` with keys `g`, `p`, `c`.
// - TODO 2: Link `child.__proto__ = parent` and `parent.__proto__ = grand`.
// - TODO 3: Read `child.g`, `child.p`, `child.c`.
// - TODO 4: Set `parent.color = "blue"` then `child.color = "red"` and read both times.

let grand = {
    g: "grand"
}

let parent = {
    p: "parent",
    __proto__ : grand
}

let child = {
    c: "child",
    __proto__ : parent
}

console.log(child.g);
console.log(child.p);
console.log(child.c);

parent.color = "blue";
child.color = "red";

console.log(parent.color);
console.log(child.color);