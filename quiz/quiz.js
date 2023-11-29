const quizForm = document.querySelector( ".quiz-form" );
const submitAnswerButton = document.querySelector( "#submit-answers" );
const outputResultEl = document.querySelector( "#show-result" );

const correctAnswer = ["90°", "right angled"];

function calculateScore() {
  let score = 0;
  let index = 0;
  const quizFormResults = new FormData( quizForm );
  for ( let value of quizFormResults.values() ) {
    if ( value === correctAnswer[index] ) {
      score += 1;
    }
    index += 1;
  }
  outputResultEl.innerText = "Your score is " + score
}

submitAnswerButton.addEventListener( "click", calculateScore );
