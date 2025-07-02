// 1. given number is multiple of 3 or not e.g.10900

var num = 10900;
if (num % 3 == 0) console.log('given number is multiple of 3');
else console.log('given number is not multiple of 3');



// 2. check particular sub-word exist in a string or not e.g. i am learning js: 'js' exists or not

var string = 'i am learning js';
if (string.includes('js') == true) console.log("'js' exists");
else console.log("'js' not exists");



// 3. calculate complex interest ((p/r )* t) / 100 ): take principle, rate and time from user
// Check 'Task15.3.html' file for answer

// let p = parseFloat(prompt("Enter Principle amount:"));
// var r = parseFloat(prompt("Enter Rate of interest:"));
// var t = parseFloat(prompt("Enter Time period:"));

// var complexInterest = (((p / r) * t) / 100).toFixed(2);

// alert("The Complex Interest for your inputs is " + complexInterest);