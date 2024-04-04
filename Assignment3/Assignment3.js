// Define a variable (array) to store the questions.
var questions = [
    {   // In the array, make variables to store each question, option and answer. 
        question: "Which city used to be the capital of Japan for over a millennium?",
        options: ["Tokyo", "Osaka", "Kyoto"],
        answer: "Kyoto"
    },

    {
        question: "Which city changed its original name due to the fame of hosting the major car company?",
        options: ["Mazda", "Nissan", "Toyota"],
        answer: "Toyota"
    },

    {
        question: "'Kimigayo,' the national anthem of Japan, is known as the shortest one in the world. How many lines does it have?",
        options: ["4", "8", "15"],
        answer: "4"
    },

    {
        question: "Which one is the official currency of Japan?",
        options: ["Japanese Doller", "Yen", "Dong"],
        answer: "Yen"
    },

    {
        question: "'Nishiyama Onsen Keiunkan' is the Japanese company that holds the Guinness World Record for the oldest hotel in the world. How old is it?",
        options: ["400 y.old", "700 y.old", "1300 y.old"],
        answer: "1300 y.old"
    },

    {
        question: "'Tokyo Sky Tree' is the tallest tower in Japan. How tall is it?",
        options: ["446m", "634m", "732m"],
        answer: "634m"
    },
    
    {
        question: "What is the name of the mountain that is also the highest point in Japan?",
        options: ["Mt.Fuji", "Mt.Kita", "Mt.Yari"],
        answer: "Mt.Fuji"
    },

    {
        question: "What does the red circle in the middle of Japan's flag represent?",
        options: ["The sun", "Blood of Japanese citizens", "The Imperial Seal of Japan"],
        answer: "The sun"
    },

    {
        question: "What is the population of Japan?",
        options: ["80 mil", "105 mil", "127 mil"],
        answer: "127 mil"
    },

    {
        question: "What were ancient warriors of Japan known as?",
        options: ["Maiko", "Samurai", "Ninja"],
        answer: "Samurai"
    }

];

// Initialize the question and score variable.
var currentQuestion = 0;
var score = 0;

// Display the current question and its options
function displayQuestion() {
    // If the currentQuestion index is less than the total length of the question array, 
    // Show the questions. 
    if (currentQuestion < questions.length) {
        updateQuestionCounter();
        /* Update the text content of HTML elements selected by their ID to display the current question and its options
        that are retrived from the array.*/
        document.getElementById("question").innerText = questions[currentQuestion].question;
        document.getElementById("option1").innerText = questions[currentQuestion].options[0];
        document.getElementById("option2").innerText = questions[currentQuestion].options[1];
        document.getElementById("option3").innerText = questions[currentQuestion].options[2];
    } else {
        // Otherwise, replace the entire content inside the quiz element with the final score.
        document.getElementById("quiz").innerHTML = `<p>Quiz complete! Your score is ${score}/${questions.length}.</p>`;
    }
}

// Check the user's answer and proceed to the next question.
function checkAnswer(userAnswer) {
    // If the user's answer is same as the predefined answered, 
    if (userAnswer === questions[currentQuestion].answer) {
        // Show the message
        alert("Correct!");
        // Increment the score by 1.
        score++;
        // Otherwise, show an error message.
    } else {
        alert("Your answer is not correct.");
    }
    //Increment the currentQuestion index to move to the next question.
    currentQuestion++;
    // If the index number of the question the user taking is less than the total number of the questions,
    if (currentQuestion < questions.length) {
        // Display the question.
        displayQuestion();
    } else {
        // Otherwise, show the total score.
        document.getElementById("quiz").innerHTML = `<p>Quiz complete! Your score is ${score}/${questions.length}.</p>`;
        // Make the question couter invisible.
        document.getElementById("quizProgress").style.display = "none";
    }
}

// Authentication
function startQuiz() {
    // Define a correct password.
    var correctPassword = "sushi"
    // Retrive the user input from the input field.
    var userPassword = document.getElementById("password").value;
    // If the user input is the same as the predefined password,
    if (userPassword === correctPassword) {
        // Call the function to display questions
        displayQuestion();
        // Make the quiz container and question counter visible.
        document.getElementById("quiz").style.display = "block";
        document.getElementById("quizProgress").style.display = "block";
        // Make the input field invisible
        document.getElementById("submitPassword").style.display = "none";
    } else {
        // Show an error message
        alert("Oops! Your input is incorrect.");
    }
}

// Update the question number of the question counter in the HTML file.
function updateQuestionCounter() {
    // Define the total number of questions
    var totalQuestions = questions.length;
    // Define the question number the user answered. +1 because the index number starts with 0.
    var questionsAnswered = currentQuestion + 1;
    // Apply the retrived number to the text in the HTML file.
    document.getElementById("questionCounter").innerText = `Question: ${questionsAnswered} / ${totalQuestions}`;
}