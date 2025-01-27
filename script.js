const questions = [
    { question: "What color is the sky?", choices: ["Red", "Blue", "Green", "Yellow"], answer: "Blue" },
    { question: "What color is grass?", choices: ["Pink", "Brown", "Green", "Orange"], answer: "Green" },
    // Add more questions as needed
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const resultElement = document.getElementById("result");

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    choicesElement.innerHTML = "";
    currentQuestion.choices.forEach(choice => {
        const choiceButton = document.createElement("div");
        choiceButton.className = "choice";
        choiceButton.style.backgroundColor = choice.toLowerCase();
        choiceButton.onclick = () => checkAnswer(choice);
        choicesElement.appendChild(choiceButton);
    });

    resultElement.textContent = "";
}

function checkAnswer(choice) {
    const currentQuestion = questions[currentQuestionIndex];

    if (choice === currentQuestion.answer) {
        currentQuestionIndex++;
        if (currentQuestionIndex >= questions.length) {
            alert("Congratulations! You've completed the game.");
            window.open("https://your-external-link.com", "_blank");
        } else {
            loadQuestion();
        }
    } else {
        alert("Incorrect! Please try again.");
        loadQuestion();
    }
}

window.onload = loadQuestion;
