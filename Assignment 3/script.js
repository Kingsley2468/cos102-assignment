// 1. Question Bank Array
const quizQuestions = [
    {
        question: "Which HTML element is used to link a JavaScript file?",
        options: ["<script>", "<js>", "<javascript>", "<link>"],
        answer: "<script>"
    },
    {
        question: "What does DOM stand for in web development?",
        options: ["Data Object Mode", "Document Object Model", "Dynamic Output Management", "Desktop Operational Matrix"],
        answer: "Document Object Model"
    },
    {
        question: "Which keyword is used to declare a variable that cannot be reassigned?",
        options: ["let", "var", "const", "set"],
        answer: "const"
    },
    {
        question: "Which array method adds a new element to the end of an array?",
        options: ["pop()", "push()", "shift()", "unshift()"],
        answer: "push()"
    }
];

// 2. Track State Variables
let currentQuestionIndex = 0;
let score = 0;

// 3. Select DOM Elements
const quizBox = document.getElementById('quiz-box');
const progressText = document.getElementById('progress-text');
const questionText = document.getElementById('question-text');
const optionsBox = document.getElementById('options-box');
const nextBtn = document.getElementById('next-btn');

// Start the Application
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

// 4. Render Current Question
function showQuestion() {
    resetState();
    
    let currentQuestion = quizQuestions[currentQuestionIndex];
    progressText.textContent = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
    questionText.textContent = currentQuestion.question;

    // Generate option buttons
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectAnswer(button, currentQuestion.answer));
        optionsBox.appendChild(button);
    });
}

// Clear colors and layout visibility states between switching questions
function resetState() {
    quizBox.classList.remove('correct', 'wrong');
    nextBtn.classList.add('hide');
    optionsBox.innerHTML = '';
}

// 5. Handle Answer Selection
function selectAnswer(selectedButton, correctAnswer) {
    const isCorrect = selectedButton.textContent === correctAnswer;
    
    if (isCorrect) {
        score++;
        quizBox.classList.add('correct');
    } else {
        quizBox.classList.add('wrong');
    }

    // Disable all option buttons immediately after choice is locked
    Array.from(optionsBox.children).forEach(button => {
        button.disabled = true;
        // Highlight the true answer inline to aid instruction
        if (button.textContent === correctAnswer) {
            button.style.borderColor = '#2ecc71';
            button.style.backgroundColor = '#e8f8f0';
            button.style.color = '#27ae60';
        }
    });

    nextBtn.classList.remove('hide');
}

// 6. Monitor Moving Forward or Wrapping Up Screen
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
});

// 7. Calculate Remarks & Display Summary
function showResults() {
    resetState();
    progressText.textContent = "Quiz Completed";
    
    // Calculate final score percentage
    const performancePercentage = (score / quizQuestions.length) * 100;
    let remark = "";

    // Grade validation criteria check 
    if (performancePercentage === 100) {
        remark = "Excellent! Perfect score!";
    } else if (performancePercentage >= 75) {
        remark = "Great job! You know your stuff!";
    } else if (performancePercentage >= 50) {
        remark = "Good effort, but try harder next time.";
    } else {
        remark = "Don't give up yet, keep practicing!";
    }

    questionText.textContent = `You scored ${score} out of ${quizQuestions.length}!`;
    
    optionsBox.innerHTML = `
        <h3 style="margin: 0 0 1rem 0;">Grade: ${performancePercentage}%</h3>
        <p style="font-size: 1.1rem; italic">${remark}</p>
    `;

    // Swap Next text behavior into a Retry capability
    nextBtn.textContent = "Restart Quiz";
    nextBtn.classList.remove('hide');
    
    // Re-bind click event once to reset
    nextBtn.onclick = () => {
        nextBtn.textContent = "Next Question";
        nextBtn.onclick = null; // Reset pointer assignment structure
        startQuiz();
    };
}

// Initialize on runtime window execution
startQuiz();