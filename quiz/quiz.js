const quizForm = document.querySelector( ".quiz-form" );
const submitAnswerButton = document.querySelector( "#submit-answers" );
const outputResultEl = document.querySelector( "#show-result" );
const timerEl = document.querySelector( "#timer" );

const correctAnswer = ["90°", "right angled"];
let timer;
let remainingSeconds = 60;

/* Timer */
function timeManager() {
  timerEl.innerText = `Remaining time left is ${ remainingSeconds } sec`;
  if ( remainingSeconds === 0 ) {
    clearInterval( timer );
    calculateScore();
  } else {
    remainingSeconds--;
  }
}
/* calculateScore */
function calculateScore() {
  clearInterval( timer );
  let score = 0;
  let index = 0;
  if (
    !quizForm.elements.question1.value ||
    !quizForm.elements.question2.value
  ) {
    outputResultEl.innerText = "Please answer all questions.";
    return;
  }
  const quizFormResults = new FormData( quizForm );
  for ( let value of quizFormResults.values() ) {
    if ( value === correctAnswer[index] ) {
      score += 1;
    }
    index += 1;
  }
  outputResultEl.innerText = `Your score is ${ score }. Time taken: ${ 60 - remainingSeconds
    } seconds.`;
}

submitAnswerButton.addEventListener( "click", calculateScore );

timer = setInterval( timeManager, 1000 );
