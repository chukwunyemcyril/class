//console.log("Hello world")
// document.write("hello world");
//SINGLE LINE COMMENT
/*
MULTILINE COMMENT
*/

//PRIMITIVE DATATYPES

//GLOBAL SCOPE
// var name = "John";

//BLOCK SCOPE
// let name = "Peter";
// const num = 3;

/**
 * string
 * number
 * null
 * undefined
 * boolean
 */

let firstName = "John";
let age = 40.4;
let lastName = null;

let x = true;

document.write(typeof firstName + " ");
document.write(typeof age + " ");
document.write(typeof x);

// NOT PRIMITIVE
//object

let Person = {
  country: "Benin",
  city: "Benin City",
  postalCode: 102123,
};

//array
// let fruits = ["orange", " pineapple", "mango"];

// let fruits = new Array();

// fruits[0] = "orange"
// fruits[1] = "pineapple"
// fruits[2] = "mango"

// document.write(Array.isArray(Person));

let fruits = ["orange", " pineapple", "mango", Person];

// console.log(fruits[3]);

// console.log(fruits.at(4));

// console.log(fruits.length);

// console.log(fruits.indexOf("mango"));

//DOT NOTATION
// console.log(Person.country);
// console.log(Person.city);
// console.log(Person.postalCode);

//BRACKET
// console.log(Person["country"]);

console.log(Person);
