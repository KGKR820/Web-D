const quizData = [
  {
    question: "What is the capital of Telengana?",
    options: ["Hyderabad", "Amaravati", "chennai", "Madhapur"],
    answer: "Hyderabad",
  },
  {
    question: "Which programming language is most used by the world?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "Java",
  },
  {
      question: "Who is present cheif Minister of AP?",
      options: ["Pawan Kalyan", "Jagan Mohan Reddy", "Chandrababu Naidu", "Narendra Modi"],
      answer: "Chadrababu Naidu",
  },
];

const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
const submitButton = document.getElementById("submit");

function buildQuiz() {
  quizData.forEach((questionData, index) => {
      const questionDiv = document.createElement("div"); 
      questionDiv.innerHTML = `
          <p><strong>Question ${index + 1}:</strong> ${questionData.question}</p>
          ${questionData.options
              .map(
                  (option) => `
              <label>
                  <input type="radio" name="question${index}" value="${option}">
                  ${option}
              </label><br>
          `
              )
              .join("")}
      `;
      quizContainer.appendChild(questionDiv); 
  });
}

function showResults() {
  let score = 0; 
  quizData.forEach((questionData, index) => {
      const selectedOption = document.querySelector(
          `input[name="question${index}"]:checked`
      );
      if (selectedOption && selectedOption.value === questionData.answer) {
          score++; 
      }
  });
  resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}`; 
}
buildQuiz();
submitButton.addEventListener("click", showResults);
