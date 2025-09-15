let unique = document.getElementById('unique');
unique.className = "c1 c2";
console.log(unique.className);

// Add() -
unique.classList.add("box");

// Remove() -
unique.classList.remove("shadow");

// toggle() -
unique.classList.toggle("shadow");

// contains() -
let hasgreen = unique.classList.contains("green");
console.log(hasgreen);

// replace() -
unique.classList.replace("shadow", "rishi");