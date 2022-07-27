//ARRAY

// let nums = [1, 2, "hi", { name: "john", age: 34 }];

//ARRAY METHODS

//length
// console.log(nums.length);
//push puts an item at the end of an array
// console.log(nums.push(["orange", "banana"]));
// nums.push(3);

//pop remove an item at the end of an array
// console.log(nums.pop());

//shift removes the first element
// nums.shift();

//unshift add element at the beginning
// nums.unshift("Hello");

//reverse
// nums.reverse();

//slice
//slice creates a new array
//nums.slice(0,3)

//splice
//splice affects the original
//nums.splice(0, 3)

//indexOf
//returns the index of an elements
//nums.indexOf(2)

// console.log(nums);

//CONDITIONAL

//IF-ELSE
//SWITCH

// let userResp = prompt("What day is today?");

// function greet(day) {
//   if (day === "monday") {
//     return "You said Monday";
//   } else if (day === "tuesday") {
//     return "You said Tuesday";
//   } else {
//     return "I do not understand you";
//   }
// }

// let response = greet(userResp);

// document.write(response);

//Write a program that ask a user name and age
// determine if they are allowed in a club that
// has 18+

function club() {
  let c = ["jo", "po", "lo"];
  let userName = prompt("What is your username");
  let age = prompt("What is your age");

  if (age >= 18) {
    document.write(
      `${userName} welcome to Lux club a waiter will be with you shortly!`
    );
    return;
  } else {
    document.write(`${userName} sorry not allowed!`);
  }
}

// club();

// let strGrade = prompt("Enter your grade");
// let grade = parseFloat(strGrade);

// switch (grade) {
//   case 70:
//     document.write("70 upwards");
//     break;
//   case 60:
//     document.write("60 upwards");
//     break;

//   default:
//     document.write("your grade is invalid");
// }

// let today = prompt("What day is it?");

// document.write(`Today is ${today}`);

//convert to lowercase .toLowerCase()
//convert to uppercase .toUpperCase()

//ITERATION
//while loop
//for loop
//do while loop

// let len = 4;
// let i = 1;

// while (len > 0) {
//   document.write(i);
//   i++;
//   len--;
// }

// for (let i = 1; i < 10; i++) {
//   document.write(i);
// }

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < nums.length; i++) {
//   document.writeln(nums[i]);
// }

/**
 * TODO
 * You are the owner of a club
 * You have VIPS, and they all have a username
 *
 * Write a program that determines if a user
 * belong to the VIP class.
 *
 * if they exist return true
 * else return false
 *
 */
