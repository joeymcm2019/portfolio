// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const lines = [];

// rl.on("line", (line) => {
//   lines.push(line);
//   if (lines.length === 2) {
//     const inputArray = lines[0].split(" ").map(Number);
//     const limit = Number(lines[1]);
//     console.log(inputArray, limit);
//   }
// });

function makeSound(animal) {
  animal.speak();
}

makeSound({ speak: () => console.log("Roar") });
