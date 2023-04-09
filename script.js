"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = "";
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (score > 0) {
    //When there is no input
    if (!guess) {
      document.querySelector(".message").textContent = "No number!";
    }
    //When player wins
    else if (guess === secretNumber) {
      document.querySelector(".message").textContent = "🎺 Correct number!";
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = secretNumber;

      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
    } else if (guess !== secretNumber) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too high!" : "Too low!";
      score--;
      document.querySelector(".score").textContent = score;
      if (score <= 0) {
        document.querySelector(".message").textContent = "You lost!";
      }
      //when guess is too low
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
});
