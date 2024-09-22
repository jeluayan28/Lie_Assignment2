// Handle the Open the Curtains button
document.getElementById('open-curtains').addEventListener('click', () => {
  // Close and stop music if open
  closeAndStopMusic();

  // Show sunlight effect
  const sunlight = document.getElementById('sunlight');
  sunlight.classList.add('sunlight-animation');

  // Optional: Remove sunlight effect after animation completes
  setTimeout(() => {
    sunlight.classList.remove('sunlight-animation');
  }, 1000); // Match the duration of the animation in CSS
});

//timer
let timerElement = document.getElementById("timer");
let countdown;
let timeLeft = 30; // 60 seconds

// Modal elements
const modal = document.getElementById("custom-alert");
const confirmButton = document.getElementById("confirm-button");


(function() {
  let timeLeft = 30;
  let countdown;

  // Elements for the curtain, modal, timer, and alert
  const curtainLeft = document.getElementById("curtain-left");
  const curtainRight = document.getElementById("curtain-right");
  const welcomeMessage = document.getElementById("welcome-message");
  const startButton = document.getElementById("start-game-button");
  const timerElement = document.getElementById("timer");
  const alertMessage = document.getElementById("alert-message");
  const restartButton = document.getElementById("restart-button");

  // Function to open the curtains and show the welcome message
  function openCurtains() {
    document.body.classList.add("curtains-open"); // Trigger the curtain animation
    setTimeout(() => {
      welcomeMessage.style.display = "flex"; // Display the welcome message after the curtains open
    }, 2000); // Wait for curtain animation to finish
  }

  // Function to start the game and the timer
  function startGame() {
    welcomeMessage.style.display = "none"; // Hide the welcome modal
    timerElement.style.display = "block"; // Show the timer
    timeLeft = 30;
    startTimer(); // Start the timer
  }

  function startTimer() {
    timerElement.textContent = timeLeft; // Initialize timer display
    countdown = setInterval(() => {
      timeLeft--;
      timerElement.textContent = timeLeft;

      if (timeLeft <= 0) {
        clearInterval(countdown);
        showAlert(); // Show alert when time runs out
      }
    }, 1000); // 1-second intervals
  }

  // Function to show the custom alert modal
  function showAlert() {
    timerElement.style.display = "none"; // Hide the timer
    alertMessage.style.display = "flex"; // Show the alert modal
  }

  // Function to restart the game
  function restartGame() {
    alertMessage.style.display = "none"; // Hide the alert modal
    timeLeft = 30; // Reset timer
    startGame(); // Restart the game
  }

  // Event listeners
  startButton.addEventListener("click", startGame); // Start the game on "Start" button click
  restartButton.addEventListener("click", restartGame); // Restart the game on "Start Again" click

  // Open the curtains and show the welcome message when the page loads
  window.onload = function() {
    openCurtains();
  };
})();

