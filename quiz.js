// Step 1: Define the function named checkAnswer
function checkAnswer() {
    // Step 2: Declare the correct answer
    const correctAnswer = "4";

    // Step 3: Retrieve the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    // Step 4: Get the feedback element
    const feedbackElement = document.getElementById("feedback");

    // Step 5: Check if the user selected an answer
    if (!userAnswer) {
        feedbackElement.textContent = "Please select an answer!";
        feedbackElement.style.color = "red";
        return;
    }

    // Step 6: Compare user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "red";
    }
}

// Step 7: Add an event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
