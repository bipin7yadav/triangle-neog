const sides = document.querySelectorAll(".side-input");
// console.log(sides)
const calculateBtn = document.querySelector("#hypotenuse-btn");
// console.log(calculateBtn)
var outputEl = document.querySelector(".output");
// console.log(output)

function calculateSumOfSquare(a, b) {
  const sumOfSquares = a ** 2 + b ** 2;
  return sumOfSquares;
}

function calculateHypotenuse() {
  const sumOfSquares = calculateSumOfSquare(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
  console.log(lengthOfHypotenuse)
  outputEl.innerText ="The length of hypotenuse is " + String(lengthOfHypotenuse);
}

calculateBtn.addEventListener("click", calculateHypotenuse);