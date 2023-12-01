const userInput = document.querySelectorAll(".user-input");
const checkAreaButton = document.querySelector("#check-area-btn");
const resultEl = document.querySelector(".result");

function calculateAreaOfTriangle(a, b) {
  let areaOfTriangle = (1 / 2) * (a * b);
  return areaOfTriangle;
}

function calculateArea() {
  let Base = Number(userInput[0].value);
  let Height = Number(userInput[1].value);
  if (Base && Height) {
    let sumOfArea = calculateAreaOfTriangle(Base, Height);
    resultEl.innerText = "The area of triangle is " + sumOfArea.toFixed(2);
  } else {
    resultEl.innerText = "Both field is required";
  }
}

checkAreaButton.addEventListener("click", calculateArea);
