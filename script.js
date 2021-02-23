// Its always a good pratice to use strict mode.
"use strict";

// Generating the Random Secret Number
let secretNumber;
let score = 20;
let highScore = 0;

// Initializing the variables and texts.
init();

function init() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  loggingSecretNumber(secretNumber);
  enableCheckBtnAndHideSecretNumber();
  displayMessage(".message", "Start guessing...");
  displayMessage(".score", score);
  displayMessage(".highscore", highScore);
  document.querySelector(".guess").value = "";
}

// Check Button Functionality
document.querySelector(".check").addEventListener("click", function () {
  let guessNumber = Number(document.querySelector(".guess").value);

  if (!guessNumber) {
    displayMessage(
      ".message",
      "⛔ Not a valid number. Try again between 1 and 20"
    );
  } else if (guessNumber == secretNumber) {
    displayMessage(".message", `🎉 Correct Number...`);
    disableCheckBtnAndDisplaySecretNumber();
    if (score > highScore) {
      highScore = score;
      displayMessage(".highscore", highScore);
    }
  } else {
    if (score > 1) {
      displayMessage(
        ".message",
        guessNumber > secretNumber ? `📈 Too high...` : `📉 Too low...`
      );
      score--;
      displayMessage(".score", score);
    } else {
      score = 0;
      displayMessage(".score", score);
      displayMessage(".message", "🛑 You lost the game! Try again...");
      disableCheckBtnAndDisplaySecretNumber();
    }
  }
});

// Again Button Functionality
document.querySelector(".again").addEventListener("click", init);

function enableCheckBtnAndHideSecretNumber() {
  document.querySelector(".guess").disabled = false;
  document.querySelector(".number").textContent = "?";
}

function disableCheckBtnAndDisplaySecretNumber() {
  document.querySelector(".guess").disabled = true;
  document.querySelector(".number").textContent = secretNumber;
}

function displayMessage(className, displayText) {
  document.querySelector(className).textContent = displayText;
}

// Function to log generate secret number.
function loggingSecretNumber(secretNumber) {
  console.log(`Current generated secret number is : ${secretNumber}`);
}
