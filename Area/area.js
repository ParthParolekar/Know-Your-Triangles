const userInput = document.querySelectorAll(".number-input");
const form = document.querySelector(".area-form");
const result = document.querySelector(".result-area");

form.addEventListener("submit", calculateArea);

function calculateArea(e) {
  e.preventDefault();
  let area = 0.5 * Number(userInput[0].value) * Number(userInput[1].value);

  result.innerHTML = `<div class="result-area">Area of the triangle is: ${area}cm<sup>2</sup></div>`;
}
