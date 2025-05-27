const questions = [
  {
    question: "What is the First Amendment about?",
    answers: [
      "Freedom of speech, religion, and press",
      "Right to bear arms",
      "Protection against unreasonable searches"
    ],
    correctIndex: 0
  },
  {
    question: "Which amendment abolished slavery?",
    answers: [
      "10th Amendment",
      "13th Amendment",
      "15th Amendment"
    ],
    correctIndex: 1
  },
  {
    question: "What does the Fifth Amendment protect against?",
    answers: [
      "Double jeopardy and self-incrimination",
      "Quartering of soldiers",
      "Cruel and unusual punishment"
    ],
    correctIndex: 0
  }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("score").textContent = `${score} / ${questions.length}`;
  showQuestion();
}

function showQuestion() {
  const questionObj = questions[currentQuestionIndex];
  document.getElementById("question").textContent = questionObj.question;

  questionObj.answers.forEach((answer, index) => {
    document.getElementById(`answer-button${index + 1}`).textContent = answer;
  });
}

function selectAnswer(selectedIndex) {
  const correct = questions[currentQuestionIndex].correctIndex;
  if (selectedIndex === correct) {
    score++;
  }
  currentQuestionIndex++;
  document.getElementById("score").textContent = `${score} / ${questions.length}`;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  document.getElementById("score").textContent = `${score} / ${questions.length}`;
}

function restartQuiz() {
  startQuiz();
}
