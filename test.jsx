import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const id = setInterval(() => {
    console.log(count);
    setCount((prev) => prev + 1);
  }, 1000);

  document.getElementById("parent").addEventListener("click", () => {
    console.log("parent capture");
  });

  return () => {
    clearInterval(id);
  };
}

let cool = Counter();
console.log(cool());
