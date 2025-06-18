// Practice Questions:-

// ************************************************************************************
// P1
// let age = 20;
// if(age >= 18) {
//     console.log("Eligible tpo vote");
// }
// else {
//     console.log("Not Eligible to vote");
// }



// ************************************************************************************
// p2
// let units = 50;
// if(units%2 === 0){
//     console.log("Even");
// }
// else {
//     console.log("Odd");
// }



// ************************************************************************************
// P3 Student Report Card
// let marks = 75;
// if(marks >= 90) {
//     console.log("Grade - A");
// }
// else if(marks >= 70 && marks < 90) {
//     console.log("Grade - B");
// }
// else if(marks >= 50 && marks < 70) {
//     console.log("Grade - C");
// }
// else {
//     console.log("Grade - F");
// }

// OR

// let marks = 85;
// if(marks >= 90) {
//     console.log("Grade - A");
// }
// else if(marks >= 70) {
//     console.log("Grade - B");
// }
// else if(marks >= 50){
//     console.log("Grade - C");
// }
// else {
//     console.log("Grade - F");
// }



// ************************************************************************************
// P4 ATM Deposit Feedback
// let deposit = 1000;

// if (deposit === 0) {
//     console.log("Zero Deposit");
// }
// else if (deposit > 0) {
//     console.log("Positive Deposit");
// }
// else {
//     console.log("Negative Deposite");
// }



// ************************************************************************************
// P5 Admin Panel Access
// var username = "admin";
// var password = "1234";
// if (username === "admin" && password === "1234") {
//     console.log("Access Granted");
// }
// else {
//     console.log("Access Denied!!");
// }



// ************************************************************************************
// P6 Calender App - Leap Year Checker
// var year = 2016;
// if ((year%4 === 0 && year%100 !== 0) || (year%400 === 0)) {
//     console.log("Leap Year");
// }
// else {
//     console.log("Not a Leap Year");
// }



// ************************************************************************************
// P7 Age Gate for Movie Website - Using ternary operator
// let age = 19;
// let ans = age >= 18 ? "Adult" : "Minor";
// console.log(ans);



// ************************************************************************************
// P8 Game Scoreboard - Highest Score Finder
// let plyr1 = 40;
// let plyr2 = 20;
// let plyr3 = 70;

// if (plyr1 >= plyr2 && plyr1 >= c) {
//     console.log("Max: ", plyr1);
// }
// else if (plyr2 >= plyr1 && plyr2 >= plyr3) {
//     console.log("Max: ", plyr2);
// }
// else {
//     console.log("Max: ", plyr3);
// }



// ************************************************************************************
// P9 Office Management System - Day Scheduler
// let num = 7;

// switch(num) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Enter Valid Number!!");
// }



// ************************************************************************************
// P10 Smart Traffic Control System
// let signalcolor = "Yellow";

// switch(signalcolor) {
//     case "Red":
//         console.log("Stop");
//         break;
//     case "Yellow":
//         console.log("Get Ready");
//         break;
//     case "Green":
//         console.log("Go!!");
//         break;
//     default:
//         console.log("Invalid!!");
// }

// OR

// if (signalcolor === "Red") {
//     console.log("Stop");
// }
// else if (signalcolor === "Yellow") {
//     console.log("Get ready");
// }
// else if (signalcolor === "Green") {
//     console.log("Go!!");
// }
// else {
//     console.log("Invalid Color");
// }



// ************************************************************************************
// P11 Payment System - Valid Amount Check
// let amt = 50;
// if (amt%5 === 0) {
//     console.log("Multiple of 5");
// }
// else {
//     console.log("Not a multiple of 5");
// }



// ************************************************************************************
// P12 Password Strength Indicator
// let password = "ahsvngf@gfg";

// if (password.length > 8) {
//     console.log("Strong Password");
// }
// else {
//     console.log("Weak Password");
// }



// ************************************************************************************
// P13 Classroom Game - FizzBuzz Activity
// let num = 15;

// if (num % 3 === 0 && num % 5 === 0) {
//     console.log("FizzBuzz");
// }
// else if (num % 3 === 0) {
//     console.log("Fizz");
// }
// else if (num % 5 === 0) {
//     console.log("Buzz");
// }
// else {
//     console.log(num);
// }



// ************************************************************************************
// P14 Weather App - Temperature Labeling
// let currtemp = 35;
// if (currtemp >= 35) {
//     console.log("Too hot");
// }
// else if (currtemp >= 28) {
//     console.log("Hot");
// }
// else if (currtemp >= 18) {
//     console.log("Warm");
// }
// else {
//     console.log("Cold");
// }



// ************************************************************************************
// P15 Text Editor - Case Detection
// let text = 'a';

// if (text === text.toUpperCase()) {
//     console.log("Upper Case");
// }
// else {
//     console.log("Lower Case");
// }



// ************************************************************************************
// P16 Form Validation - Age Range Check
// let age = 18;
// if (age >= 10 && age <= 50) {
//     console.log("Form Accepted");
// }
// else {
//     console.log("Form Rejected");
// }



// ************************************************************************************
// P17 E-Commerce Checkout - Discount Rule
// let amt = 1100;

// if (amt >= 1000) {
//     console.log(amt - Math.floor(amt/10));
// }
// else {
//     console.log(amt);
// }



// ************************************************************************************
// P18 Hospital System - Age Group Classification
// let age = 45;

// if (age <= 12) {
//     console.log("Child");
// }
// else if (age <= 18) {
//     console.log("Teenager");
// }
// else if (age <= 59) {
//     console.log("Adult");
// }
// else {
//     console.log("Senior");
// }



// ************************************************************************************
// P19 Smart Assistant - Time Based greeting
// let time = 1

// if (time >= 5 && time < 12) {
//     console.log("Good Morning");
// }
// else if (time >= 12 && time < 16) {
//     console.log("Good Afternoon");
// }
// else if (time >= 16 && time < 19) {
//     console.log("Good Evening");
// }
// else {
//     console.log("Good Night");
// }



// ************************************************************************************
// P20 Multi-Platform login - Email or Phone
// let phnnum = "";
// let email = "ausygd";

// if (phnnum !== "" || email !== "") {
//     console.log("Accepted");
// }
// else {
//     console.log("Rejected");
// }