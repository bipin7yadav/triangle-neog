const quizform = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-answers-btn");
const outputEl = document.querySelector(".output");

const correctAnswers = ["90°","right angled"];

function calculateScore() {
  let score = 0,
    index = 0;
    const formResults = new FormData(quizform);
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  outputEl.innerText = "The score is " + score;
}

submitBtn.addEventListener("click", calculateScore);