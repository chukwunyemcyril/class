//dhdhdhdhdhdh
/*
This is my first JavaScript
*/

/**
 * VARIABLE DECLARATION
 *
 */

//BLOCK SCOPE VARIABLE - let and const
//GLOBAL SCOPE VARIABLE - var

// var name;
// let firstname;
// const age = 12;

/**
 * NAMING CONVENTIONS
 * PASCAL CASE
 * SNAKE CASE
 */
//PASCAL CASE
// var firstName = "Dee";
// let dateOfBirth = "1999-09-12";

// SNAKE CASE
// let last_name = "Psalm";
// const years_of_experience = 10;

//DATA TYPES
//Boolean true or false
// Number 1,2,3,4,10.4
// Arrays

// let john  = "John";
// let glory = 'Glory';
// let martha = 'Martha'
// let totalNumberOfAlphabets = 26

// let arr = ["John", "Glory", "Martha", 26, "Lion"]
// 0       1       2      3     4
//ARRAY IS ZERO BASED INDEXING

// console.log(arr.length)
// console.log(arr[0])
// console.log(arr.at(4))

// let c = new Array();
// let arr = ["John", "Glory", "Martha", 26, "Lion"]

// c[0] = "John";
// c[1] = "Glory";
// c[2] = "Martha";
// c[3] = 26;
// c[4] ="Lion"

// console.log(c)

// STRING
// let name = "SHAZAM"

//OBJECT
// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 34,
//     city: "Boston",
//     latlng: [1.25543, 6.38373]
// }
//DOT ACCESS AND THE SQUARE BRACKET
// console.log(person.age)
// console.log(person["city"])
// console.log(name)

//VARIABLE ASSIGNMENT

// const age = 30;

// let age1 = 10;
// let age2 = 20;
// console.log("AGE 1", age1, " AGE 2", age2)
// age1 = age2
// console.log(age1)

//LOOSE AND STRICT
// console.log(age1 == age2)
// console.log(age1 === age2)

// console.log(age1 <= age2)
// console.log(age1 !== age2)

/* RESERVED KEYWORDS
 * const, let, var, new, Array, if, else, switch
 */

// let a = 1,
//   b = 1,
//   c = 2,
//   d = 2;

// console.log(a === 2 && b === 4); // and
// console.log(a === 2 || b === 4); // or

// CONDITIONALS

// IF ELSE  SWITCH

// const weekday = 6;

// switch (weekday) {
//   case 0:
//     console.log("Sunday");
//     break;
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   default:
//     console.log("SATURDAY");
// }

// let score = 70
// if (score >= 70 && score <= 100) {
//   console.log("A");
// }
// else if (score >= 60 && score <= 69){
//     console.log("B")
// }
// else if (score >= 50 && score <=59){
//     console.log("C")
// }
// else {
//     console.log("D")
// }

/**
 * ASSIGMENT
 *
 * Create an if else statement that write
 *  the month of the year to the console when given a number
 * The month is zero base which means January is 0 and December is 11
 *
 *
 * Create an array of colours
 *
 * create and object of animal with name, age, weight, size,etc properties
 *
 * Print the value of the animal age to the console.
 */

function print(val) {
  console.log(val);
}

//LOOP || ITERATION
// LOOPS => WHILE LOOP, FOR LOOP && DO-WHILE LOOP

//DON"T WORRY ABOUT THIS
// let num = 5
// let counter  = 1

// alert("Hlloe")
// prompt("DO You want to continue?")

// while(num > 0){
//     print(counter)
//     counter++
//     num--
// }

// let num = 5

// for (let counter = 0; counter < num; counter++){
//     print(counter + 1)
// }

// print(num)

//let num = 2

// do {
//     print("I AM PRETTY USELESS")
// }
// while (num !== 4){
//     num++
// }

// PARAMETERS AND ARGUEMENTS

//FUNCTION EXPRESS
// let add = function (x, y) {
//   return x + y;
// };

//FUNCTION DECLARATION
// function divide(a, b) {
//   return a / b;
// }

//ARROW FUNCTION
// const multiply = (x, y) => {
//   return x * y;
// };

// function sayHello(name, age) {
//   let person = {
//     name: name,
//     age: age,
//     city: "Boston",
//     country: "Nigeria",
//   };
//   return person.age;
// }

// print(add(2, 2));
// print(divide(4, 2));
// print(multiply(2, 3));

// let arr = ["blue", "orange", "indigo", "violet", "red"];

// var printArr = function (color) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.at(i) === color) {
//       return true;
//     }
// print(arr.at(i))
//   }
//   return false;
// };

// print(printArr("indigo"));

let parent = document.getElementById("parent");
let age = document.getElementById("age");
let color = document.getElementById("color");
let btn = document.getElementById("btn");

function handleSubmit(event) {
  event.preventDefault();
  let userAge = age.value;
  console.log(color.textContent);
  let userColor = color.value;
  print(userAge, userColor);
  alert(userAge, userColor);
  return;
}

btn.addEventListener("click", handleSubmit);

print(btn);
