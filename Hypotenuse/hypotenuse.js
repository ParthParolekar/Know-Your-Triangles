const userInput = document.querySelectorAll(".number-input");
const form = document.querySelector(".hypotenuse-form");
const result = document.querySelector(".result-hypotenuse");

form.addEventListener("submit", calculateHypotenuse);

function calculateHypotenuse(e) {
  e.preventDefault();
  let hypotenuse = Math.sqrt(
    userInput[0].value * userInput[0].value +
      userInput[1].value * userInput[1].value
  );

  result.innerText = `AC = ${hypotenuse.toFixed(2)}`;
}
