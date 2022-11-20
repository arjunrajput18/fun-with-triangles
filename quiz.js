const quizForm = document.querySelector(".quiz-form");
const btnSubmit = document.querySelector("#btn-submit");
const showingOutput = document.querySelector("#showing-output");

const correctAnswer = ["90°", "right-angle", "10cm", "4.33cm", "False"];

function calculateScore() {
  const formData = new FormData(quizForm);
  const totalAnswer = correctAnswer.length;
  let count = 0;
  let score = 0;
  let index= 0;
  for (let value of formData.values()) {
    if (value === correctAnswer[index]) {
      score += 1;
    }
    index += 1;
    count += 1;
  }
  if (count < totalAnswer) {
    showingOutput.innerText = "Please answer every question";
  } else {
    showingOutput.innerText = `Your score is ${score}/${totalAnswer}`;
  }
}
btnSubmit.addEventListener("click", calculateScore);
