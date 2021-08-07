const angles = document.querySelectorAll(".number-input");
const form = document.querySelector(".angles-form");
const result = document.querySelector(".result-angles");

form.addEventListener("submit", calculate);

function calculate(e) {
  e.preventDefault();
  let sumOfAllAngles =
    Number(angles[0].value) + Number(angles[1].value) + Number(angles[2].value);
  console.log(sumOfAllAngles);
  if (sumOfAllAngles === 180) {
    result.innerText = "It is a triangle";
  } else {
    result.innerText = "It is not a triangle";
  }
}
