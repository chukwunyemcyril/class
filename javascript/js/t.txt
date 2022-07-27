//OBJECTS

// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 24,
//   city: "Boston",
// };

// console.log(person["city"]);

//all the values
// console.log(Object.values(person));

//all the keys
// console.log(Object.keys(person));

//all
// console.log(Object.entries(person));

// function Person(name, age) {
//   this.name = name;
//   this.age = age;

//   function greet() {
//     return `Hello ${name}, you are ${age} old`;
//   }
// }

// const person1 = new Person("John", 12);
// console.log(person1.name);

// const person2 = new Person("Doe", 34);
// console.log(person2.name);

// class Bicycle {
//   constructor(name, gear, color) {
//     this.name = name;
//     this.gear = gear;
//     this.color = color;
//   }
//   increaseGear() {
//     this.gear = this.gear + 1;
//   }
//   decreaseGear() {
//     if (this.gear > 0) {
//       this.gear = this.gear - 1;
//     } else {
//       console.error("Invalid gear");
//     }
//   }

//   info() {
//     let obj = {
//       name: this.name,
//       gear: this.gear,
//       color: this.color,
//     };
//     return obj;
//   }
// }

// const mountainBike = new Bicycle("Moutain Bike", 2, "Red");
// mountainBike.decreaseGear();
// mountainBike.decreaseGear();

// console.log(mountainBike.info());

// const stuntBike = new Bicycle("Stunt Bike", 3, "Blue");

// stuntBike.increaseGear();
// stuntBike.increaseGear();
// stuntBike.increaseGear();

// console.log(stuntBike.info());

// class Stack {
//   constructor() {
//     this.stack = [];
//     this.length = 0;
//   }

//   push(value) {
//     this.stack.unshift(value);
//     this.length++;
//     return this.stack;
//   }
//   pop() {
//     let val = this.stack.shift();
//     this.length--;
//     return val;
//   }
// }

// const stack = new Stack();

// console.log(stack);
