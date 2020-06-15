const data = {
  questionsContainer: document.querySelector(".container__questions"),
  questionElement: document.querySelector(".container__questions--question"),
  questions: [
    {
      question: "Which one is an invalid variable?",
      answers: [
        { text: `apple`, correct: false },
        { text: `_apple`, correct: false },
        { text: `xapple`, correct: false },
        { text: `5apple`, correct: true },
      ],
    },
  ],
  answerButtons: document.querySelector(".container__answers"),
};

const shuffledQuestions = data.questions.sort(() => Math.random() - 0.5); // randomizes array
const currentQuestionIndex = 0;

const controls = {
  startButton: document.querySelector(".container__controls--start"),
  nextButton: document.querySelector(".container__controls--next"),
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
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  data.questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("container__answers--btn", "btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    data.answerButtons.appendChild(button);
  });
}

function resetState() {
  controls.nextButton.classList.add(`${actions.hide()}`);
  while (data.answerButtons.firstChild) {
    data.answerButtons.removeChild(data.answerButtons.firstChild);
  }
}

// Select the answer
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(data.answerButtons.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  controls.nextButton.classList.remove(`${actions.hide()}`);
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

// Start game
controls.startButton.addEventListener("click", startGame);
