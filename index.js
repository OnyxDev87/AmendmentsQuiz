const questions = [
  {
  question: "What does the First Amendment protect?",
  answers: [
    "The right to bear arms",
    "Freedom of speech, religion, press, assembly, and petition",
    "The right to a speedy trial"
  ],
  correctIndex: 1
  },
  {
  question: "Which amendment abolished slavery?",
  answers: [
    "14th Amendment",
    "13th Amendment",
    "15th Amendment"
  ],
  correctIndex: 1
  },
  {
  question: "What right is guaranteed by the Second Amendment?",
  answers: [
    "Freedom from unreasonable searches",
    "The right to keep and bear arms",
    "The right to free speech"
  ],
  correctIndex: 1
  },
  {
  question: "What does the Fourth Amendment protect against?",
  answers: [
    "Cruel and unusual punishment",
    "Self-incrimination",
    "Unreasonable searches and seizures"
  ],
  correctIndex: 2
  },
  {
  question: "Which amendment gave women the right to vote?",
  answers: [
    "18th Amendment",
    "15th Amendment",
    "19th Amendment"
  ],
  correctIndex: 2
  },
  {
  question: "What does the Fifth Amendment protect?",
  answers: [
    "The right to remain silent and protection from double jeopardy",
    "The right to vote",
    "The right to bear arms"
  ],
  correctIndex: 0
  },
  {
  question: "Which amendment lowered the voting age to 18?",
  answers: [
    "24th Amendment",
    "26th Amendment",
    "21st Amendment"
  ],
  correctIndex: 1
  },
  {
  question: "Which amendment ended Prohibition?",
  answers: [
    "21st Amendment",
    "18th Amendment",
    "17th Amendment"
  ],
  correctIndex: 0
  },
  {
  question: "In what year was the U.S. Constitution signed?",
  answers: [
    "1801",
    "1787",
    "1776"
  ],
  correctIndex: 1
  },
  {
  question: "Who is known as the “Father of the Constitution”?",
  answers: [
    "George Washington",
    "Thomas Jefferson",
    "James Madison"
  ],
  correctIndex: 2
  }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("overlay").classList.add("hidden");
  document.getElementById("score").textContent = `${score} / ${questions.length}`;
  showQuestion();
}

function showQuestion() {
  const questionObj = questions[currentQuestionIndex];
  document.getElementById("question").textContent = `Question ${currentQuestionIndex + 1}: ${questionObj.question}`;

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
  document.getElementById("final-score").textContent = `${score} / ${questions.length}`;
  document.getElementById("overlay").classList.remove("hidden");
}