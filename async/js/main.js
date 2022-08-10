//SYNCHRONOUS JAVASCRIPT

// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function loop() {
//   for (var i = 0; i <= 99; i++) {
//     if (i === 99) {
//       console.log("done", i);
//     }
//   }
// }

// console.log(multiply(2, 2));
// loop();
// console.log(add(1, 2));
// console.log(subtract(2, 1));

//ASYNCHRONOUS JAVASCRIPT

// function sum(a) {
//   return 1 + a;
// }

// function loop(callback) {
//   for (var i = 0; i <= 99; i++) {
//     if (i === 4) {
//       callback(function () {
//         if (i === 99) {
//           callback(function () {
//             console.log("done", i);
//             callback(function () {
//               console.log("done", i);
//               callback(i);
//             });
//           });
//         } else {
//           callback(i);
//         }
//       });
//     }
//   }
// }
console.log("Hello world")

// loop(function (res) {
//   console.log(res + 1);
// });

// new Promise((resolveOuter) => {
//     resolveOuter(
//       new Promise((resolveInner) => {
//         setTimeout(resolveInner, 1000);
//       })
//     );
//   });

//setTimeout

setTimeout(function () {
  console.log("done");
}, 2000);

//setInterval
setInterval(function () {
  console.log("done SETINTERVAL");
}, 2000);
