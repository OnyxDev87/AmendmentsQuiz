var score = 10;
var question = "What is the 972345th Amendment"

document.querySelector("#score").innerHTML = score;

function restartQuiz() {
    score = 0;
}

document.querySelector("question").innerHTML = "Question 1: " + question;