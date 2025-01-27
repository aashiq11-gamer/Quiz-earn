const questions = [
    { question: "What color is the sky?", choices: ["Red", "Blue", "Green", "Yellow"], answer: "Blue" },
    { question: "What color is grass?", choices: ["Pink", "Brown", "Green", "Orange"], answer: "Green" },
    // Add more questions as needed
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const resultElement = document.getElementById("result");
    const scoreElement = document.getElementById("score");

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    choicesElement.innerHTML = "";
    currentQuestion.choices.forEach(choice => {
        const choiceButton = document.createElement("div");
        choiceButton.className = "choice";
        choiceButton.textContent = choice;
        choiceButton.onclick = () => checkAnswer(choice);
        choicesElement.appendChild(choiceButton);
    });

    scoreElement.textContent = `Score: ${score}`;
    resultElement.textContent = "";
}

function checkAnswer(choice) {
    const currentQuestion = questions[currentQuestionIndex];

    if (choice === currentQuestion.answer) {
        score += 10; // Add 10 points for a correct answer
        currentQuestionIndex++;
        if (currentQuestionIndex >= questions.length) {
            alert("Congratulations! You've completed the game.");
