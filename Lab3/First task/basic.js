"use strict";

// #1
// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).
let admin, name;
name = "John";
admin = name;
alert(admin);

// #2
// Create a variable with the name of our planet. How would you name such a variable?
// Create a variable to store the name of a current visitor to a website. How would you name that variable?
let planet = "Earth"; //let ourPlanet*
let visitor = "John"; // let currentUserName*

// #3 What is the output of the script?
let name = "Ilya";
alert(`hello ${1}`); // 1
alert(`hello ${"name"}`); // name
alert(`hello ${name}`); // ? Ilya

// #4 Create a web-page that asks for a name and outputs it.
let name = prompt("What is your name?", "");
alert(`Your name is ${name}`);

// #5 What are the final values of all variables a, b, c and d after the code below?
let a = 1,
  b = 1;
let c = ++a; // a = 2, c = 2
let d = b++; // b = 2, d = 1

// #6 What are the values of a and x after the code below?
let a = 2;
let x = 1 + (a *= 2); // a = 4, x = 5

// #7 What are results of these expressions?
console.log("" + 1 + 0); // "10"
console.log("" - 1 + 0); // -1
console.log(true + false); // 1
console.log(6 / "3"); // 2
console.log("2" * "3"); // 6
console.log(4 + 5 + "px"); // "9px"
console.log("$" + 4 + 5); // "$45"
console.log("4" - 2); // 2
console.log("4px" - 2); // NaN
console.log("  -9  " + 5); // "  -9  5"
console.log("  -9  " - 5); // -14
console.log(null + 1); // 1
console.log(undefined + 1); // NaN
console.log(" \t \n" - 2); // -2

// #8 Fix the addition
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);
alert(a + b); // 12

let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);
alert(a + b); // 3

// #9 What will be the result for these expressions?
console.log(5 > 4); // true
console.log("apple" > "pineapple"); // false
console.log("2" > "12"); // true
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(null == "\n0\n"); // false
console.log(null === +"\n0\n"); // false

// #10 Will alert be shown?
if ("0") {
  alert("Hello"); // Yes, because is not empty string
}

// #11
// Using if..else, write the code which gets a number via prompt and then shows in alert:
// 1, if the value is greater than zero,
// -1, if less than zero,
// 0, if equals zero.
// In this task we assume that the input is always a number.

let number = prompt("Enter a number", 0);
if (number > 0) {
  alert(1);
} else if (number < 0) {
  alert(-1);
} else {
  alert(0);
}

// #12 Rewrite this if using the conditional operator '?':
let result;
if (a + b < 4) {
  result = "Below";
} else {
  result = "Over";
}
let result = a + b < 4 ? "Below" : "Over";

// #13 Rewrite if..else using multiple ternary operators '?'.
// For readability, it’s recommended to split the code into multiple lines.
let message;
if (login == "Employee") {
  message = "Hello";
} else if (login == "Director") {
  message = "Greetings";
} else if (login == "") {
  message = "No login";
} else {
  message = "";
}

let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";

// #14 What is the code below going to output?
alert(null || 2 || undefined); // 2
alert(alert(1) || 2 || alert(3)); // 1, 2
alert(1 && null && 2); // null
alert(alert(1) && alert(2)); // 1, undefined
alert(null || (2 && 3) || 4); // 3

// #15 Write an “if” condition to check that age is between 14 and 90 inclusively.
let age = prompt("Enter your age");
if (age >= 14 && age <= 90) {
  alert("Age is between 14 and 90");
}

// #16 Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.
let age = prompt("Enter your age");
if (!(age >= 14 && age <= 90)) {
  alert("Age is not between 14 and 90");
}
let age = prompt("Enter your age");
if (age < 14 || age > 90) {
  alert("Age is not between 14 and 90");
}

// #17 Which of these alerts are going to execute?
// What will the results of the expressions be inside if(...)?
if (-1 || 0) alert("first"); // true
if (-1 && 0) alert("second"); // false
if (null || (-1 && 1)) alert("third"); // true

// #18 What is the last value alerted by this code? Why?
let i = 3;
while (i) {
  alert(i--); // 1
}

// #19 Both loops alert the same values, or not?
// The prefix form ++i:

let i = 0;
while (++i < 5) alert(i); // 1, 2, 3, 4
// The postfix form i++

let i = 0;
while (i++ < 5) alert(i); // 1, 2, 3, 4, 5

// #20 Both loops alert same values or not?
// The postfix form:
for (let i = 0; i < 5; i++) alert(i); // 0, 1, 2, 3, 4
// The prefix form:
for (let i = 0; i < 5; ++i) alert(i); // 0, 1, 2, 3, 4

// #21 Use the for loop to output even numbers from 2 to 10.
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert(i);
  }
}

// #22 Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).
for (let i = 0; i < 3; i++) {
  alert(`number ${i}!`);
}
// Rewrite:
let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

// #23 Output prime numbers
let n = 10;
nextPrime: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  console.log(i);
}

// #24 Write the code using if..else which would correspond to the following switch:
if (browser == "Edge") {
  alert("You've got the Edge!");
} else if (
  browser == "Chrome" ||
  browser == "Firefox" ||
  browser == "Safari" ||
  browser == "Opera"
) {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}

// #25 Rewrite the code below using a single switch statement:
let a = +prompt("a?", "");

switch (a) {
  case 0:
    alert(0);
    break;

  case 1:
    alert(1);
    break;

  case 2:
  case 3:
    alert("2,3");
    break;
}

// #26 The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Did parents allow you?");
  }
}

// Using a question mark operator ?
// Using OR ||
function checkAge(age) {
  return age > 18 ? true : confirm("Did parents allow you?");
}
function checkAge(age) {
  return age > 18 || confirm("Did parents allow you?");
}

// #27 Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}
let x = prompt("x?", "");
let n = prompt("n?", "");
if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert(pow(x, n));
}

// #28 Replace Function Expressions with arrow functions in the code below:
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function () {
    alert("You agreed.");
  },
  function () {
    alert("You canceled the execution.");
  }
);

const ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);
