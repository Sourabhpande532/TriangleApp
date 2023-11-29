const quizForm = document.querySelector(".quiz-form");
const submitAnswerButton = document.querySelector("#submit-answers");
const outputResultEl = document.querySelector("#show-result");

const correctAnswer = ["90°", "right angled"];

function calculateScore() {
  let score = 0;
  let index = 0;
  const quizFormResults = new FormData(quizForm);
  console.log(quizFormResults);
    for (let value of quizFormResults.entries()) {
      console.log(value);
    }
}

submitAnswerButton.addEventListener("click", calculateScore);
