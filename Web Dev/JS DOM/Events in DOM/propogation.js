let parent = document.getElementById('parent');
let child = document.getElementById('child');
let innerChild = document.getElementById('innerChild');

// Bubbling phase (goes from target[innerChild] to root[body] i.e upwards)
// document.body.addEventListener('click', () => {
//     console.log("Body Clicked");
// });

// parent.addEventListener('click', () => {
//     console.log("Parent Clicked");
// });

// child.addEventListener('click', () => {
//     console.log("Child Clicked");
// });

// innerChild.addEventListener('click', () => {
//     console.log("InnerChild Clicked");
// });

// In Console - InnerChild Clicked
//              Child Clicked
//              Parent Clicked
//              Body Clicked



// -----------------------------------------------------------------------------------------------
// Capturing phase (goes from root[body] to target[innerChild] i.e downwards)
// document.body.addEventListener('click', () => {
//     console.log("Body Clicked");
// }, true);

// parent.addEventListener('click', () => {
//     console.log("Parent Clicked");
// }, true);

// child.addEventListener('click', () => {
//     // e.stopPropagation();
//     console.log("Child Clicked");
// }, true);

// innerChild.addEventListener('click', () => {
//     console.log("InnerChild Clicked");
// }, true);

// In Console - Body Clicked
//              Parent Clicked
//              Child Clicked
//              InnerChild Clicked



// -----------------------------------------------------------------------------------------------
// stoppropogation
// document.body.addEventListener('click', () => {
//     console.log("Body Clicked");
// });

// parent.addEventListener('click', () => {
//     console.log("Parent Clicked");
// });

// child.addEventListener('click', (e) => {
//     e.stopPropagation();
//     console.log("Child Clicked");
// });

// innerChild.addEventListener('click', () => {
//     console.log("InnerChild Clicked");
// });

// In Console - InnerChild Clicked
//              Child Clicked
//  and then it will stop