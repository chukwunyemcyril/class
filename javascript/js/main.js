//PRIMITIVE TYPE

// let add = 5;

// let sum = add;

// add = 30;

// console.log(add, sum);

//REFERENCE TYPE

// let person1 = {
//   name: "John",
//   age: 23,
// };

// let person2 = person1;

// person1.age = 60;

// console.log(person1, person2);

//OPERATORS IN JS
//Arithmetic Operators
// console.log(2 * 3);
// console.log(2 + 4);
// console.log(10 / 5);
// console.log(2 ** 2);
// console.log(6 % 2); //Modulo
// console.log(10 + 4 * 3);
// console.log((10 + 4) * 3);

//Logical Operator
//&& AND
// console.log(true && true);
// || OR
// console.log(true || false);

//Equality Operator

// loose equality
// let a = 10;
// let b = "10";

//console.log(a != b); //not equal

// console.log(a == b);

//strict equality
// console.log(a === b);

//FUNCTIONS

//function statement
function add(x, y, z) {
  return x + y + z;
}

console.log(add(1, 2, 3));

//function declaration
let subtract = function (a, b) {
  return a - b;
};

console.log(subtract(12, 4));

function mean(x, y, z) {
  let sum = x + y + z;
  let result = sum / 3;
  return result;
}

//concatenation

const _first = "John";
const _last = "Doe";

// let result = _first + " " + _last;
// let result = `${_first} ${_last}`;

function greet(name) {
  console.log("Hello");
  return "Good Morning, " + name;
}

// console.log(greet("Lucy"));

//immediately invoked functions IIFE
(function (age) {
  console.log("Hi");
  console.log(age);
})(12);

//ARROW FUNCTIONS
const divide = (val1, val2) => {
  return val1 / val2;
};

console.log(divide(9, 3));
console.log(power(9, 2));

let _pow = function (x, y) {
  return x ** y;
};

const pow = (a, b) => {
  return a ** b;
};

const power = (val1, val2) => val1 ** val2;
