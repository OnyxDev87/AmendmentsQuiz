var score = 0;
var question = "What is the 972345th Amendment"

document.querySelector("#score").innerHTML = score;

function restartQuiz() {
    score = 0;
    document.querySelector("#score").innerHTML = score;
    startQuiz();
}

function startQuiz() {
    document.querySelector("#question").innerHTML = "Question 1: " + question;
    document.querySelector("#answer-button1").innerHTML = "there istn't one";
    document.querySelector("#answer-button1").onclick = function() {
        score += 1;
        document.querySelector("#score").innerHTML = score;
    };
    document.querySelector("#answer-button2").innerHTML = "incorect";
    document.querySelector("#answer-button3").innerHTML = "wrong";
}