// Variables for the game state
let scorePlayerOne = 0;
let scorePlayerTwo = 0;
let playerOneTurn = true;

// Cointoss to choose starting player
const coinToss = document.getElementById("toss-coin");
const gameScreen = document.getElementById("gameScreen");
const coinScreen = document.getElementById("coinToss");

coinToss.addEventListener("click", function () {
  let coin = Math.floor(Math.random() * 2) + 1;
  if (coin === 1) {
    notificationMessage.textContent = "Heads! Player 1 gets to start the game!";
    playerOneTurn = true;
  } else {
    notificationMessage.textContent = "Tails! Player 2 gets to start the game!";
    playerOneTurn = false;
    playerOneDice.classList.remove("active");
    playerTwoDice.classList.add("active");
  }
  gameScreen.classList.remove("not-visible");
  coinScreen.classList.add("not-visible");
});

// Variables to store references to the DOM nodes
const notificationMessage = document.getElementById("message");
const playerOneScore = document.getElementById("player1Scoreboard");
const playerTwoScore = document.getElementById("player2Scoreboard");
const playerOneDice = document.getElementById("player1Dice");
const playerTwoDice = document.getElementById("player2Dice");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

// funcion to toggle button display
function btnToggle() {
  rollBtn.style.display = "none";
  resetBtn.style.display = "block";
}

// rollBtn hookup  generating a random number between 1-6 and setting that score
// to the corresponding player
rollBtn.addEventListener("click", function () {
  const dice = Math.floor(Math.random() * 6) + 1;
  if (playerOneTurn) {
    notificationMessage.textContent = "Player 2 Turn";
    playerOneDice.textContent = dice;
    scorePlayerOne += dice;
    playerOneScore.textContent = scorePlayerOne;
    playerTwoDice.textContent = "-";
    playerOneDice.classList.remove("active");
    playerTwoDice.classList.add("active");
  } else {
    notificationMessage.textContent = "Player 1 Turn";
    playerTwoDice.textContent = dice;
    playerOneDice.textContent = "-";
    scorePlayerTwo += dice;
    playerTwoScore.textContent = scorePlayerTwo;
    playerTwoDice.classList.remove("active");
    playerOneDice.classList.add("active");
  }

  // Showing the winner in case 20 points were scored
  if (scorePlayerOne >= 20) {
    notificationMessage.textContent = "Player 1 has won the game!";
    btnToggle();
  } else if (scorePlayerTwo >= 20) {
    notificationMessage.textContent = "Player 2 has won the game!";
    btnToggle();
  }
  playerOneTurn = !playerOneTurn;
});

// OG game reset function
function reset() {
  playerOneTurn = true;
  btnToggle();
  scorePlayerOne = 0;
  scorePlayerTwo = 0;
  playerOneScore.textContent = scorePlayerOne;
  playerTwoScore.textContent = scorePlayerTwo;
  playerOneDice.textContent = "-";
  playerTwoDice.textContent = "-";
  resetBtn.style.display = "none";
  rollBtn.style.display = "block";
}

// Cointoss reset function
function gameReset() {
  gameScreen.classList.add("not-visible");
  coinScreen.classList.remove("not-visible");
  scorePlayerOne = 0;
  scorePlayerTwo = 0;
  playerOneScore.textContent = scorePlayerOne;
  playerTwoScore.textContent = scorePlayerTwo;
  playerOneDice.textContent = "-";
  playerTwoDice.textContent = "-";
  resetBtn.style.display = "none";
  rollBtn.style.display = "block";
}

resetBtn.addEventListener("click", function () {
  gameReset();
});
