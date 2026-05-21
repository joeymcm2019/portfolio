// const { a, b, c } = { a: 1, b: 2, c: 3 };

// const d = "hello";

// var e = "cool";

// let f = {
//   a: "coool",
// };

// const cool = () => {};
// const fn = () => ({
//   a: 1,
//   b: 2,
// });
// const fn2 = () => {
//   return {
//     a: 1,
//     b: 2,
//   };
// };

// const huh = ({ a, b }) => {
//   return { a, b };
// };

// const obj0 = {
//   value: 1,
//   start: function () {
//     setTimeout(function () {
//       this.value++; //wrong this.
//     }, 1000);
//   },
// };

// const obj = {
//   value: 1,
//   start: function () {
//     const self = this; //saving outer this.
//     setTimeout(function () {
//       self.value++;
//     }, 1000);
//   },
// };

// const obj3 = {
//   value: 1,
//   start: function () {
//     console.log("check: ", this.value);
//     setTimeout(
//       function () {
//         this.value++;
//       }.bind(this),
//       1000,
//     );
//   },
// };

// const obj2 = {
//   value: 1,
//   start: function () {
//     setTimeout(() => {
//       //arrow function inherits this.
//       this.value++;
//     }, 1000);
//   },
// };

// console.log(obj3.value);
// obj3.start();

// setTimeout(() => {
//   console.log(obj3.value);
// }, 1500);

// const obj4 = {
//   value: 10,
//   method: function () {
//     console.log(this);
//     const arrow = () => {
//       console.log(this.value);
//     };
//     const weird = function () {
//       console.log("weird:this", this);
//     }.bind(this);
//     weird();
//     arrow();
//   },
// };

// const obj5 = {
//   value: 10,
//   method: function () {
//     console.log(this);
//     const arrow = () => {
//       console.log(this.value);
//     };
//     // function weird() {
//     //   console.log("weird:this", this);
//     // }.bind(this); //function is lost.
//     // weird();
//     // arrow();
//   },
// };

// const obj6 = {
//   value: 10,
//   method: function () {
//     console.log(this);
//     const arrow = () => {
//       console.log(this.value);
//     };
//     function weird() {
//       console.log("weird:this", this);
//     }
//     weird.bind(this)(); //function is lost.
//     arrow();
//   },
// };

// function outer() {
//   let count = 0;

//   function inner() {
//     count++;
//     console.log(count);
//   }

//   return inner;
// }

// const fna = outer();
// // fna(); // 1
// // fna(); // 2

// function greet(name) {
//   return function () {
//     console.log("Hello " + name);
//   };
// }

// // const sayHi = greet("Joey");
// // sayHi(); // Hello Joey

// function createCounter() {
//   let count = 0;

//   return function () {
//     return ++count;
//   };
// }

// // const counter = createCounter();
// // console.log(counter.count);
// // console.log(counter()); // 1
// // console.log(counter()); // 2
// // console.log(counter()); // 3

// function outer() {
//   let bigData = { value: 123 };

//   return function inner() {
//     console.log(bigData.value);
//   };
// }

// function cooler() {
//   let data = { value: 456 };
//   return function boss() {
//     console.log(data);
//     data = null;
//   };
// }

// let coolFn = cooler();
// coolFn = null;

// const obj7 = {
//   value: 10,
//   foo() {
//     console.log(this.value);
//   },
// };

// //obj7.foo();

// const obj10 = {
//   value: 1,
//   start() {
//     this.value++;
//   },
// };

// function foo() {
//   console.log(this.value);
// }

// const obj8 = { value: 42 };

// //foo.call(obj8);

// function foo() {
//   console.log(this);
// }

// //foo();
// async function coolest() {
//   const p1 = new Promise((res) => setTimeout(() => res("slow"), 2000));
//   const p2 = new Promise((res) => setTimeout(() => res("fast"), 500));

//   const result = await Promise.race([p1, p2]);
//   console.log(result);
// }
// // cool();

// var test = "hello";
// const test2 = "world";
// let test3 = "!";

// function foo() {
//   console.log(test);
//   console.log(test2);
//   console.log(test3);
// }

// //foo();

// const obj00 = {
//   value: 10,
//   arrow: () => {
//     console.log(this);
//   },
// };

// ///obj00.arrow(); // NOT obj

// // What actually happens

// // When this code runs, JavaScript evaluates it roughly like this:

// const arrowFn = () => {
//   console.log(this);
// };

// const obj000 = {
//   value: 10,
//   arrow: arrowFn,
// };

// //obj000.arrow(); // {}
// // 👉 The arrow function is created in the outer (top-level) scope,
// // not inside some special “object scope”.

// // So it inherits this from there.

// function outer() {
//   let a = 5;
//   const obj = {
//     arrow: () => {
//       console.log(this);
//     },
//   };

//   obj.arrow();
// }

// //outer();

// function throttle(fn, limit) {
//   let inThrottle = false;

//   return (...args) => {
//     if (!inThrottle) {
//       fn(...args);
//       inThrottle = true;

//       setTimeout(() => {
//         inThrottle = false;
//       }, limit);
//     }
//   };
// }

// function throttleTrailing(fn, limit) {
//   // stale data.
//   let inThrottle = false;

//   return (...args) => {
//     if (!inThrottle) {
//       inThrottle = true;

//       setTimeout(() => {
//         inThrottle = false;
//         fn(...args);
//       }, limit);
//     }
//   };
// }

// function throttleTrailingTrue(fn, limit) {
//   let timeout = null;
//   let lastArgs;

//   return (...args) => {
//     lastArgs = args;

//     if (!timeout) {
//       timeout = setTimeout(() => {
//         fn(...lastArgs);
//         timeout = null;
//       }, limit);
//     }
//   };
// }

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];

rl.on("line", (line) => {
  lines.push(line.trim());

  if (lines.length === 2) {
    const inputArray = lines[0].split(" ").map(Number); // first line
    const inputLimit = Number(lines[1]); // second line

    // use them here
    console.log(inputArray, inputLimit);

    rl.close();
  }
});
