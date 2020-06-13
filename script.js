const data = {
  questionsContainer: document.querySelector(".container__questions"),
  questionElement: document.querySelector(".container__questions--question"),
  questions: [
    {
      question: "Which one is invalid as a variable?",
      answers: [
        { text: `apple`, correct: false },
        { text: `_apple`, correct: false },
        { text: `xapple`, correct: false },
        { text: `5apple`, correct: true },
      ],
    },
  ],
  answerButtons: document.querySelector(".container__answers--btn"),
};

const shuffledQuestions = data.questions.sort(() => Math.random() - 0.5); // randomizes array
const currentQuestionIndex = 0;

const controls = {
  startButton: document.querySelector(".container__controls--start"),
};

const actions = {
  hide: function () {
    return "hide";
  },
};

function startGame() {
  console.log("Game has started!");
  controls.startButton.classList.add(`${actions.hide()}`);
  data.questionsContainer.classList.remove(`${actions.hide()}`);
  generateNextQuestion();
}

// Generate next question
function generateNextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  data.questionElement.innerText = question.question;
}

// Select the answer
function selectAnswer() {}

// Start game
controls.startButton.addEventListener("click", startGame);
