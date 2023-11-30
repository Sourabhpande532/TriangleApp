const angleInputs = document.querySelectorAll(".user-angle-input");
const isTriangleButton = document.querySelector("#is-button-triangle");
const showResultEl = document.querySelector(".display-output");

function calculateSumOfAngles(A1, A2, A3) {
  const sumOfAngles = A1 + A2 + A3;
  return sumOfAngles;
}
function isTriangle() {
  let angleA = Number(angleInputs[0].value);
  let angleB = Number(angleInputs[1].value);
  let angleC = Number(angleInputs[2].value);

  if (angleA && angleB && angleC) {
    const sumOfAngles = calculateSumOfAngles(angleA, angleB, angleC);
    if (sumOfAngles === 180) {
      showResultEl.innerText = "Yehh!😍 The Angle is forming Triangle";
    } else {
      showResultEl.innerText = "Oohh!😔 Sadly The Angle not Formed Triangle";
    }
  } else {
    showResultEl.innerText = "Oohh!🤔 all field is required";
  }
}

isTriangleButton.addEventListener("click", isTriangle);
