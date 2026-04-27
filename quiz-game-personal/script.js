const startBtn = document.querySelector(".start-button");
const resetBtn = document.querySelector(".reset-button");
const startDiv = document.querySelector(".start-div");
const questionsDiv = document.querySelector(".questions-div");
const questionNumberSpan = document.querySelector(".question-number");
const questionSpan = document.querySelector(".question-span");
const optionsDiv = document.querySelector(".options-div");
const scoreSpan = document.querySelector(".score-span");

const questions = [
  {
    id: 1,
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Saturn", "Jupiter", "Neptune"],
    answer: "Jupiter",
  },
  {
    id: 2,
    question: "Which ocean is the largest?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    answer: "Pacific",
  },
  {
    id: 3,
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    id: 4,
    question: "What is the capital of France?",
    options: ["London", "Paris", "Rome", "Berlin"],
    answer: "Paris",
  },
  {
    id: 5,
    question: "Which animal is known as the 'King of the Jungle'?",
    options: ["Tiger", "Elephant", "Lion", "Gorilla"],
    answer: "Lion",
  },
  {
    id: 6,
    question: "How many colours are there in a rainbow?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    id: 7,
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Mount Everest", "Kilimanjaro", "Denali"],
    answer: "Mount Everest",
  },
  {
    id: 8,
    question: "Which language has the most native speakers worldwide?",
    options: ["English", "Spanish", "Hindi", "Mandarin Chinese"],
    answer: "Mandarin Chinese",
  },
  {
    id: 9,
    question: "What is the currency of Japan?",
    options: ["Won", "Yuan", "Yen", "Ringgit"],
    answer: "Yen",
  },
  {
    id: 10,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Mercury", "Jupiter"],
    answer: "Mars",
  },
];

let currentQuestionsIndex = 0;
let score = 0;
const currentQuestion = questions[currentQuestionsIndex];
questionSpan.textContent = currentQuestion + 1;
questionNumberSpan.textContent = currentQuestionsIndex + 1;

startBtn.addEventListener("click", startQuiz);
resetBtn.addEventListener("click", resetQuiz);

function startQuiz() {
  startDiv.classList.remove("active");
  startDiv.classList.add("inactive");
  questionsDiv.classList.add("active");
  questionsDiv.classList.remove("inactive");

  showQuestion(currentQuestionsIndex);
}

function showQuestion(index) {
  const currentQuestion = questions[index];

  questionSpan.textContent = currentQuestion.question;

  optionsDiv.innerHTML = "";
  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    optionsDiv.appendChild(button);
    button.addEventListener("click", () => {
      if (currentQuestionsIndex < questions.length - 1) {
        currentQuestionsIndex += 1;
        if (option === currentQuestion.answer) {
          button.classList.add("correct");
          score += 1;
          scoreSpan.textContent = score;
        } else {
          button.classList.add("wrong");
        }
        questionNumberSpan.textContent = currentQuestionsIndex + 1;
        setTimeout(() => {
          showQuestion(currentQuestionsIndex);
        }, 2000);
      } else {
        questionSpan.textContent = "Quiz complete!";
        optionsDiv.innerHTML = "";
      }
    });
  });
}

function resetQuiz() {
  startDiv.classList.remove("active");
  startDiv.classList.add("inactive");
  questionsDiv.classList.add("active");
  questionsDiv.classList.remove("inactive");

  let currentQuestionsIndex = 0;
  let score = 0;
  showQuestion(0);
}
